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
        'menu-item-18-desc': 'chopsticks. 2 zł<br>chopstick helper. 2 zł<br>ginger. 2 zł<br>wasabi 2 zł'
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
        'menu-item-1-title': 'Zestaw 1',
        'menu-item-1-desc': 'Futomak  pieczony łosoś (6 sztuk) <br>Hosomaki pieczony łosoś (8 sztuk)',
        'menu-item-1-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-1-price': 'Cena: 67 zł',
        'menu-item-2-title': 'Zestaw 2',
        'menu-item-2-desc': 'Futomak łosoś surowy (6 sztuk) <br>Hosomaki łosoś surowy (8 sztuk) <br>1 rolka gratis (6 sztuk)',
        'menu-item-2-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-2-price': 'Cena: 67 zł',
        'menu-item-3-title': 'Zestaw 3',
        'menu-item-3-desc': 'California tuńczyk surowy okładany w mango (8 sztuk) <br>Futomak łosoś pieczony (6 sztuk) <br>Hosomaki ogórek (8 sztuk)',
        'menu-item-3-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-3-price': 'Cena: 137 zł',
        'menu-item-4-title': 'Zestaw 4',
        'menu-item-4-desc': 'Philadelphia mango z łososiem opalony z sosem unagi (8 sztuk)<br>California krewetka okładaną tatarem (10 sztuk)<br>Futomak tilapia tempura (6 sztuk)<br>Hosomaki ogórek (8 sztuk)<br>Hosomaki batat (8 sztuk)',
        'menu-item-4-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-4-price': 'Cena: 197 zł',
        'menu-item-5-title': 'Zestaw 5',
        'menu-item-5-desc': 'California węgorz w zielone masago (8 sztuk)<br>Futomaki sałatka surimi w tempurze (6 sztuk)<br> Futomaki krewetka gotowana (6 sztuk) <br>Hosomaki mango (8 sztuk)<br>Hosomaki awokado (8 sztuk)  <br>Hosomaki łosoś (8 sztuk)',
        'menu-item-5-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-5-price': 'Cena: 223 zł',
        'menu-item-6-title': 'Zestaw 6',
        'menu-item-6-desc': 'Vulkan łosoś pieczony (2 sztuki)<br>nori, ryż, serek Philadelphia, awokado, czapeczki serowe, z sosem słodkim <br><br>Vulkan tatar z łososia (2 sztuki)<br>nori, ryż, łosoś, por, olej sezamowy <br><br>Vulkan krabowy (2 sztuki)<br>nori, ryż, serek philadelphia, krewetka gotowana, masago<br><br>Nigiri łosoś (2 sztuki) <br>Nigiri tuńczyk (2 sztuki)<br>Nigiri węgorz (2 sztuki)',
        'menu-item-6-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-6-price': 'Cena: 127 zł',
        'menu-item-7-title': 'Futo set',
        'menu-item-7-desc': 'Futomaki tatar z łososia (12 sztuk)<br>﻿﻿﻿Futomaki łosoś (12 sztuk)<br>Futomaki sałatka surimi w tempurze (12 sztuk)<br>﻿﻿﻿Futomaki krewetka (12 sztuk)<br>﻿﻿﻿Futomaki tunczyk (12 sztuk)<br>﻿﻿﻿Futomaki wegetarianski (tofu, kampio, ogórek) (12 sztuk)',
        'menu-item-7-price': 'Cena: 395 zł',
        'menu-item-8-title': 'California set',
        'menu-item-8-desc': 'Philadelphia okładana tatarem opalonym<br>California pieczony łosoś okładany mango<br>Philadelphia łosoś<br>California tuńczyk w masago zielony<br>California batat okładana gruszka<br>California cukinia okładana boczkiem opalonym<br>Philadelphia węgorzem<br>California tunczyk w masago zielony<br>California batat oktadana gruszka<br>California cukinia oktadana boczkiem opalonym',
        'menu-item-8-subtitle': 'Każda California – 10 sztuk.',
        'menu-item-8-price': 'Cena: 377 zł',
        'menu-item-9-title': 'PHILADELPHIA',
        'menu-item-9-desc': 'Philadelphia tuńczyk<br>serek Philadelphia, masago, mango, łosoś - 57 zł<br><br>Philadelphia krewetka<br>serek Philadelphia, masago, mango, łosoś - 57 zł<br><br>Philadelphia węgorz<br>serek Philadelphia, masago, mango, łosoś - 59 zł<br><br>Philadelphia łosoś<br>serek Philadelphia, masago, mango, łosoś - 57 zł',
        'menu-item-9-subtitle': 'Różne rodzaje Philadelphia',
        'menu-item-10-title': 'Wegetariański set',
        'menu-item-10-desc': 'Futomaki tofu (6 sztuk)<br>Kalifornia cukinia w ogórkach (10 sztuk)<br>Philadelphia z ogórkiem okładana goma (10 sztuk) <br>Hosomaki kampyo (8 sztuk)<br>Hosomaki mango (8 sztuk)<br>Nigiri z awokado (2 sztuki)',
        'menu-item-10-price': 'Cena: 167 zł',
        'menu-item-11-title': 'Hosomaki set',
        'menu-item-11-desc': 'Hosomaki ogórek<br> Hosomaki kanpyo<br> Hosomaki mango<br> Hosomaki awokado<br> Hosomaki batat<br> Hosomaki łosoś<br> Hosomaki tuńczyk<br> Hosomaki łosoś pieczony<br> Hosomaki krewetka<br> Hosomaki węgorzem',
        'menu-item-11-price': 'Cena: 167 zł',
        'menu-item-12-title': 'ROLKI POJEDYNCZE',
        'menu-item-12-desc': 'California Rainbow (łosoś tuńczyk, krewetka) (10 sztuk) - 57 zł<br><br>California kurczak panko okładana boczkiem - 57 zł<br><br>Philadelphia tatar z losośia - 57 zł<br><br>California pieczony łosoś okładaną mango - 57 zł<br><br>Philadelphia  krewetka - 57 zł<br><br>Philadelphia losoś - 57 zł',
        'menu-item-12-subtitle': 'Różne rolki po 10 sztuk',
        'menu-item-13-title': 'Sushi burger łosoś',
        'menu-item-13-desc': '(nori, ryż, łosoś, serek philadelphia, masago, sos sriracha, panko,<br>maka tempura, awokado, ogórek).',
        'menu-item-13-price': 'Cena: 69 zł',
        'menu-item-14-title': 'Sushi burger krewetka',
        'menu-item-14-desc': '(nori, ryż, krewetka + mango, sos słodkie chilli, ser cheddar,<br>ogórek, panko, maka tempura).',
        'menu-item-14-price': 'Cena: 69 zł',
        'menu-item-15-title': 'Sushi burger wegetariański',
        'menu-item-15-desc': '(nori, ryż, batat, kampyo, ogórek, serek philadelphia,<br>mango, panko, maka tempura).',
        'menu-item-15-price': 'Cena: 59 zł',
        'menu-item-16-title': 'PRZYSTAWKI',
        'menu-item-16-desc': 'Tatar z łososia 150 gram (łosoś, por, olej sezamowy) - 35 zł <br><br>Sałatka goma (150 gram) - 17 zł <br><br>Pierożki gyoza z mięsem + sos sweet chilli (6 sztuk + 1 sztuka) - 25 zł <br><br>Pierożki gyoza wegetariańskie + sos sweet chilli (6 sztuk + 1 sztuka) - 23 zł<br><br>Kimchi (kapusta pekińska, por, marchew, biała rzodkiew, imbir, czosnek, chilli (150 gram) - 17 zł <br><br>Kalmary (6 sztuk + sos sweet chilli) - 29 zł <br><br>Krewetka (6 sztuk + sos ma słodki) - 29 zł',
        'menu-item-16-subtitle': 'Różne przystawki',
        'menu-item-17-title': 'NAPOJE',
        'menu-item-17-desc': 'Still water - 4 zł<br>Sprite lime - 7 zł<br>Coca Cola Zero Sugar - 7 zł<br>Coca Cola Original - 7 zł<br><br>Herbata - 12 zł<br>Kawa - 17 zł',
        'menu-item-18-title': 'DODATKI',
        'menu-item-18-desc': 'pałeczki. 2 zł<br>pomocnik do pałeczek. 2 zł<br>imbir. 2 zł<br>wasabi 2 zł'
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
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (languageData[language] && languageData[language][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = languageData[language][key];
            } else if (element.tagName === 'INPUT' && element.type === 'email') {
                element.placeholder = languageData[language][key];
            } else {
                element.innerHTML = languageData[language][key];
            }
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

// Callback Widget Functionality
function initializeCallbackWidget() {
    const callbackBtn = document.getElementById('callback-btn');
    const callbackForm = document.getElementById('callback-form');
    const closeBtn = document.getElementById('close-callback');
    const formData = document.getElementById('callback-form-data');
    const successDiv = document.getElementById('callback-success');

    if (!callbackBtn || !callbackForm) return;

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
    formData.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const phone = document.getElementById('callback-phone').value;
        const email = document.getElementById('callback-email').value;
        const message = document.getElementById('callback-message').value;

        // Simulate form submission (в реальному проекті тут буде відправка на сервер)
        setTimeout(() => {
            formData.style.display = 'none';
            successDiv.style.display = 'block';
            
            // Auto close after 3 seconds
            setTimeout(() => {
                callbackForm.classList.remove('active');
                resetForm();
            }, 3000);
        }, 500);
    });

    function resetForm() {
        formData.style.display = 'block';
        successDiv.style.display = 'none';
        formData.reset();
    }
}

// Initialize website functionality when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeLanguageSwitcher();
        initializeCallbackWidget();
    });
} else {
    initializeLanguageSwitcher();
    initializeCallbackWidget();
}