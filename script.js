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
                'seo-title': 'Sushi Wrocław - Najlepsze Sushi w Mieście',
                'seo-desc1': 'Sushi Club Wrocław oferuje autentyczne japońskie sushi z dostawą do domu. Nasze menu zawiera szeroki wybór rolek: Philadelphia, California, Hosomaki, Futomaki. Wszystkie dania przygotowywane są ze świeżych składników przez doświadczonych kucharzy. Szybka dostawa sushi w całym Wrocławiu.',
                'seo-desc2': 'Zamów sushi online lub zadzwoń +48 501 496 055. Dostawa sushi Wrocław - codziennie od 11:00 do 22:00.',
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
                'menu-item-1-title': 'Zestaw 1',
                'menu-item-1-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-1-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-1-price': '67,00 PLN',
                'menu-item-2-title': 'Zestaw 2',
                'menu-item-2-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-2-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-2-price': '67,00 PLN',
                'menu-item-3-title': 'Zestaw 3',
                'menu-item-3-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-3-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-3-price': '67,00 PLN',
                'menu-item-4-title': 'Zestaw 4',
                'menu-item-4-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-4-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-4-price': '67,00 PLN',
                'menu-item-5-title': 'Zestaw 5',
                'menu-item-5-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-5-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-5-price': '67,00 PLN',
                'menu-item-6-title': 'Zestaw 6',
                'menu-item-6-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-6-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-6-price': '67,00 PLN',
                'menu-item-7-title': 'Zestaw 7',
                'menu-item-7-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-7-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-7-price': '67,00 PLN',
                'menu-item-8-title': 'Zestaw 8',
                'menu-item-8-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-8-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-8-price': '67,00 PLN',
                'menu-item-9-title': 'Zestaw 9',
                'menu-item-9-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-9-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-9-price': '67,00 PLN',
                'menu-item-10-title': 'Zestaw 10',
                'menu-item-10-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-10-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-10-price': '67,00 PLN',
                'menu-item-11-title': 'Zestaw 11',
                'menu-item-11-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-11-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-11-price': '67,00 PLN',
                'menu-item-12-title': 'Zestaw 12',
                'menu-item-12-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-12-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-12-price': '67,00 PLN',
                'menu-item-13-title': 'Zestaw 13',
                'menu-item-13-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-13-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-13-price': '67,00 PLN',
                'menu-item-14-title': 'Zestaw 14',
                'menu-item-14-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-14-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-14-price': '67,00 PLN',
                'menu-item-15-title': 'Zestaw 15',
                'menu-item-15-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-15-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-15-price': '67,00 PLN',
                'menu-item-16-title': 'Zestaw 16',
                'menu-item-16-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-16-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-16-price': '67,00 PLN',
                'menu-item-17-title': 'Zestaw 17',
                'menu-item-17-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-17-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-17-price': '67,00 PLN',
                'menu-item-18-title': 'Zestaw 18',
                'menu-item-18-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-18-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-18-price': '67,00 PLN',
                'menu-item-19-title': 'Zestaw 19',
                'menu-item-19-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-19-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-19-price': '67,00 PLN',
                'menu-item-20-title': 'Zestaw 20',
                'menu-item-20-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-20-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-20-price': '67,00 PLN',
                'menu-item-21-title': 'Zestaw 21',
                'menu-item-21-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-21-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-21-price': '67,00 PLN',
                'menu-item-22-title': 'Zestaw 22',
                'menu-item-22-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-22-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-22-price': '67,00 PLN',
                'menu-item-23-title': 'Zestaw 23',
                'menu-item-23-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-23-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-23-price': '67,00 PLN',
                'menu-item-24-title': 'Zestaw 24',
                'menu-item-24-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-24-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-24-price': '67,00 PLN',
                'menu-item-25-title': 'Zestaw 25',
                'menu-item-25-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-25-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-25-price': '67,00 PLN',
                'menu-item-26-title': 'Zestaw 26',
                'menu-item-26-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-26-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-26-price': '67,00 PLN',
                'menu-item-27-title': 'Zestaw 27',
                'menu-item-27-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-27-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-27-price': '67,00 PLN',
                'menu-item-28-title': 'Zestaw 28',
                'menu-item-28-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-28-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-28-price': '67,00 PLN',
                'menu-item-29-title': 'Zestaw 29',
                'menu-item-29-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-29-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-29-price': '67,00 PLN',
                'menu-item-30-title': 'Zestaw 30',
                'menu-item-30-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-30-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-30-price': '67,00 PLN',
                'menu-item-31-title': 'Zestaw 31',
                'menu-item-31-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-31-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-31-price': '67,00 PLN',
                'menu-item-32-title': 'Zestaw 32',
                'menu-item-32-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-32-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-32-price': '67,00 PLN',
                'menu-item-33-title': 'Zestaw 33',
                'menu-item-33-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-33-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-33-price': '67,00 PLN',
                'menu-item-34-title': 'Zestaw 34',
                'menu-item-34-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-34-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-34-price': '67,00 PLN',
                'menu-item-35-title': 'Zestaw 35',
                'menu-item-35-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-35-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-35-price': '67,00 PLN',
                'menu-item-36-title': 'Zestaw 36',
                'menu-item-36-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-36-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-36-price': '67,00 PLN',
                'menu-item-37-title': 'Zestaw 37',
                'menu-item-37-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-37-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-37-price': '67,00 PLN',
                'menu-item-38-title': 'Zestaw 38',
                'menu-item-38-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-38-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-38-price': '67,00 PLN',
                'menu-item-39-title': 'Zestaw 39',
                'menu-item-39-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-39-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-39-price': '67,00 PLN',
                'menu-item-40-title': 'Zestaw 40',
                'menu-item-40-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-40-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-40-price': '67,00 PLN',
                'menu-item-41-title': 'Zestaw 41',
                'menu-item-41-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-41-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-41-price': '67,00 PLN',
                'menu-item-42-title': 'Zestaw 42',
                'menu-item-42-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-42-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-42-price': '67,00 PLN',
                'menu-item-43-title': 'Zestaw 43',
                'menu-item-43-subtitle': '(14 szt. + 6 szt. GRATIS)',
                'menu-item-43-desc': '·Futomak pieczony łosoś (6 sztuk) — nori, ryż, łosoś pieczony, serek Philadelphia, ogórek, kanpyo<br>·Hosomaki pieczony łosoś (8 sztuk) — nori, ryż, pieczony łosoś, serek Philadelphia',
                'menu-item-43-price': '67,00 PLN',
            },
            en: {
                'seo-title': 'Sushi Wrocław - The Best Sushi in Town',
                'seo-desc1': 'Sushi Club Wrocław offers authentic Japanese sushi with home delivery. Our menu includes a wide selection of rolls: Philadelphia, California, Hosomaki, Futomaki. All dishes are prepared with fresh ingredients by experienced chefs. Fast sushi delivery throughout Wrocław.',
                'seo-desc2': 'Order sushi online or call +48 501 496 055. Sushi delivery in Wrocław - every day from 11:00 to 22:00.',
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
                'menu-item-1-title': 'Set 1',
                'menu-item-1-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-1-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-1-price': '67.00 PLN',
                'menu-item-2-title': 'Set 2',
                'menu-item-2-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-2-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-2-price': '67.00 PLN',
                'menu-item-3-title': 'Set 3',
                'menu-item-3-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-3-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-3-price': '67.00 PLN',
                'menu-item-4-title': 'Set 4',
                'menu-item-4-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-4-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-4-price': '67.00 PLN',
                'menu-item-5-title': 'Set 5',
                'menu-item-5-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-5-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-5-price': '67.00 PLN',
                'menu-item-6-title': 'Set 6',
                'menu-item-6-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-6-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-6-price': '67.00 PLN',
                'menu-item-7-title': 'Set 7',
                'menu-item-7-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-7-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-7-price': '67.00 PLN',
                'menu-item-8-title': 'Set 8',
                'menu-item-8-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-8-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-8-price': '67.00 PLN',
                'menu-item-9-title': 'Set 9',
                'menu-item-9-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-9-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-9-price': '67.00 PLN',
                'menu-item-10-title': 'Set 10',
                'menu-item-10-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-10-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-10-price': '67.00 PLN',
                'menu-item-11-title': 'Set 11',
                'menu-item-11-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-11-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-11-price': '67.00 PLN',
                'menu-item-12-title': 'Set 12',
                'menu-item-12-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-12-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-12-price': '67.00 PLN',
                'menu-item-13-title': 'Set 13',
                'menu-item-13-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-13-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-13-price': '67.00 PLN',
                'menu-item-14-title': 'Set 14',
                'menu-item-14-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-14-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-14-price': '67.00 PLN',
                'menu-item-15-title': 'Set 15',
                'menu-item-15-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-15-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-15-price': '67.00 PLN',
                'menu-item-16-title': 'Set 16',
                'menu-item-16-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-16-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-16-price': '67.00 PLN',
                'menu-item-17-title': 'Set 17',
                'menu-item-17-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-17-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-17-price': '67.00 PLN',
                'menu-item-18-title': 'Set 18',
                'menu-item-18-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-18-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-18-price': '67.00 PLN',
                'menu-item-19-title': 'Set 19',
                'menu-item-19-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-19-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-19-price': '67.00 PLN',
                'menu-item-20-title': 'Set 20',
                'menu-item-20-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-20-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-20-price': '67.00 PLN',
                'menu-item-21-title': 'Set 21',
                'menu-item-21-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-21-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-21-price': '67.00 PLN',
                'menu-item-22-title': 'Set 22',
                'menu-item-22-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-22-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-22-price': '67.00 PLN',
                'menu-item-23-title': 'Set 23',
                'menu-item-23-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-23-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-23-price': '67.00 PLN',
                'menu-item-24-title': 'Set 24',
                'menu-item-24-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-24-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-24-price': '67.00 PLN',
                'menu-item-25-title': 'Set 25',
                'menu-item-25-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-25-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-25-price': '67.00 PLN',
                'menu-item-26-title': 'Set 26',
                'menu-item-26-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-26-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-26-price': '67.00 PLN',
                'menu-item-27-title': 'Set 27',
                'menu-item-27-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-27-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-27-price': '67.00 PLN',
                'menu-item-28-title': 'Set 28',
                'menu-item-28-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-28-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-28-price': '67.00 PLN',
                'menu-item-29-title': 'Set 29',
                'menu-item-29-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-29-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-29-price': '67.00 PLN',
                'menu-item-30-title': 'Set 30',
                'menu-item-30-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-30-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-30-price': '67.00 PLN',
                'menu-item-31-title': 'Set 31',
                'menu-item-31-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-31-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-31-price': '67.00 PLN',
                'menu-item-32-title': 'Set 32',
                'menu-item-32-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-32-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-32-price': '67.00 PLN',
                'menu-item-33-title': 'Set 33',
                'menu-item-33-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-33-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-33-price': '67.00 PLN',
                'menu-item-34-title': 'Set 34',
                'menu-item-34-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-34-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-34-price': '67.00 PLN',
                'menu-item-35-title': 'Set 35',
                'menu-item-35-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-35-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-35-price': '67.00 PLN',
                'menu-item-36-title': 'Set 36',
                'menu-item-36-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-36-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-36-price': '67.00 PLN',
                'menu-item-37-title': 'Set 37',
                'menu-item-37-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-37-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-37-price': '67.00 PLN',
                'menu-item-38-title': 'Set 38',
                'menu-item-38-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-38-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-38-price': '67.00 PLN',
                'menu-item-39-title': 'Set 39',
                'menu-item-39-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-39-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-39-price': '67.00 PLN',
                'menu-item-40-title': 'Set 40',
                'menu-item-40-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-40-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-40-price': '67.00 PLN',
                'menu-item-41-title': 'Set 41',
                'menu-item-41-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-41-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-41-price': '67.00 PLN',
                'menu-item-42-title': 'Set 42',
                'menu-item-42-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-42-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-42-price': '67.00 PLN',
                'menu-item-43-title': 'Set 43',
                'menu-item-43-subtitle': '(14 pcs + 6 pcs FREE)',
                'menu-item-43-desc': '·Baked salmon futomaki (6 pcs) — nori, rice, baked salmon, Philadelphia cheese, cucumber, kanpyo<br>·Baked salmon hosomaki (8 pcs) — nori, rice, baked salmon, Philadelphia cheese',
                'menu-item-43-price': '67.00 PLN',
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
        
        // Оновлюємо data-i18n-subtitle
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n-subtitle="${key}"]`);
            elements.forEach(element => {
                element.textContent = currentTranslations[key];
            });
        });
        // Оновлюємо data-i18n-price
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n-price="${key}"]`);
            elements.forEach(element => {
                element.textContent = currentTranslations[key];
            });
        });
        // Оновлюємо data-i18n-alt
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n-alt="${key}"]`);
            elements.forEach(element => {
                element.setAttribute('alt', currentTranslations[key]);
            });
        });
        // Оновлюємо data-i18n-title
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n-title="${key}"]`);
            elements.forEach(element => {
                element.setAttribute('title', currentTranslations[key]);
            });
        });
        // Оновлюємо data-i18n-placeholder
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n-placeholder="${key}"]`);
            elements.forEach(element => {
                element.setAttribute('placeholder', currentTranslations[key]);
            });
        });
        // Оновлюємо data-i18n-aria
        Object.keys(currentTranslations).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n-aria="${key}"]`);
            elements.forEach(element => {
                element.setAttribute('aria-label', currentTranslations[key]);
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
        console.log('[i18n] language:', language, '| dict:', window.i18n && window.i18n[language]);
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

console.log('=== END OF JS ===');