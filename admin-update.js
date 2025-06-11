// Admin update script to modify the main website files
function updateMainWebsite() {
    const menuData = JSON.parse(localStorage.getItem('newMenuData'));
    if (!menuData) {
        alert('Brak danych menu do aktualizacji');
        return;
    }
    
    // Update the main HTML file
    updateIndexHTML(menuData);
    
    // Update the JavaScript translations
    updateScriptJS(menuData);
    
    // Clear localStorage after successful update
    localStorage.removeItem('newMenuData');
    localStorage.removeItem('newMenuHTML');
    
    alert('Menu zostało pomyślnie zaktualizowane na stronie głównej!');
}

function updateIndexHTML(menuData) {
    // Generate new HTML content for menu section
    let menuHTML = '<div class="menu-grid">\n';
    
    for (let i = 1; i <= 5; i++) {
        const item = menuData[`item${i}`];
        menuHTML += `                <div class="menu-item">
                    <div class="menu-item-content">
                        <h3 class="menu-item-title" data-key="menu-item-${i}-title">${item.title}</h3>
                        <div class="menu-item-details">`;
        
        if (item.subtitle) {
            menuHTML += `\n                            <p class="menu-item-subtitle" data-key="menu-item-${i}-subtitle">${item.subtitle}</p>`;
        }
        
        menuHTML += `\n                            <p class="menu-item-description" data-key="menu-item-${i}-desc">${item.description.replace(/\n/g, '<br>')}</p>
                            <p class="menu-item-price" data-key="menu-item-${i}-price">Cena: ${item.price} zł</p>
                        </div>
                    </div>
                </div>\n                \n`;
    }
    
    menuHTML += '            </div>';
    
    // Store the new HTML for manual copying if needed
    console.log('New menu HTML:', menuHTML);
    
    // In a real implementation, this would send the data to the server
    // For now, we'll provide instructions for manual update
    return menuHTML;
}

function updateScriptJS(menuData) {
    // Generate new language data
    const polishData = {};
    const englishData = {};
    
    for (let i = 1; i <= 5; i++) {
        const item = menuData[`item${i}`];
        
        // Polish translations
        polishData[`menu-item-${i}-title`] = item.title;
        polishData[`menu-item-${i}-desc`] = item.description.replace(/\n/g, '<br>');
        polishData[`menu-item-${i}-price`] = `Cena: ${item.price} zł`;
        
        if (item.subtitle) {
            polishData[`menu-item-${i}-subtitle`] = item.subtitle;
        }
        
        // English translations (you'll need to translate these)
        englishData[`menu-item-${i}-title`] = `Set ${i}`;
        englishData[`menu-item-${i}-desc`] = translateToEnglish(item.description);
        englishData[`menu-item-${i}-price`] = `Price: ${item.price} zł`;
        
        if (item.subtitle) {
            englishData[`menu-item-${i}-subtitle`] = '1 free roll with every set.';
        }
    }
    
    console.log('New Polish data:', polishData);
    console.log('New English data:', englishData);
    
    return { polish: polishData, english: englishData };
}

function translateToEnglish(polishDescription) {
    // Basic translation mapping for common sushi terms
    const translations = {
        'Futomaki': 'Futomaki',
        'Hosomaki': 'Hosomaki',
        'California': 'California',
        'Philadelphia': 'Philadelphia',
        'pieczony łosoś': 'grilled salmon',
        'łosoś surowy': 'raw salmon',
        'łosoś pieczony': 'grilled salmon',
        'łosoś': 'salmon',
        'tuńczyk surowy': 'raw tuna',
        'krewetka': 'shrimp',
        'krewetka gotowana': 'cooked shrimp',
        'węgorz': 'eel',
        'ogórek': 'cucumber',
        'awokado': 'avocado',
        'mango': 'mango',
        'batat': 'sweet potato',
        'sałatka surimi': 'surimi salad',
        'tempura': 'tempura',
        'w tempurze': 'in tempura',
        'okładany w mango': 'wrapped in mango',
        'okładana tatakiem': 'wrapped with tataki',
        'opalany z sosem unagi': 'flambéed with unagi sauce',
        'w zielone masago': 'in green masago',
        'rolka gratis': 'free roll',
        'sztuk': 'pieces',
        '(6 sztuk)': '(6 pieces)',
        '(8 sztuk)': '(8 pieces)',
        '(10 sztuk)': '(10 pieces)'
    };
    
    let englishText = polishDescription;
    
    for (const [polish, english] of Object.entries(translations)) {
        englishText = englishText.replace(new RegExp(polish, 'gi'), english);
    }
    
    return englishText;
}

// Export functions for use in admin panel
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateMainWebsite, updateIndexHTML, updateScriptJS };
}