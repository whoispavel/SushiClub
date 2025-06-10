# Google Sheets Integration Setup

To connect your form to the Google Sheets spreadsheet, follow these steps:

## Step 1: Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the content from `google-apps-script.js` file
4. Save the project with a name like "Sushi Club Form Handler"

## Step 2: Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Description: "Sushi Club form submissions"
4. Execute as: "Me"
5. Who has access: "Anyone" (this allows your website to send data)
6. Click "Deploy"
7. Copy the Web app URL that appears

## Step 3: Update Website
1. In the `script.js` file, find this line:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/AKfycbwYourScriptIdHere/exec';
   ```
2. Replace `AKfycbwYourScriptIdHere` with the actual script ID from your Web app URL

## Step 4: Set Permissions
1. The first time the script runs, Google will ask for permissions
2. Click "Review permissions"
3. Choose your Google account
4. Click "Advanced" if you see a warning
5. Click "Go to [Your Project Name] (unsafe)"
6. Click "Allow"

## Your Spreadsheet
The form data will be saved to: https://docs.google.com/spreadsheets/d/1GniiJTiEMbv0gbp_wTmoasCN8aNSVjmS8p-oQpc3QyA/edit

Columns will be:
- Timestamp: When the form was submitted
- Name: Customer's name
- Email: Customer's email
- Language: Which language they used (PL/EN)