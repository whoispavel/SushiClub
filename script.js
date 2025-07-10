console.log('=== START OF JS ===');

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
                // --- Меню ---
                'menu-item-1-title': 'Zestaw 1',
                'menu-item-1-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-1-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-1-price': '67,00 PLN',
                'menu-item-2-title': 'Zestaw 2',
                'menu-item-2-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-2-desc': '·Futomak łosoś surowy (6 szt.) — nori, ryż, serek Philadelphia, łosoś, avocado, ogórek<br>·Hosomaki łosoś surowy (8 szt.) — nori, ryż, łosoś, serek Philadelphia<br>·1 rolka GRATIS (6 szt.)',
                'menu-item-2-price': '67,00 PLN',
                'menu-item-3-title': 'Zestaw 3',
                'menu-item-3-subtitle': '(26 szt. + 6 szt. GRATIS)',
                'menu-item-3-desc': '·California tuńczyk w mango — nori, ryż, serek Philadelphia, tuńczyk, sriracha, ogórek, mango<br>·Futomak łosoś pieczony — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki ogórek — nori, ryż, serek Philadelphia, ogórek',
                'menu-item-3-price': '137,00 PLN',
                // ... ДОДАЙТЕ ВСІ menu-item-X-title, subtitle, desc, price ...
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
                // --- Menu ---
                'menu-item-1-title': 'Set 1',
                'menu-item-1-subtitle': '(14 pcs. + 6 pcs. FREE)',
                'menu-item-1-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-1-price': '67.00 PLN',
                'menu-item-2-title': 'Set 2',
                'menu-item-2-subtitle': '(14 pcs. + 6 pcs. FREE)',
                'menu-item-2-desc': '·Raw salmon futomaki (6 pcs) — nori, rice, Philadelphia cheese, salmon, avocado, cucumber<br>·Raw salmon hosomaki (8 pcs) — nori, rice, salmon, Philadelphia cheese<br>·1 roll FREE (6 pcs)',
                'menu-item-2-price': '67.00 PLN',
                'menu-item-3-title': 'Set 3',
                'menu-item-3-subtitle': '(26 pcs. + 6 pcs. FREE)',
                'menu-item-3-desc': '·California tuna in mango — nori, rice, Philadelphia cheese, tuna, sriracha, cucumber, mango<br>·Baked salmon futomaki — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Cucumber hosomaki — nori, rice, Philadelphia cheese, cucumber',
                'menu-item-3-price': '137.00 PLN',
                // ... ДОДАЙТЕ ВСІ menu-item-X-title, subtitle, desc, price ...
            }
        };
        const currentTranslations = translations[language];
        // --- Оновлення data-key ---
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
        // --- Оновлення data-i18n ---
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

        // Оновлюємо callback форми
        const callbackHeaders = document.querySelectorAll('.callback-header h3, .footer-popup-header h3');
        callbackHeaders.forEach(header => {
            if (header.textContent.includes('Залиште номер') || header.textContent.includes('Замовити дзвінок')) {
                header.textContent = currentTranslations['callback-title'];
            }
        });

        const callbackPhones = document.querySelectorAll('#callback-phone, #footer-phone');
        callbackPhones.forEach(phone => {
            phone.placeholder = currentTranslations['callback-phone'];
        });

        const callbackEmails = document.querySelectorAll('#callback-email, #footer-email');
        callbackEmails.forEach(email => {
            email.placeholder = currentTranslations['callback-email'];
        });

        const callbackMessages = document.querySelectorAll('#callback-message, #footer-message');
        callbackMessages.forEach(message => {
            message.placeholder = currentTranslations['callback-message'];
        });

        const callbackSubmitBtns = document.querySelectorAll('#callback-form-data button[type="submit"], #footer-popup-form button[type="submit"]');
        callbackSubmitBtns.forEach(btn => {
            btn.textContent = currentTranslations['callback-submit'];
        });

        const callbackSuccessMsgs = document.querySelectorAll('#callback-success p, #footer-popup-success p');
        callbackSuccessMsgs.forEach(msg => {
            if (msg.textContent.includes('Дякуємо')) {
                msg.textContent = currentTranslations['callback-success'];
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
    
    // Динамічний каустичний ефект при скролі
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateCausticEffect() {
        const scrollY = window.scrollY;
        const scrollDelta = scrollY - lastScrollY;
        const scrollSpeed = Math.abs(scrollDelta);
        
        // Змінюємо інтенсивність каустичного ефекту залежно від швидкості скролу
        if (scrollSpeed > 5) {
            header.style.setProperty('--caustic-intensity', '0.8');
            header.style.setProperty('--caustic-speed', '2s');
        } else if (scrollSpeed > 2) {
            header.style.setProperty('--caustic-intensity', '0.6');
            header.style.setProperty('--caustic-speed', '3s');
        } else {
            header.style.setProperty('--caustic-intensity', '0.4');
            header.style.setProperty('--caustic-speed', '6s');
        }
        
        // Додаємо деформацію залежно від напрямку скролу
        if (scrollDelta > 0) {
            header.style.setProperty('--caustic-distortion', 'skewX(2deg)');
        } else if (scrollDelta < 0) {
            header.style.setProperty('--caustic-distortion', 'skewX(-2deg)');
        } else {
            header.style.setProperty('--caustic-distortion', 'skewX(0deg)');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateCausticEffect);
            ticking = true;
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
    
    // Додаємо каустичний ефект при наведенні на хедер
    header.addEventListener('mouseenter', function() {
        header.style.setProperty('--caustic-intensity', '0.9');
        header.style.setProperty('--caustic-speed', '1s');
    });
    
    header.addEventListener('mouseleave', function() {
        header.style.setProperty('--caustic-intensity', '0.4');
        header.style.setProperty('--caustic-speed', '6s');
    });
});

// Глобальний обробник JS-помилок
window.addEventListener('error', function(e) {
  console.error('GLOBAL JS ERROR:', e.message, e);
});
window.addEventListener('unhandledrejection', function(e) {
  console.error('GLOBAL PROMISE ERROR:', e.reason, e);
});

// --- Тестова логіка Telegram ---
const TELEGRAM_BOT_TOKEN = '8007889504:AAESFASDeT0njLEczDDpO__vENkVJd5d340';
const TELEGRAM_CHAT_ID = '7364136001';

async function sendToTelegram({ phone, email, message, timestamp, source }) {
    console.log('📤 sendToTelegram викликано з даними:', { phone, email, message, timestamp, source });
    
    const text = `\n📞 Новий запит на дзвінок\n-------------------------\nТелефон: ${phone}\nEmail: ${email || 'Не вказано'}\nКоментар: ${message || 'Без коментаря'}\nЧас: ${timestamp || new Date().toLocaleString('uk-UA')}\nДжерело: ${source || 'Sushi Club Website'}`.trim();

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

// --- Додаю тестовий обробник для форми з id='test-form' ---
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded!');
    const testForm = document.getElementById('test-form');
    if (testForm) {
        console.log('test-form знайдено!');
        testForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log('🎯 Тестова форма відправлена!');
            const result = await sendToTelegram({
                phone: phone,
                email: email,
                message: message,
                timestamp: new Date().toLocaleString('uk-UA'),
                source: 'Тестова форма'
            });
            const resultDiv = document.getElementById('result');
            if (resultDiv) {
                resultDiv.innerHTML = result ? 
                    '<p style="color: green;">✅ Успішно відправлено!</p>' : 
                    '<p style="color: red;">❌ Помилка відправки</p>';
            }
        });
    } else {
        console.log('test-form НЕ знайдено!');
    }
});

console.log('=== END OF JS ===');

// --- Callback Widget Logic ---
document.addEventListener('DOMContentLoaded', function() {
    // Віджет дзвінка
    const callbackBtn = document.getElementById('callback-btn');
    const callbackForm = document.getElementById('callback-form');
    const closeCallback = document.getElementById('close-callback');
    const callbackWidget = document.getElementById('callback-widget');
    const callbackFormData = document.getElementById('callback-form-data');
    const callbackSuccess = document.getElementById('callback-success');

    if (callbackBtn && callbackForm && closeCallback) {
        callbackBtn.addEventListener('click', function() {
            callbackForm.classList.add('active');
        });
        closeCallback.addEventListener('click', function() {
            callbackForm.classList.remove('active');
        });
        // Клік поза формою закриває її
        document.addEventListener('mousedown', function(e) {
            if (callbackForm.classList.contains('active') && !callbackForm.contains(e.target) && !callbackBtn.contains(e.target)) {
                callbackForm.classList.remove('active');
            }
        });
    }

    // Обробка відправки форми зворотного дзвінка
    if (callbackFormData) {
        callbackFormData.addEventListener('submit', async function(e) {
            e.preventDefault();
            const phone = document.getElementById('callback-phone').value;
            const email = document.getElementById('callback-email').value;
            const message = document.getElementById('callback-message').value;
            const result = await sendToTelegram({
                phone: phone,
                email: email,
                message: message,
                timestamp: new Date().toLocaleString('uk-UA'),
                source: 'Callback Widget'
            });
            if (result) {
                callbackFormData.style.display = 'none';
                callbackSuccess.style.display = 'block';
                setTimeout(() => {
                    callbackForm.classList.remove('active');
                    callbackFormData.style.display = '';
                    callbackSuccess.style.display = 'none';
                    callbackFormData.reset();
                }, 2500);
            } else {
                callbackSuccess.style.display = 'block';
                callbackSuccess.innerHTML = '<p style="color:red;">❌ Помилка відправки. Спробуйте ще раз.</p>';
                setTimeout(() => {
                    callbackSuccess.style.display = 'none';
                    callbackSuccess.innerHTML = '<p>✓ Дякуємо! Ми зателефонуємо найближчим часом.</p>';
                }, 2500);
            }
        });
    }

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
            const phone = document.getElementById('footer-phone').value;
            const email = document.getElementById('footer-email').value;
            const message = document.getElementById('footer-message').value;
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