// Language data object
const languageData = {
    uk: {
        'hero-title': 'СУШІ-МЕНЮ',
        'hero-subtitle': 'Автентичні японські смаки прямо до вашого столу',
        'cta-button': 'Зателефонувати',
        'menu-title': 'Наше меню',
        'menu-item-1-title': 'Філадельфія',
        'menu-item-1-desc': 'Класичний ролл з лососем, огірком та вершковим сиром',
        'menu-item-2-title': 'Нігірі сет',
        'menu-item-2-desc': 'Асорті нігірі з тунцем, лососем та креветками',
        'menu-item-3-title': 'Каліфорнія',
        'menu-item-3-desc': 'Ролл з крабовими паличками, авокадо та ікрою тобіко',
        'menu-item-4-title': 'Дракон',
        'menu-item-4-desc': 'Запечений ролл з вугрем, авокадо та спеціальним соусом',
        'discount-title': 'Отримайте знижку 15%',
        'discount-subtitle': 'Залиште свої контакти та отримайте персональну знижку на перше замовлення',
        'discount-button': 'Отримати знижку 15%',
        'contact-title': 'Контакти',
        'follow-title': 'Слідкуйте за нами',
        'address': 'вул. Японська, 15, Київ',
        'copyright': '© 2024 Суші-меню. Всі права захищені.',
        'name-placeholder': 'Ваше ім\'я',
        'email-placeholder': 'Ваш email'
    },
    ru: {
        'hero-title': 'СУШИ-МЕНЮ',
        'hero-subtitle': 'Аутентичные японские вкусы прямо к вашему столу',
        'cta-button': 'Позвонить',
        'menu-title': 'Наше меню',
        'menu-item-1-title': 'Филадельфия',
        'menu-item-1-desc': 'Классический ролл с лососем, огурцом и сливочным сыром',
        'menu-item-2-title': 'Нигири сет',
        'menu-item-2-desc': 'Ассорти нигири с тунцом, лососем и креветками',
        'menu-item-3-title': 'Калифорния',
        'menu-item-3-desc': 'Ролл с крабовыми палочками, авокадо и икрой тобико',
        'menu-item-4-title': 'Дракон',
        'menu-item-4-desc': 'Запеченный ролл с угрем, авокадо и специальным соусом',
        'discount-title': 'Получите скидку 15%',
        'discount-subtitle': 'Оставьте свои контакты и получите персональную скидку на первый заказ',
        'discount-button': 'Получить скидку 15%',
        'contact-title': 'Контакты',
        'follow-title': 'Следите за нами',
        'address': 'ул. Японская, 15, Киев',
        'copyright': '© 2024 Суши-меню. Все права защищены.',
        'name-placeholder': 'Ваше имя',
        'email-placeholder': 'Ваш email'
    },
    en: {
        'hero-title': 'SUSHI MENU',
        'hero-subtitle': 'Authentic Japanese flavors delivered to your table',
        'cta-button': 'Call Us',
        'menu-title': 'Our Menu',
        'menu-item-1-title': 'Philadelphia',
        'menu-item-1-desc': 'Classic roll with salmon, cucumber and cream cheese',
        'menu-item-2-title': 'Nigiri Set',
        'menu-item-2-desc': 'Assorted nigiri with tuna, salmon and shrimp',
        'menu-item-3-title': 'California',
        'menu-item-3-desc': 'Roll with crab sticks, avocado and tobiko caviar',
        'menu-item-4-title': 'Dragon',
        'menu-item-4-desc': 'Baked roll with eel, avocado and special sauce',
        'discount-title': 'Get 15% Discount',
        'discount-subtitle': 'Leave your contacts and get a personal discount on your first order',
        'discount-button': 'Get 15% Discount',
        'contact-title': 'Contacts',
        'follow-title': 'Follow Us',
        'address': 'Japanese St., 15, Kyiv',
        'copyright': '© 2024 Sushi Menu. All rights reserved.',
        'name-placeholder': 'Your name',
        'email-placeholder': 'Your email'
    },
    pl: {
        'hero-title': 'MENU SUSHI',
        'hero-subtitle': 'Autentyczne japońskie smaki dostarczone do Twojego stołu',
        'cta-button': 'Zadzwoń',
        'menu-title': 'Nasze Menu',
        'menu-item-1-title': 'Filadelfia',
        'menu-item-1-desc': 'Klasyczna rolka z łososiem, ogórkiem i serem kremowym',
        'menu-item-2-title': 'Zestaw Nigiri',
        'menu-item-2-desc': 'Mieszane nigiri z tuńczykiem, łososiem i krewetkami',
        'menu-item-3-title': 'Kalifornia',
        'menu-item-3-desc': 'Rolka z pałeczkami krabowymi, awokado i kawiorem tobiko',
        'menu-item-4-title': 'Smok',
        'menu-item-4-desc': 'Pieczona rolka z węgorzem, awokado i specjalnym sosem',
        'discount-title': 'Otrzymaj 15% zniżki',
        'discount-subtitle': 'Zostaw swoje kontakty i otrzymaj personalną zniżkę na pierwsze zamówienie',
        'discount-button': 'Otrzymaj 15% zniżki',
        'contact-title': 'Kontakt',
        'follow-title': 'Śledź nas',
        'address': 'ul. Japońska, 15, Kijów',
        'copyright': '© 2024 Menu Sushi. Wszystkie prawa zastrzeżone.',
        'name-placeholder': 'Twoje imię',
        'email-placeholder': 'Twój email'
    }
};

// Current language state
let currentLanguage = 'uk';

// DOM elements
const languageButtons = document.querySelectorAll('.lang-btn');
const discountForm = document.getElementById('discountForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSwitcher();
    initializeFormHandling();
    initializeImageLoading();
    initializeSmoothScrolling();
});

// Language switcher functionality
function initializeLanguageSwitcher() {
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLanguage = this.getAttribute('data-lang');
            switchLanguage(selectedLanguage);
            updateActiveLanguageButton(this);
        });
    });
}

function switchLanguage(language) {
    if (!languageData[language]) {
        console.error(`Language ${language} not found`);
        return;
    }
    
    currentLanguage = language;
    
    // Update document language
    document.documentElement.lang = getLanguageCode(language);
    
    // Update all text elements
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (languageData[language][key]) {
            element.textContent = languageData[language][key];
        }
    });
    
    // Update form placeholders
    updateFormPlaceholders(language);
    
    // Save language preference
    localStorage.setItem('preferredLanguage', language);
}

function updateFormPlaceholders(language) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    if (nameInput && languageData[language]['name-placeholder']) {
        nameInput.placeholder = languageData[language]['name-placeholder'];
    }
    
    if (emailInput && languageData[language]['email-placeholder']) {
        emailInput.placeholder = languageData[language]['email-placeholder'];
    }
}

function updateActiveLanguageButton(activeButton) {
    languageButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

function getLanguageCode(language) {
    const languageCodes = {
        'uk': 'uk',
        'ru': 'ru',
        'en': 'en',
        'pl': 'pl'
    };
    return languageCodes[language] || 'uk';
}

// Form handling
function initializeFormHandling() {
    if (discountForm) {
        discountForm.addEventListener('submit', handleFormSubmission);
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(discountForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    
    // Basic validation
    if (!name || name.length < 2) {
        showNotification('Please enter a valid name', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = discountForm.querySelector('.discount-button');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you! Your 15% discount has been sent to your email.', 'success');
        discountForm.reset();
        
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Image loading optimization
function initializeImageLoading() {
    const images = document.querySelectorAll('.menu-item-image img');
    
    // Add loading class initially
    images.forEach(img => {
        img.classList.add('loading');
        
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
            img.classList.remove('loading');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
                this.classList.remove('loading');
            });
            
            img.addEventListener('error', function() {
                this.classList.remove('loading');
                this.alt = 'Image failed to load';
                console.warn('Failed to load image:', this.src);
            });
        }
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languageData[savedLanguage]) {
        const languageButton = document.querySelector(`[data-lang="${savedLanguage}"]`);
        if (languageButton) {
            switchLanguage(savedLanguage);
            updateActiveLanguageButton(languageButton);
        }
    }
});

// Performance optimization: Intersection Observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe menu items for scroll animations
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// Handle phone link clicks (for analytics/tracking)
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="tel:"]')) {
        // Track phone click event
        console.log('Phone number clicked:', event.target.href);
        
        // You can add analytics tracking here
        // Example: gtag('event', 'phone_click', { 'phone_number': event.target.href });
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(event) {
    // Handle escape key to close any open modals/dropdowns
    if (event.key === 'Escape') {
        // Close any notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        });
    }
});

// Handle form input focus for better UX
document.addEventListener('focus', function(event) {
    if (event.target.matches('input')) {
        event.target.parentNode.classList.add('focused');
    }
}, true);

document.addEventListener('blur', function(event) {
    if (event.target.matches('input')) {
        event.target.parentNode.classList.remove('focused');
    }
}, true);
