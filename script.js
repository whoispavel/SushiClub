console.log('=== START OF JS ===');

// Google Analytics ID
const GA_ID = 'G-2NKTYCN4NG';

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
async function updatePageContent(language) {
    try {
        const response = await fetch(`/lang/pl.json`);
        if (!response.ok) throw new Error('Не вдалося завантажити словник');
        const dictionary = await response.json();
        // Оновлюємо текстові вузли
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) el.innerHTML = dictionary[key];
        });
        // Оновлюємо alt
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (dictionary[key]) el.setAttribute('alt', dictionary[key]);
        });
        // Оновлюємо title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (dictionary[key]) el.setAttribute('title', dictionary[key]);
        });
        // Оновлюємо placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dictionary[key]) el.setAttribute('placeholder', dictionary[key]);
        });
        // Оновлюємо aria-label
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (dictionary[key]) el.setAttribute('aria-label', dictionary[key]);
        });
    } catch (e) {
        console.error('Помилка i18n:', e);
    }
}

// --- Language Switcher Logic ---
document.addEventListener('DOMContentLoaded', function() {
    updatePageContent('pl');
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
                    en: { expanded: 'Show less', collapsed: 'Show more' },
                    ua: { expanded: 'Сховати опис', collapsed: 'Розгорнути опис' }
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
    // ДУБЛЬОВАНИЙ ОБРОБНИК submit ВИДАЛЕНО
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

document.addEventListener('DOMContentLoaded', function() {
    const saveSettingsBtn = document.getElementById('save-cookie-settings');
    const cancelSettingsBtn = document.getElementById('cancel-cookie-settings');
    const closeModalBtn = document.getElementById('close-cookie-modal');
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const cookieModal = document.getElementById('cookie-settings-modal');
    const cookieBanner = document.getElementById('cookie-banner');

    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            const analytics = analyticsCheckbox ? analyticsCheckbox.checked : false;
            updateConsent(analytics, false);
            if (cookieModal) cookieModal.classList.remove('show');
            if (cookieBanner) cookieBanner.classList.remove('show');
        });
    }
    if (cancelSettingsBtn) {
        cancelSettingsBtn.addEventListener('click', function() {
            if (cookieModal) cookieModal.classList.remove('show');
        });
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            if (cookieModal) cookieModal.classList.remove('show');
        });
    }
});

// --- Cookie Banner Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const acceptAllBtn = document.getElementById('accept-all-cookies');
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
    const cookieModal = document.getElementById('cookie-settings-modal');

    if (acceptAllBtn && analyticsCheckbox) {
        acceptAllBtn.addEventListener('click', function() {
            analyticsCheckbox.checked = true;
            updateConsent(true, false);
            const banner = document.getElementById('cookie-banner');
            if (banner) banner.classList.remove('show');
        });
    }

    if (cookieSettingsBtn && cookieModal && analyticsCheckbox) {
        cookieSettingsBtn.addEventListener('click', function() {
            const consent = getConsent();
            analyticsCheckbox.checked = !!(consent && consent.analytics);
            cookieModal.classList.add('show');
        });
    }
});

// --- Відправка callback-запиту у Telegram ---
async function sendToTelegram(data) {
    const token = '8007889504:AAESFASDeT0njLEczDDpO__vENkVJd5d340'; // TODO: Вкажіть свій токен
    const chatId = '7364136001';   // TODO: Вкажіть свій chat_id
    const text =
        `📞 Callback запит\n` +
        `Телефон: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Повідомлення: ${data.message}\n` +
        `Час: ${data.timestamp}\n` +
        `Джерело: ${data.source}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        });
        return response.ok;
    } catch (e) {
        return false;
    }
}

// --- Відправка callback у Telegram (робочий код з коміту 7120c31) ---
document.addEventListener('DOMContentLoaded', function () {
  const callbackForm = document.querySelector('#callback-form');
  const popupForm = document.querySelector('#footer-popup-form');

  function sendTelegram(form) {
    const phone = form.querySelector('input[name="phone"]')?.value.trim() || '';
    const email = form.querySelector('input[name="email"]')?.value.trim() || '';
    const message = form.querySelector('textarea[name="message"]')?.value.trim() || '';

    if (!phone) {
      alert('Введіть номер телефону');
      return;
    }

    const text = `📞 Нове повідомлення з сайту Sushi Club:\n\nТелефон: ${phone}\nEmail: ${email || 'Не вказано'}\nКоментар: ${message || 'Без коментаря'}`;

    fetch("https://api.telegram.org/bot8007889504:AAESFASDeT0njLEczDDpO__vENkVJd5d340/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "7364136001",
        text: text,
        parse_mode: "HTML"
      })
    }).then((res) => {
      return res.json();
    }).then((data) => {
      if (data.ok) {
        form.reset();
        alert('Дякуємо! Повідомлення надіслано.');
      } else {
        alert('Помилка. Спробуйте ще раз.');
      }
    });
  }

  if (callbackForm) {
    callbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      sendTelegram(callbackForm);
    });
  }

  if (popupForm) {
    popupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      sendTelegram(popupForm);
    });
  }
});

// --- Автоматичне приховування іконок NEW через місяць ---
document.addEventListener('DOMContentLoaded', function() {
    const newBadges = document.querySelectorAll('.new-badge');
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
    
    // Перевіряємо, чи минув місяць з моменту додавання іконок
    // Якщо так - приховуємо їх
    if (currentDate > oneMonthAgo) {
        newBadges.forEach(badge => {
            badge.style.display = 'none';
        });
    }
});

console.log('=== END OF JS ===');