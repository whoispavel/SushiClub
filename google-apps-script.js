// Google Apps Script to handle form submissions to Google Sheets
// This script should be deployed as a web app in Google Apps Script

function doPost(e) {
  try {
    // Get the spreadsheet by ID
    const spreadsheetId = '1GniiJTiEMbv0gbp_wTmoasCN8aNSVjmS8p-oQpc3QyA';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Get form data
    const name = e.parameter.name;
    const email = e.parameter.email;
    const timestamp = e.parameter.timestamp;
    const language = e.parameter.language;
    
    // Validate required fields
    if (!name || !email) {
      return ContentService
        .createTextOutput(JSON.stringify({error: 'Name and email are required'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if this is the first row (add headers if needed)
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Name', 'Email', 'Language']]);
    }
    
    // Add the new row
    sheet.appendRow([timestamp, name, email, language]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({message: 'GET requests not supported'}))
    .setMimeType(ContentService.MimeType.JSON);
}