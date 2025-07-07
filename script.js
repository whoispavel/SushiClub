// Language data object
const languageData = {
    en: {
        'hero-title': 'SUSHI MENU',
        'hero-subtitle': 'Authentic Japanese flavors delivered to your table',
        'cta-button': 'Call Us',
        'menu-title': 'Our Menu',
        'discount-title': 'Get 15% Discount',
        'discount-subtitle': 'Leave your contacts and get a personal discount on your first order',
        'discount-button': 'Get 15% Discount',
        'contact-title': 'Contacts',
        'follow-title': 'Follow Us',
        'address': 'Szczytnicka 54/1D, 50-382 Wrocław',
        'copyright': '© 2024 Sushi Club. All rights reserved.',
        'name-placeholder': 'Your name',
        'email-placeholder': 'Your email',
        'menu-item-1-title': 'Set 1',
        'menu-item-1-desc': 'Futomak grilled salmon (6 pieces)<br>Hosomaki grilled salmon (8 pieces)',
        'menu-item-1-subtitle': '1 free roll with every set.',
        'menu-item-1-price': 'Price: 67 zł',
        'menu-item-2-title': 'Set 2',
        'menu-item-2-desc': 'Futomak raw salmon (6 pieces)<br>Hosomaki raw salmon (8 pieces)<br>1 free roll (6 pieces)',
        'menu-item-2-subtitle': '1 free roll with every set.',
        'menu-item-2-price': 'Price: 67 zł',
        'menu-item-3-title': 'Set 3',
        'menu-item-3-desc': 'California raw tuna wrapped in mango (8 pieces)<br>Futomak grilled salmon (6 pieces)<br>Hosomaki cucumber (8 pieces)',
        'menu-item-3-subtitle': '1 free roll with every set.',
        'menu-item-3-price': 'Price: 137 zł',
        'menu-item-4-title': 'Set 4',
        'menu-item-4-desc': 'Philadelphia mango with salmon grilled with unagi sauce (8 pieces)<br>California shrimp wrapped in tartar (10 pieces)<br>Futomak tilapia tempura (6 pieces)<br>Hosomaki cucumber (8 pieces)<br>Hosomaki sweet potato (8 pieces)',
        'menu-item-4-subtitle': '1 free roll with every set.',
        'menu-item-4-price': 'Price: 197 zł',
        'menu-item-5-title': 'Set 5',
        'menu-item-5-desc': 'California eel in green masago (8 pieces)<br>Futomaki surimi salad in tempura (6 pieces)<br>Futomaki cooked shrimp (6 pieces)<br>Hosomaki mango (8 pieces)<br>Hosomaki avocado (8 pieces)<br>Hosomaki salmon (8 pieces)',
        'menu-item-5-subtitle': '1 free roll with every set.',
        'menu-item-5-price': 'Price: 223 zł',
        'menu-item-6-title': 'Set 6',
        'menu-item-6-desc': 'Vulkan grilled salmon (2 pieces)<br>nori, rice, Philadelphia cheese, avocado, cheese caps, with sweet sauce<br><br>Vulkan salmon tartar (2 pieces)<br>nori, rice, salmon, leek, sesame oil<br><br>Vulkan crab (2 pieces)<br>nori, rice, philadelphia cheese, cooked shrimp, masago<br><br>Nigiri salmon (2 pieces)<br>Nigiri tuna (2 pieces)<br>Nigiri eel (2 pieces)',
        'menu-item-6-subtitle': '1 free roll with every set.',
        'menu-item-6-price': 'Price: 127 zł',
        'menu-item-7-title': 'Futo set',
        'menu-item-7-desc': 'Futomaki salmon tartar (12 pieces)<br>Futomaki salmon (12 pieces)<br>Futomaki surimi salad in tempura (12 pieces)<br>Futomaki shrimp (12 pieces)<br>Futomaki tuna (12 pieces)<br>Futomaki vegetarian (tofu, kampyo, cucumber) (12 pieces)',
        'menu-item-7-price': 'Price: 395 zł',
        'menu-item-8-title': 'California set',
        'menu-item-8-desc': 'Philadelphia wrapped in grilled tartar<br>California grilled salmon wrapped in mango<br>Philadelphia salmon<br>California tuna in green masago<br>California sweet potato wrapped in pear<br>California zucchini wrapped in grilled bacon<br>Philadelphia eel<br>California tuna in green masago<br>California sweet potato wrapped in pear<br>California zucchini wrapped in grilled bacon',
        'menu-item-8-subtitle': 'Each California – 10 pieces.',
        'menu-item-8-price': 'Price: 377 zł',
        'menu-item-9-title': 'PHILADELPHIA',
        'menu-item-9-desc': 'Philadelphia tuna<br>Philadelphia cheese, masago, mango, salmon - 57 zł<br><br>Philadelphia shrimp<br>Philadelphia cheese, masago, mango, salmon - 57 zł<br><br>Philadelphia eel<br>Philadelphia cheese, masago, mango, salmon - 59 zł<br><br>Philadelphia salmon<br>Philadelphia cheese, masago, mango, salmon - 57 zł',
        'menu-item-9-subtitle': 'Various types of Philadelphia',
        'menu-item-10-title': 'Vegetarian set',
        'menu-item-10-desc': 'Futomaki tofu (6 pieces)<br>California zucchini in cucumbers (10 pieces)<br>Philadelphia with cucumber wrapped in goma (10 pieces)<br>Hosomaki kampyo (8 pieces)<br>Hosomaki mango (8 pieces)<br>Nigiri with avocado (2 pieces)',
        'menu-item-10-price': 'Price: 167 zł',
        'menu-item-11-title': 'Hosomaki set',
        'menu-item-11-desc': 'Hosomaki cucumber<br>Hosomaki kampyo<br>Hosomaki mango<br>Hosomaki avocado<br>Hosomaki sweet potato<br>Hosomaki salmon<br>Hosomaki tuna<br>Hosomaki grilled salmon<br>Hosomaki shrimp<br>Hosomaki eel',
        'menu-item-11-price': 'Price: 167 zł',
        'menu-item-12-title': 'SINGLE ROLLS',
        'menu-item-12-desc': 'California Rainbow (salmon tuna, shrimp) (10 pieces) - 57 zł<br><br>California chicken panko wrapped in bacon - 57 zł<br><br>Philadelphia salmon tartar - 57 zł<br><br>California grilled salmon wrapped in mango - 57 zł<br><br>Philadelphia shrimp - 57 zł<br><br>Philadelphia salmon - 57 zł',
        'menu-item-12-subtitle': 'Various rolls 10 pieces each',
        'menu-item-13-title': 'Sushi burger salmon',
        'menu-item-13-desc': '(nori, rice, salmon, philadelphia cheese, masago, sriracha sauce, panko, tempura flour, avocado, cucumber).',
        'menu-item-13-price': 'Price: 69 zł',
        'menu-item-14-title': 'Sushi burger shrimp',
        'menu-item-14-desc': '(nori, rice, shrimp + mango, sweet chili sauce, cheddar cheese, cucumber, panko, tempura flour).',
        'menu-item-14-price': 'Price: 69 zł',
        'menu-item-15-title': 'Vegetarian sushi burger',
        'menu-item-15-desc': '(nori, rice, sweet potato, kampyo, cucumber, philadelphia cheese, mango, panko, tempura flour).',
        'menu-item-15-price': 'Price: 59 zł',
        'menu-item-16-title': 'APPETIZERS',
        'menu-item-16-desc': 'Salmon tartar 150 gram (salmon, leek, sesame oil) - 35 zł<br><br>Goma salad (150 gram) - 17 zł<br><br>Gyoza dumplings with meat + sweet chili sauce (6 pieces + 1 piece) - 25 zł<br><br>Vegetarian gyoza dumplings + sweet chili sauce (6 pieces + 1 piece) - 23 zł<br><br>Kimchi (Chinese cabbage, leek, carrot, white radish, ginger, garlic, chili (150 gram) - 17 zł<br><br>Squid (6 pieces + sweet chili sauce) - 29 zł<br><br>Shrimp (6 pieces + sweet sauce) - 29 zł',
        'menu-item-16-subtitle': 'Various appetizers',
        'menu-item-17-title': 'BEVERAGES',
        'menu-item-17-desc': 'Still water - 4 zł<br>Sprite lime - 7 zł<br>Coca Cola Zero Sugar - 7 zł<br>Coca Cola Original - 7 zł<br><br>Tea - 12 zł<br>Coffee - 17 zł',
        'menu-item-18-title': 'EXTRAS',
        'menu-item-18-desc': 'chopsticks. 2 zł<br>chopstick helper. 2 zł<br>ginger. 2 zł<br>wasabi 2 zł',
        'callback-btn': 'Order a call',
        'callback-header': 'Order a call',
        'callback-phone-placeholder': 'Your phone number',
        'callback-email-placeholder': 'Your email (optional)',
        'callback-message-placeholder': 'Comment (optional)',
        'callback-submit': 'Send',
        'callback-success': '✓ Thank you! We will call you back within 15 minutes.',
        'callback-loading': 'Sending...',
        'callback-error-phone': 'Please enter a valid phone number',
        'callback-error-email': 'Please enter a valid email',
        'callback-error-send': 'Sending error. Please try again.',
        'footer-popup-header': 'Order a call',
        'footer-popup-phone-placeholder': 'Your phone number',
        'footer-popup-email-placeholder': 'Your email (optional)',
        'footer-popup-message-placeholder': 'Comment (optional)',
        'footer-popup-submit': 'Send',
        'footer-popup-success': '✓ Thank you! We will call you back within 15 minutes.',
        'footer-popup-loading': 'Sending...',
        'footer-popup-error-phone': 'Please enter a valid phone number',
        'footer-popup-error-email': 'Please enter a valid email',
        'footer-popup-error-send': 'Sending error. Please try again.'
    },
    pl: {
        'hero-title': 'MENU SUSHI',
        'hero-subtitle': 'Autentyczne japońskie smaki dostarczone do Twojego stołu',
        'cta-button': 'Zadzwoń',
        'menu-title': 'Nasze Menu',
        'discount-title': 'Otrzymaj 15% zniżki',
        'discount-subtitle': 'Zostaw swoje kontakty i otrzymaj personalną zniżkę na pierwsze zamówienie',
        'discount-button': 'Otrzymaj 15% zniżki',
        'contact-title': 'Kontakt',
        'follow-title': 'Śledź nas',
        'address': 'Szczytnicka 54/1D, 50-382 Wrocław',
        'copyright': '© 2024 Sushi Club. Wszystkie prawa zastrzeżone.',
        'name-placeholder': 'Twoje imię',
        'email-placeholder': 'Twój email',
        'menu-item-1-title': 'Zestaw 1 (14 szt. + 6 szt. GRATIS)',
        'menu-item-1-desc': '·Futomak pieczony łosoś (6 sztuk) (nori, ryż, łosoś pieczony, serek philadelphia, ogórek, kanpyo)<br>·Hosomaki pieczony łosoś (8 sztuk) (nori, ryż, pieczony łosoś, serek philadelphia)',
        'menu-item-1-subtitle': '',
        'menu-item-1-price': 'Cena: 67 zł',
        'menu-item-2-title': 'Zestaw 2 (14 szt. + 6 szt. GRATIS)',
        'menu-item-2-desc': '·Futomak łosoś surowy (6 sztuk) (nori, ryż, serek philadelphia, łosoś, awokado, ogórek)<br>·Hosomaki łosoś surowy (8 sztuk) (nori, ryż, łosoś, serek philadelphia)',
        'menu-item-2-subtitle': '',
        'menu-item-2-price': 'Cena: 67 zł',
        'menu-item-3-title': 'Zestaw 3 (26 szt. + 6 szt. GRATIS)',
        'menu-item-3-desc': '·California tuńczyk surowy okładany w mango (10 sztuk) (nori, ryż, serek philadelphia, tuńczyk, sriracha, ogórek, mango)<br>·Futomak łosoś pieczony (6 sztuk) (nori, ryż, łosoś pieczony, serek philadelphia, ogórek, kanpyo)<br>·Hosomaki ogórek (8 sztuk) (nori, ryż, serek philadelphia, ogórek)',
        'menu-item-3-subtitle': '',
        'menu-item-3-price': 'Cena: 137 zł',
        'menu-item-4-title': 'Zestaw 4 (46 szt. + 6 szt. GRATIS)',
        'menu-item-4-desc': '·Philadelphia mango z łososiem opalony z sosem unagi (10 sztuk) (nori, ryż, serek philadelphia, mango, łosoś opalany, sos unagi)<br>·California krewetka okładaną tatarem (10 sztuk) (nori, ryż, sos majonez, krewetka tempura, ogórek, tatar z łososiem, olej sezamowy, por)<br>·Futomak tilapia tempura (6 sztuk) (nori, ryż, tilapia tempura, sos majonez, ogórek)<br>·Hosomaki ogórek (8 sztuk) (nori, ryż, serek philadelphia, ogórek)<br>·Hosomaki batat (8 sztuk) (nori, ryż, serek philadelphia, batat)',
        'menu-item-4-subtitle': '',
        'menu-item-4-price': 'Cena: 197 zł',
        'menu-item-5-title': 'Zestaw 5 (46 szt. + 6 szt. GRATIS)',
        'menu-item-5-desc': '·California węgorz w zielone masago (10 sztuk) (nori, ryż, zielone masago, serek philadelphia, węgorz, ogórek)<br>·Futomaki sałatka surimi w tempurze (6 sztuk) (nori, ryż, serek philadelphia, majonez, por, surimi, togarashi, mąka tempura, cała roleczka w tempurze)<br>·Futomaki krewetka gotowana (6 sztuk) (nori, ryż, majonez, krewetka gotowana)<br>·Hosomaki mango (8 sztuk) (nori, ryż, serek philadelphia, mango)<br>·Hosomaki awokado (8 sztuk) (nori, ryż, serek philadelphia, awokado)<br>·Hosomaki łosoś (8 sztuk) (nori, ryż, serek philadelphia, łosoś)',
        'menu-item-5-subtitle': '',
        'menu-item-5-price': 'Cena: 205 zł',
        'menu-item-6-title': 'Zestaw 6 (12 szt. + 6 szt. GRATIS)',
        'menu-item-6-desc': '·Vulkan łosoś pieczony (2 sztuki) (nori, ryż, serek philadelphia, łosoś pieczony, sos słodki)<br>·Vulkan tatar z łososia (2 sztuki) (nori, ryż, tatar z łososia, por, togarashi, olej sezamowy)<br>·Vulkan krabowy (2 sztuki) (nori, ryż, serek philadelphia, krewetka gotowana, masago, sos słodki)<br>·Nigiri łosoś (2 sztuki) (ryż, łosoś)<br>·Nigiri tuńczyk (2 sztuki) (ryż, tuńczyk, sriracha)<br>·Nigiri węgorz (2 sztuki) (ryż, węgorz)',
        'menu-item-6-subtitle': '',
        'menu-item-6-price': 'Cena: 127 zł',
        'menu-item-7-title': 'Futo set (72 szt. + 6 szt. GRATIS)',
        'menu-item-7-desc': '·Futomaki tatar z łososia (12 sztuk) (ryż, nori, łosoś, por, olej sezamowy, togarashi)<br>·Futomaki łosoś (12 sztuk) (ryż, nori, łosoś, awokado, ogórek)<br>·Futomaki sałatka surimi w tempurze (12 sztuk) (ryż, nori, serek philadelphia, majonez, por, surimi, togarashi)<br>·Futomaki krewetka (12 sztuk) (ryż, nori, krewetka tempura, majonez, ogórek)<br>·Futomaki tuńczyk (12 sztuk) (ryż, nori, serek philadelphia, tuńczyk, sriracha, ogórek)<br>·Futomaki wegetarianski (12 sztuk) (tofu, kampio, ogórek, ryż, nori, serek philadelphia)',
        'menu-item-7-price': 'Cena: 395 zł',
        'menu-item-8-title': 'California set (70 szt. + 6 szt. GRATIS)',
        'menu-item-8-desc': '·Philadelphia łosoś (10 sztuk) (nori, ryż, serek Philadelphia, ogórek, łosoś)<br>·Philadelphia węgorzem (10 sztuk) (nori, ryż, serek Philadelphia, ogórek, węgorz)<br>·California pieczony łosoś okładany mango (10 sztuk) (nori, ryż, serek Philadelphia, pieczony łosoś, kanpyo, mango)<br>·California tuńczyk w masago zielony (10 sztuk) (nori, ryż, serek Philadelphia, tuńczyk, ogórek, awokado, masago zielony)<br>·California batat okładana gruszka (10 sztuk) (nori, ryż, serek Philadelphia, batat, ogórek, gruszka)<br>·California cukinia okładana boczkiem opalonym (10 sztuk) (nori, ryż, sos majonez, cukinia, ogórek, boczek, sriracha)<br>·Philadelphia okładana tatarem opalonym (10 sztuk) (nori, ryż, serek Philadelphia, ogórek, łosoś, por, olej sezamowy, togarashi)',
        'menu-item-8-subtitle': '',
        'menu-item-8-price': 'Cena: 377 zł',
        'menu-item-9-title': 'Philadelphia tuńczyk (10)',
        'menu-item-9-desc': '(Nori, ryż, serek Philadelphia, ogórek, tuńczyk)',
        'menu-item-9-subtitle': '',
        'menu-item-9-price': 'Cena: 57 zł',
        'menu-item-10-title': 'Philadelphia węgorz (10)',
        'menu-item-10-desc': '(Nori, ryż, serek Philadelphia, ogórek, węgorz)',
        'menu-item-10-price': 'Cena: 59 zł',
        'menu-item-11-title': 'Philadelphia krewetka (10)',
        'menu-item-11-desc': '(Nori, ryż, serek Philadelphia, ogórek, krewetka)',
        'menu-item-11-price': 'Cena: 57 zł',
        'menu-item-12-title': 'Philadelphia łosoś (10)',
        'menu-item-12-desc': '(Nori, ryż, serek Philadelphia, ogórek, łosoś)',
        'menu-item-12-price': 'Cena: 57 zł',
        'menu-item-13-title': 'Wegetariański Set',
        'menu-item-13-desc': '1. ryż, nori, serek Philadelphia, tofu, kampio, ogórek<br>2. ryż, nori, serek Philadelphia, cukinia, ogórek<br>3. ryż, nori, serek Philadelphia, ogórek, goma, olej sezamowy<br>4. ryż, nori, serek Philadelphia, kampyo<br>5. ryż, nori, serek Philadelphia, mango<br>6. ryż, nori, awokado',
        'menu-item-13-price': 'Cena: 167 zł',
        'menu-item-14-title': 'Hosomaki Set',
        'menu-item-14-desc': '(wszystkie po 8 sztuk, każdy + serek)<br>1. Hosomaki ogórek z serkiem<br>2. Hosomaki kanpyo z serkiem<br>3. Hosomaki mango z serkiem<br>4. Hosomaki awokado z serkiem<br>5. Hosomaki batat z serkiem<br>6. Hosomaki łosoś z serkiem<br>7. Hosomaki tuńczyk z serkiem i sriracha<br>8. Hosomaki łosoś pieczony z serkiem<br>9. Hosomaki krewetka gotowana z serkiem<br>10. Hosomaki węgorz z serkiem',
        'menu-item-14-price': 'Cena: 167 zł',
        'menu-item-15-title': 'Rolki Pojedyncze',
        'menu-item-15-desc': '1. ryż, nori, serek philadelphia, łosoś, tuńczyk, krewetka<br>2. ryż, nori, sos majonez, boczek, sriracha, kurczak panko<br>3. ryż, nori, serek philadelphia, ogórek, łosoś, por, togarashi, olej sezamowy<br>4. ryż, nori, serek philadelphia, pieczony łosoś, ogórek, kanpyo, mango<br>5. ryż, nori, serek philadelphia, ogórek, krewetka<br>6. ryż, nori, serek philadelphia, łosoś',
        'menu-item-15-price': 'Cena: 57 zł (10 sztuk)',
        'menu-item-16-title': 'Burgery',
        'menu-item-16-desc': '- sushi burger łosoś<br>(nori, ryż, łosoś, serek philadelphia, masago, sos sriracha, panko, maka tempura, awokado, ogórek). 69 złotych<br>- sushi burger krewetka<br>(nori, ryż, krewetka + mango, sos słodkie chilli, ser cheddar, ogórek, panko, maka tempura). 69 złotych<br>- sushi burger wegetariański<br>(nori, ryż, batat, kampyo, ogórek, serek philadelphia, mango, panko, maka tempura). 59 złotych',
        'menu-item-16-price': '',
        'menu-item-17-title': 'Lancz',
        'menu-item-17-desc': 'Lancz 1 surowy<br>1: futo łosoś (6 sztuk)<br>2: sałatka goma (80 gram)<br>3: zupka miso z łososiem<br>4: pierożki gyoza wieprzowe (3 sztuki)<br>Lancz 2 pieczony<br>1: futo łosoś pieczony (6 sztuk)<br>2: zupka miso z łososiem<br>3: pierożki gyoza wieprzowa (3 sztuki)<br>4: sałatka goma (80 gram)<br>Lancz 3 wegetariański<br>1: futo wegetariańskie (6 sztuk)<br>2: zupka miso z tofu<br>3: sałatka goma (80 gram)<br>4: pierożki gyoza wegetariańskie (3 sztuki)<br>Lancz 1: 70 złoty<br>Lancz 2: 70 złoty<br>Lancz 3: 65 złoty',
        'menu-item-17-price': '',
        'menu-item-18-title': 'PRZYSTAWKI',
        'menu-item-18-desc': '1. Tatar z łososia (150g) – łosoś, por, olej sezamowy – 35 zł<br>2. Sałatka goma (150g) – 17 zł<br>3. Pierożki gyoza z mięsem + sos sweet chili (6 sztuk + 1 sztuka) – 25 zł<br>4. Pierożki gyoza wegetariańskie + sos sweet chili (6 sztuk + 1 sztuka) – 23 zł<br>5. Kimchi (kapusta pekińska, por, marchew, biała rzodkiew, imbir, czosnek, chili) – 17 zł (150 gram.)<br>6. Kalmary w panko (6 sztuk + sos sweet chili) – 29 zł + mąka tempura<br>7. Krewetki w panko (6 sztuk + sos sweet chilli) – 29 zł<br>8. Zupa miso z tofu (450 ml.)- 15zł<br>9. Zupa miso z łososiem (450 ml.)- 20zł',
        'menu-item-18-price': '',
        'callback-btn': 'Zamów rozmowę',
        'callback-header': 'Zamów rozmowę',
        'callback-phone-placeholder': 'Twój numer telefonu',
        'callback-email-placeholder': 'Twój email (opcjonalnie)',
        'callback-message-placeholder': 'Komentarz (opcjonalnie)',
        'callback-submit': 'Wyślij',
        'callback-success': '✓ Dziękujemy! Oddzwonimy w ciągu 15 minut.',
        'callback-loading': 'Wysyłanie...',
        'callback-error-phone': 'Wprowadź poprawny numer telefonu',
        'callback-error-email': 'Wprowadź poprawny email',
        'callback-error-send': 'Błąd wysyłki. Spróbuj ponownie.',
        'footer-popup-header': 'Zamów rozmowę',
        'footer-popup-phone-placeholder': 'Twój numer telefonu',
        'footer-popup-email-placeholder': 'Twój email (opcjonalnie)',
        'footer-popup-message-placeholder': 'Komentarz (opcjonalnie)',
        'footer-popup-submit': 'Wyślij',
        'footer-popup-success': '✓ Dziękujemy! Oddzwonimy w ciągu 15 minut.',
        'footer-popup-loading': 'Wysyłanie...',
        'footer-popup-error-phone': 'Wprowadź poprawny numer telefonu',
        'footer-popup-error-email': 'Wprowadź poprawny email',
        'footer-popup-error-send': 'Błąd wysyłki. Spróbuj ponownie.'
    }
};

function initializeLanguageSwitcher() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pl';
    
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.getAttribute('data-lang');
            switchLanguage(language);
            updateActiveLanguageButton(button);
            localStorage.setItem('selectedLanguage', language);
        });
    });
    
    // Apply saved language on page load
    switchLanguage(savedLanguage);
    const activeButton = document.querySelector(`[data-lang="${savedLanguage}"]`);
    if (activeButton) {
        updateActiveLanguageButton(activeButton);
    }
}

function switchLanguage(language) {
    // Update elements with data-key
    const keyElements = document.querySelectorAll('[data-key]');
    keyElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (languageData[language] && languageData[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = languageData[language][key];
            } else {
                element.innerHTML = languageData[language][key];
            }
        }
    });
    // Update elements with data-i18n
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (languageData[language] && languageData[language][key]) {
            element.innerHTML = languageData[language][key];
        }
    });
    updateFormPlaceholders(language);
}

function updateFormPlaceholders(language) {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    
    if (nameInput && languageData[language]['name-placeholder']) {
        nameInput.placeholder = languageData[language]['name-placeholder'];
    }
    
    if (emailInput && languageData[language]['email-placeholder']) {
        emailInput.placeholder = languageData[language]['email-placeholder'];
    }
}

function updateActiveLanguageButton(activeButton) {
    const languageButtons = document.querySelectorAll('.lang-btn');
    languageButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

function getLanguageCode(language) {
    const languageCodes = {
        'pl': 'pl-PL',
        'en': 'en-US'
    };
    return languageCodes[language] || 'pl-PL';
}

function initializeFormHandling() {
    const discountForm = document.getElementById('discountForm');
    if (discountForm) {
        discountForm.addEventListener('submit', handleFormSubmission);
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    
    if (!name || !email) {
        showNotification('Proszę wypełnić wszystkie pola', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Proszę podać prawidłowy adres email', 'error');
        return;
    }
    
    submitToGoogleSheets(name, email);
}

async function submitToGoogleSheets(name, email) {
    const submitButton = document.querySelector('#discountForm button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Wysyłanie...';
    
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwQEiwn5dNFDzHjK_8YHY9VtRaQ_6UkJ1ZL6rOJ8-qHCOB5i_yKKrRsG8QK-0vB-VzV/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
        });
        
        if (response.ok) {
            showNotification('Dziękujemy! Skontaktujemy się z Tobą wkrótce.', 'success');
            document.getElementById('discountForm').reset();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Wystąpił błąd. Spróbuj ponownie później.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    } else {
        notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function initializeImageLoading() {
    const images = document.querySelectorAll('.menu-item-image');
    
    images.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            img.style.opacity = '1';
        }, index * 100);
    });
}

function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.menu-item, .hero-content, .section-title');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSwitcher();
    initializeFormHandling();
    initializeImageLoading();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeReadMore();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(300px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(300px); opacity: 0; }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Phone number validation and formatting
function formatPhoneNumber(phone) {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format for Polish numbers (9 digits)
    if (cleaned.length === 9) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    }
    
    // Format for international numbers starting with +48
    if (cleaned.startsWith('48') && cleaned.length === 11) {
        const number = cleaned.substring(2);
        return '+48 ' + number.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    }
    
    return phone;
}

function validatePhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    // Polish mobile numbers (9 digits starting with 5, 6, 7, 8, 9)
    if (cleaned.length === 9 && /^[5-9]/.test(cleaned)) {
        return true;
    }
    
    // International Polish numbers (+48 followed by 9 digits)
    if (cleaned.startsWith('48') && cleaned.length === 11 && /^48[5-9]/.test(cleaned)) {
        return true;
    }
    
    return false;
}

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = '8007889504:AAESFASDeT0njLEczDDpO__vENkVJd5d340';
const TELEGRAM_CHAT_ID = '7364136001';

async function sendToTelegram(data) {
    const message = `
📞 *Новий запит на дзвінок*

📱 *Телефон:* ${data.phone}
📧 *Email:* ${data.email}
💬 *Коментар:* ${data.message}
⏰ *Час:* ${data.timestamp}
🌐 *Джерело:* ${data.source}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown'
        })
    });

    return response;
}

// Callback Widget Functionality
function initializeCallbackWidget() {
    const callbackBtn = document.getElementById('callback-btn');
    const callbackForm = document.getElementById('callback-form');
    const closeBtn = document.getElementById('close-callback');
    const formData = document.getElementById('callback-form-data');
    const successDiv = document.getElementById('callback-success');
    const phoneInput = document.getElementById('callback-phone');

    if (!callbackBtn || !callbackForm) return;

    // Phone number formatting and validation
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value;
            
            // Allow only digits, spaces, +, -, (, )
            value = value.replace(/[^\d\s\+\-\(\)]/g, '');
            
            // Format the number
            const formatted = formatPhoneNumber(value);
            e.target.value = formatted;
            
            // Visual feedback
            if (value.length > 0) {
                const isValid = validatePhoneNumber(value);
                e.target.style.borderColor = isValid ? '#28a745' : '#dc3545';
            } else {
                e.target.style.borderColor = '';
            }
        });

        // Auto-focus on phone input when form opens
        callbackBtn.addEventListener('click', () => {
            setTimeout(() => {
                phoneInput.focus();
            }, 300);
        });
    }

    // Open callback form
    callbackBtn.addEventListener('click', () => {
        callbackForm.classList.add('active');
    });

    // Close callback form
    closeBtn.addEventListener('click', () => {
        callbackForm.classList.remove('active');
        resetForm();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!callbackForm.contains(e.target) && !callbackBtn.contains(e.target)) {
            callbackForm.classList.remove('active');
            resetForm();
        }
    });

    // Handle form submission
    formData.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const phone = document.getElementById('callback-phone').value;
        const email = document.getElementById('callback-email').value;
        const message = document.getElementById('callback-message').value;

        // Validate phone number
        if (!validatePhoneNumber(phone)) {
            showNotification('Будь ласка, введіть правильний номер телефону', 'error');
            return;
        }

        // Validate email if provided
        if (email && !isValidEmail(email)) {
            showNotification('Будь ласка, введіть правильний email', 'error');
            return;
        }

        // Show loading state
        const submitBtn = formData.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Відправляємо...';
        submitBtn.disabled = true;

        try {
            // Send to Telegram bot
            const telegramData = {
                phone: phone,
                email: email || 'Не вказано',
                message: message || 'Без коментаря',
                timestamp: new Date().toLocaleString('uk-UA'),
                source: 'Sushi Club Website'
            };

            const response = await sendToTelegram(telegramData);
            
            if (response.ok) {
                formData.style.display = 'none';
                successDiv.style.display = 'block';
                
                // Auto close after 3 seconds
                setTimeout(() => {
                    callbackForm.classList.remove('active');
                    resetForm();
                }, 3000);
            } else {
                throw new Error('Failed to send to Telegram');
            }
        } catch (error) {
            console.error('Error sending to Telegram:', error);
            showNotification('Помилка відправки. Спробуйте ще раз.', 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    function resetForm() {
        formData.style.display = 'block';
        successDiv.style.display = 'none';
        formData.reset();
        
        // Reset phone input styling
        if (phoneInput) {
            phoneInput.style.borderColor = '';
        }
    }
}

// Footer popup functionality
function initializeFooterPopup() {
    const footer = document.querySelector('.footer');
    const footerPopup = document.getElementById('footer-popup');
    const closeFooterPopup = document.getElementById('close-footer-popup');
    const footerPopupForm = document.getElementById('footer-popup-form');
    const footerPopupSuccess = document.getElementById('footer-popup-success');
    const footerPopupPhone = document.getElementById('footer-popup-phone');

    let popupShown = false;
    let popupClosed = false;
    let closeTimeout = null;

    // Check if footer is in viewport
    function isFooterInViewport() {
        if (!footer) return false;
        const rect = footer.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Show popup when footer is reached
    function checkFooterScroll() {
        if (!popupShown && !popupClosed && isFooterInViewport()) {
            footerPopup.classList.add('active');
            popupShown = true;
            
            // Reset form state completely
            if (footerPopupForm) {
                footerPopupForm.reset();
                footerPopupForm.style.display = 'block';
            }
            if (footerPopupSuccess) {
                footerPopupSuccess.style.display = 'none';
            }
            if (footerPopupPhone) {
                footerPopupPhone.style.borderColor = '';
            }
            
            // Focus on phone input
            setTimeout(() => {
                if (footerPopupPhone) {
                    footerPopupPhone.focus();
                }
            }, 300);
        }
    }

    // Close popup and reset to button
    function closeFooterPopupAndReset() {
        footerPopup.classList.remove('active');
        popupShown = false;
        popupClosed = true;
        
        // Reset form
        if (footerPopupForm) {
            footerPopupForm.reset();
            footerPopupForm.style.display = 'block';
        }
        if (footerPopupSuccess) {
            footerPopupSuccess.style.display = 'none';
        }
        
        // Reset phone input styling
        if (footerPopupPhone) {
            footerPopupPhone.style.borderColor = '';
        }

        // Allow popup to show again after 10 seconds
        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }
        closeTimeout = setTimeout(() => {
            popupClosed = false;
        }, 10000); // 10 seconds
    }

    // Phone number formatting and validation for footer popup
    if (footerPopupPhone) {
        footerPopupPhone.addEventListener('input', (e) => {
            let value = e.target.value;
            
            // Allow only digits, spaces, +, -, (, )
            value = value.replace(/[^\d\s\+\-\(\)]/g, '');
            
            // Format the number
            const formatted = formatPhoneNumber(value);
            e.target.value = formatted;
            
            // Visual feedback
            if (value.length > 0) {
                const isValid = validatePhoneNumber(value);
                e.target.style.borderColor = isValid ? '#28a745' : '#dc3545';
            } else {
                e.target.style.borderColor = '';
            }
        });
    }

    // Close popup
    if (closeFooterPopup) {
        closeFooterPopup.addEventListener('click', closeFooterPopupAndReset);
    }

    // Close on outside click
    if (footerPopup) {
        footerPopup.addEventListener('click', (e) => {
            if (e.target === footerPopup) {
                closeFooterPopupAndReset();
            }
        });
    }

    // Handle form submission
    if (footerPopupForm) {
        footerPopupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const phone = document.getElementById('footer-popup-phone').value;
            const email = document.getElementById('footer-popup-email').value;
            const message = document.getElementById('footer-popup-message').value;

            // Validate phone number
            if (!validatePhoneNumber(phone)) {
                showNotification('Будь ласка, введіть правильний номер телефону', 'error');
                return;
            }

            // Validate email if provided
            if (email && !isValidEmail(email)) {
                showNotification('Будь ласка, введіть правильний email', 'error');
                return;
            }

            // Show loading state
            const submitBtn = footerPopupForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Відправляємо...';
            submitBtn.disabled = true;

            try {
                // Send to Telegram bot
                const telegramData = {
                    phone: phone,
                    email: email || 'Не вказано',
                    message: message || 'Без коментаря',
                    timestamp: new Date().toLocaleString('uk-UA'),
                    source: 'Sushi Club Website - Footer Popup'
                };

                const response = await sendToTelegram(telegramData);
                
                if (response.ok) {
                    footerPopupForm.style.display = 'none';
                    footerPopupSuccess.style.display = 'block';
                    
                    // Auto close after 3 seconds
                    setTimeout(() => {
                        closeFooterPopupAndReset();
                    }, 3000);
                } else {
                    throw new Error('Failed to send to Telegram');
                }
            } catch (error) {
                console.error('Error sending to Telegram:', error);
                showNotification('Помилка відправки. Спробуйте ще раз.', 'error');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkFooterScroll);
    
    // Initial check
    checkFooterScroll();
}

// Initialize website functionality when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeLanguageSwitcher();
        initializeCallbackWidget();
        initializeFooterPopup();
        initializeReadMore();
    });
} else {
    initializeLanguageSwitcher();
    initializeCallbackWidget();
    initializeFooterPopup();
    initializeReadMore();
}

// Read More functionality for mobile menu items
function initializeReadMore() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const description = item.querySelector('.menu-item-description');
        if (!description) return;
        
        // Check if description is long enough to need truncation
        const descriptionHeight = description.scrollHeight;
        const maxHeight = 80; // Same as CSS max-height
        
        // Перевірка: якщо кнопка вже є, не додавати ще одну
        if (descriptionHeight > maxHeight && !description.parentNode.querySelector('.read-more-btn')) {
            // Create read more button
            const readMoreBtn = document.createElement('button');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.textContent = getReadMoreText();
            readMoreBtn.style.display = 'block';
            
            // Insert button after description
            description.parentNode.insertBefore(readMoreBtn, description.nextSibling);
            
            // Add click handler
            readMoreBtn.addEventListener('click', function() {
                const isExpanded = description.classList.contains('expanded');
                if (isExpanded) {
                    description.classList.remove('expanded');
                    item.classList.remove('expanded');
                    readMoreBtn.textContent = getReadMoreText();
                } else {
                    description.classList.add('expanded');
                    item.classList.add('expanded');
                    readMoreBtn.textContent = getReadLessText();
                }
            });
        }
    });
}

function getReadMoreText() {
    const lang = document.documentElement.lang || 'pl';
    const texts = {
        'pl': 'Więcej',
        'en': 'More',
        'uk': 'Більше',
        'ru': 'Больше'
    };
    return texts[lang] || texts['pl'];
}

function getReadLessText() {
    const lang = document.documentElement.lang || 'pl';
    const texts = {
        'pl': 'Mniej',
        'en': 'Less',
        'uk': 'Менше',
        'ru': 'Меньше'
    };
    return texts[lang] || texts['pl'];
}

// --- HEADER SCROLL EFFECTS ---
let lastScrollY = window.scrollY;
let ticking = false;
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

function onScroll() {
    if (!header) return;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Скрол вниз — ховати хедер
        header.classList.add('header--hidden');
        header.classList.remove('header--small');
    } else if (currentScrollY < lastScrollY && currentScrollY > 0) {
        // Скрол вгору — зменшити хедер
        header.classList.remove('header--hidden');
        header.classList.add('header--small');
    } else if (currentScrollY === 0) {
        // На самому верху — стандартний хедер
        header.classList.remove('header--hidden');
        header.classList.remove('header--small');
    }
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
});

if (logo) {
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// --- END HEADER SCROLL EFFECTS ---