console.log('=== START OF JS ===');

// Google Analytics ID
const GA_ID = 'G-QH2QWS0XPY';

// --- Google Consent Mode Advanced ---
let gaLoaded = false;

function loadGoogleAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    
    // Додаємо gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    
    // Ініціалізуємо GA після завантаження
    script.onload = function() {
        gtag('js', new Date());
        gtag('config', GA_ID);
        console.log('✅ Google Analytics завантажено');
    };
}

function updateConsent(analytics = false, ads = false) {
    // Оновлюємо згоду в Google
    gtag('consent', 'update', {
        'analytics_storage': analytics ? 'granted' : 'denied',
        'ad_storage': ads ? 'granted' : 'denied'
    });
    
    // Зберігаємо в localStorage
    const consent = {
        analytics: analytics,
        ads: ads,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    
    // Завантажуємо GA якщо дозволено
    if (analytics) {
        loadGoogleAnalytics();
    }
    
    console.log('✅ Згода оновлена:', consent);
}

function getConsent() {
    try {
        return JSON.parse(localStorage.getItem('cookieConsent'));
    } catch (e) {
        return null;
    }
}

// --- Language Switcher Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('selectedLanguage') || 'pl';
    
    // Встановлюємо активну мову при завантаженні
    const activeButton = document.querySelector(`[data-lang="${currentLang}"]`);
    if (activeButton) {
        langButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-pressed', 'true');
    }
    
    // Обробник кліків по кнопках мов
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = button.getAttribute('data-lang');
            
            // Оновлюємо активну кнопку
            langButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            
            // Зберігаємо вибір в localStorage
            localStorage.setItem('selectedLanguage', language);
            
            // Оновлюємо контент на сторінці
            updatePageContent(language);
        });
    });
    
    // Функція оновлення контенту
    function updatePageContent(language) {
        const translations = {
            pl: {
                'hero-title': 'MENU SUSHI',
                'hero-subtitle': 'Autentyczne japońskie smaki dostarczone do Twojego stołu',
                'cta-button': 'Zadzwoń',
                'instagram': 'Instagram',
                'menu-title': 'SUSHI',
                'read-more': 'Rozwiń opis',
                'read-less': 'Zwiń opis',
                'callback-title': 'Zostaw numer — oddzwonimy!',
                'callback-phone': 'Twój telefon',
                'callback-email': 'Twój email (opcjonalnie)',
                'callback-message': 'Komentarz (opcjonalnie)',
                'callback-submit': 'Wyślij',
                'callback-success': '✓ Dziękujemy! Oddzwonimy wkrótce.',
                'footer-callback-title': 'Zamów telefon',
                'footer-hours': 'Godziny otwarcia: Pon-Ndz 11:00-22:00',
                'callback-btn': 'Zamów rozmowę',
            },
            en: {
                'hero-title': 'SUSHI MENU',
                'hero-subtitle': 'Authentic Japanese flavors delivered to your table',
                'cta-button': 'Call',
                'instagram': 'Instagram',
                'menu-title': 'SUSHI',
                'read-more': 'Show more',
                'read-less': 'Show less',
                'callback-title': 'Leave your number — we\'ll call back!',
                'callback-phone': 'Your phone',
                'callback-email': 'Your email (optional)',
                'callback-message': 'Comment (optional)',
                'callback-submit': 'Send',
                'callback-success': '✓ Thank you! We\'ll call back soon.',
                'footer-callback-title': 'Order call',
                'footer-hours': 'Opening hours: Mon-Sun 11:00-22:00',
                'callback-btn': 'Request a call',
            }
        };
        
        const currentTranslations = translations[language];
        if (!currentTranslations) return;
        
        // Оновлюємо data-key елементи
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-key="${key}"]`);
            elements.forEach(element => {
                if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = currentTranslations[key];
                } else if (element.tagName === 'TEXTAREA' && element.placeholder) {
                    element.placeholder = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            });
        });
        
        // Оновлюємо data-i18n елементи
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
            elements.forEach(element => {
                if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = currentTranslations[key];
                } else if (element.tagName === 'DIV' && element.classList.contains('menu-item-description')) {
                    element.innerHTML = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            });
        });
        
        // Оновлюємо кнопки "Розгорнути опис"
        const readMoreBtns = document.querySelectorAll('.read-more-btn');
        readMoreBtns.forEach(btn => {
            const description = btn.previousElementSibling;
            if (description && description.classList.contains('menu-item-description')) {
                if (description.classList.contains('expanded')) {
                    btn.textContent = currentTranslations['read-less'];
                } else {
                    btn.textContent = currentTranslations['read-more'];
                }
            }
        });
    }
    
    // Ініціалізуємо контент з поточною мовою
    updatePageContent(currentLang);
});

// --- Header Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    
    // Зменшення хедера при скролі
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header--small');
        } else {
            header.classList.remove('header--small');
        }
    });
    
    // Повернення на верх при кліку на логотип
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// --- Telegram Integration ---
const TELEGRAM_BOT_TOKEN = '8007889504:AAESFASDeT0njLEczDDpO__vENkVJd5d340';
const TELEGRAM_CHAT_ID = '7364136001';

async function sendToTelegram({ phone, email, message, timestamp, source }) {
    console.log('📤 sendToTelegram викликано з даними:', { phone, email, message, timestamp, source });
    
    const text = `📞 Новий запит на дзвінок\n-------------------------\nТелефон: ${phone}\nEmail: ${email || 'Не вказано'}\nКоментар: ${message || 'Без коментаря'}\nЧас: ${timestamp || new Date().toLocaleString('uk-UA')}\nДжерело: ${source || 'Sushi Club Website'}`.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    console.log('🌐 URL для запиту:', url);

    try {
        console.log('📡 Відправляємо fetch запит...');
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });

        console.log('📥 Отримано відповідь, статус:', response.status);
        const data = await response.json();
        console.log('📋 Відповідь Telegram:', data);

        if (!data.ok) {
            throw new Error(data.description || 'Помилка Telegram API');
        }

        return true;
    } catch (error) {
        console.error('Помилка відправки в Telegram:', error);
        return false;
    }
}

// --- Callback Widget Logic ---
document.addEventListener('DOMContentLoaded', function() {
    // Кнопки "Відкрити весь опис"
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const description = this.previousElementSibling;
            if (description && description.classList.contains('menu-item-description')) {
                description.classList.toggle('expanded');
                const currentLang = localStorage.getItem('selectedLanguage') || 'pl';
                const translations = {
                    pl: { expanded: 'Zwiń opis', collapsed: 'Rozwiń opis' },
                    en: { expanded: 'Show less', collapsed: 'Show more' }
                };
                this.textContent = description.classList.contains('expanded') ? 
                    translations[currentLang].expanded : translations[currentLang].collapsed;
            }
        });
    });

    // Footer Callback Popup Logic
    const footerPopup = document.getElementById('footer-popup');
    const closeFooterPopup = document.getElementById('close-footer-popup');
    const footerPopupForm = document.getElementById('footer-popup-form');
    const footerPopupSuccess = document.getElementById('footer-popup-success');
    let footerPopupShown = false;

    // Показуємо попап при скролі до футера
    window.addEventListener('scroll', function() {
        const footer = document.querySelector('.footer');
        if (footer && !footerPopupShown) {
            const footerTop = footer.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            
            if (scrollPosition >= footerTop) {
                footerPopup.classList.add('active');
                footerPopupShown = true;
            }
        }
    });

    // Закриваємо попап
    if (closeFooterPopup && footerPopup) {
        closeFooterPopup.addEventListener('click', function() {
            footerPopup.classList.remove('active');
        });
        
        // Клік поза попапом закриває його
        document.addEventListener('mousedown', function(e) {
            if (footerPopup.classList.contains('active') && !footerPopup.contains(e.target)) {
                footerPopup.classList.remove('active');
            }
        });
    }

    // Обробка відправки форми футерного попапу
    if (footerPopupForm) {
        footerPopupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const phone = document.getElementById('footer-popup-phone').value;
            const email = document.getElementById('footer-popup-email').value;
            const message = document.getElementById('footer-popup-message').value;
            const result = await sendToTelegram({
                phone: phone,
                email: email,
                message: message,
                timestamp: new Date().toLocaleString('uk-UA'),
                source: 'Footer Popup'
            });
            if (result) {
                footerPopupForm.style.display = 'none';
                footerPopupSuccess.style.display = 'block';
                setTimeout(() => {
                    footerPopup.classList.remove('active');
                    footerPopupForm.style.display = '';
                    footerPopupSuccess.style.display = 'none';
                    footerPopupForm.reset();
                }, 2500);
            } else {
                footerPopupSuccess.style.display = 'block';
                footerPopupSuccess.innerHTML = '<p style="color:red;">❌ Помилка відправки. Спробуйте ще раз.</p>';
                setTimeout(() => {
                    footerPopupSuccess.style.display = 'none';
                    footerPopupSuccess.innerHTML = '<p>✓ Дякуємо! Ми зателефонуємо найближчим часом.</p>';
                }, 2500);
            }
        });
    }
});

// --- Callback Button Functionality ---
(function() {
    const callbackButton = document.getElementById('callback-button');
    const footerPopup = document.getElementById('footer-popup');
    const closeFooterPopup = document.querySelector('.footer-popup .close-btn');
    
    if (callbackButton && footerPopup) {
        callbackButton.addEventListener('click', function() {
            footerPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Функція для відновлення скролу
    function restoreScroll() {
        document.body.style.overflow = '';
    }
    
    // Відновлюємо скрол при закритті попапу
    if (closeFooterPopup && footerPopup) {
        closeFooterPopup.addEventListener('click', function() {
            footerPopup.classList.remove('active');
            restoreScroll();
        });
        
        // Клік поза попапом закриває його
        document.addEventListener('mousedown', function(e) {
            if (footerPopup.classList.contains('active') && !footerPopup.contains(e.target)) {
                footerPopup.classList.remove('active');
                restoreScroll();
            }
        });
    }
    
    // Відновлюємо скрол після успішної відправки форми
    const footerPopupForm = document.getElementById('footer-popup-form');
    const footerPopupSuccess = document.getElementById('footer-popup-success');
    
    if (footerPopupForm && footerPopupSuccess) {
        footerPopupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const phone = document.getElementById('footer-popup-phone').value;
            const email = document.getElementById('footer-popup-email').value;
            const message = document.getElementById('footer-popup-message').value;
            const result = await sendToTelegram({
                phone: phone,
                email: email,
                message: message,
                timestamp: new Date().toLocaleString('uk-UA'),
                source: 'Footer Popup'
            });
            if (result) {
                footerPopupForm.style.display = 'none';
                footerPopupSuccess.style.display = 'block';
                setTimeout(() => {
                    footerPopup.classList.remove('active');
                    footerPopupForm.style.display = '';
                    footerPopupSuccess.style.display = 'none';
                    footerPopupForm.reset();
                    restoreScroll();
                }, 2500);
            } else {
                footerPopupSuccess.style.display = 'block';
                footerPopupSuccess.innerHTML = '<p style="color:red;">❌ Помилка відправки. Спробуйте ще раз.</p>';
                setTimeout(() => {
                    footerPopupSuccess.style.display = 'none';
                    footerPopupSuccess.innerHTML = '<p>✓ Дякуємо! Ми зателефонуємо найближчим часом.</p>';
                }, 2500);
            }
        });
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    const footerSettingsBtn = document.getElementById('cookie-settings-btn');
    if (footerSettingsBtn) {
        footerSettingsBtn.addEventListener('click', function() {
            const cookieModal = document.getElementById('cookie-settings-modal');
            if (cookieModal) cookieModal.classList.add('show');
        });
    }
});

console.log('=== END OF JS ===');