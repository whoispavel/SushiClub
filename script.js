// Language data object
const languageData = {
    en: {
        'hero-title': 'SUSHI MENU',
        'hero-subtitle': 'Authentic Japanese flavors delivered to your table',
        'cta-button': 'Call Us',
        'menu-title': 'Our Menu',
        'menu-item-1-title': 'Set 1',
        'menu-item-1-desc': 'Futomaki grilled salmon (6 pieces)<br>Hosomaki grilled salmon (8 pieces)',
        'menu-item-1-price': 'Price: 67 zł',
        'menu-item-2-title': 'Set 2',
        'menu-item-2-desc': 'Futomaki raw salmon (6 pieces)<br>Hosomaki raw salmon (8 pieces)<br>1 free roll (6 pieces)',
        'menu-item-2-price': 'Price: 67 zł',
        'menu-item-3-title': 'Set 3',
        'menu-item-3-subtitle': '1 free roll with every set.',
        'menu-item-3-desc': 'California raw tuna wrapped in mango (8 pieces)<br>Futomaki grilled salmon (6 pieces)<br>Hosomaki cucumber (8 pieces)',
        'menu-item-3-price': 'Price: 137 zł',
        'menu-item-4-title': 'Set 4',
        'menu-item-4-subtitle': '1 free roll with every set.',
        'menu-item-4-desc': 'Philadelphia mango with salmon flambéed with unagi sauce (8 pieces)<br>California shrimp wrapped with tataki (10 pieces)<br>Futomaki tilapia tempura (6 pieces)<br>Hosomaki cucumber (8 pieces)<br>Hosomaki sweet potato (8 pieces)',
        'menu-item-4-price': 'Price: 197 zł',
        'menu-item-5-title': 'Set 5',
        'menu-item-5-subtitle': '1 free roll with every set.',
        'menu-item-5-desc': 'California eel in green masago (8 pieces)<br>Futomaki surimi salad in tempura (6 pieces)<br>Futomaki cooked shrimp (6 pieces)<br>Hosomaki mango (8 pieces)<br>Hosomaki avocado (8 pieces)<br>Hosomaki salmon (8 pieces)',
        'menu-item-5-price': 'Price: 223 zł',
        'discount-title': 'Get 15% Discount',
        'discount-subtitle': 'Leave your contacts and get a personal discount on your first order',
        'discount-button': 'Get 15% Discount',
        'contact-title': 'Contacts',
        'follow-title': 'Follow Us',
        'address': 'Szczytnicka 54/1D, 50-382 Wrocław',
        'copyright': '© 2024 Sushi Club. All rights reserved.',
        'name-placeholder': 'Your name',
        'email-placeholder': 'Your email'
    },
    pl: {
        'hero-title': 'MENU SUSHI',
        'hero-subtitle': 'Autentyczne japońskie smaki dostarczone do Twojego stołu',
        'cta-button': 'Zadzwoń',
        'menu-title': 'Nasze Menu',
        'menu-item-1-title': 'Zestaw 1',
        'menu-item-1-desc': 'Futomaki pieczony łosoś (6 sztuk)<br>Hosomaki pieczony łosoś (8 sztuk)',
        'menu-item-1-price': 'Cena: 67 zł',
        'menu-item-2-title': 'Zestaw 2',
        'menu-item-2-desc': 'Futomaki łosoś surowy (6 sztuk)<br>Hosomaki łosoś surowy (8 sztuk)<br>1 rolka gratis (6 sztuk)',
        'menu-item-2-price': 'Cena: 67 zł',
        'menu-item-3-title': 'Zestaw 3',
        'menu-item-3-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-3-desc': 'California tuńczyk surowy okładany w mango (8 sztuk)<br>Futomaki łosoś pieczony (6 sztuk)<br>Hosomaki ogórek (8 sztuk)',
        'menu-item-3-price': 'Cena: 137 zł',
        'menu-item-4-title': 'Zestaw 4',
        'menu-item-4-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-4-desc': 'Philadelphia mango z łososiem opalany z sosem unagi (8 sztuk)<br>California krewetka okładana tatakiem (10 sztuk)<br>Futomaki tilapia tempura (6 sztuk)<br>Hosomaki ogórek (8 sztuk)<br>Hosomaki batat (8 sztuk)',
        'menu-item-4-price': 'Cena: 197 zł',
        'menu-item-5-title': 'Zestaw 5',
        'menu-item-5-subtitle': 'Do każdego zestawu 1 rolka gratis.',
        'menu-item-5-desc': 'California węgorz w zielone masago (8 sztuk)<br>Futomaki sałatka surimi w tempurze (6 sztuk)<br>Futomaki krewetka gotowana (6 sztuk)<br>Hosomaki mango (8 sztuk)<br>Hosomaki awokado (8 sztuk)<br>Hosomaki łosoś (8 sztuk)',
        'menu-item-5-price': 'Cena: 223 zł',
        'discount-title': 'Otrzymaj 15% zniżki',
        'discount-subtitle': 'Zostaw swoje kontakty i otrzymaj personalną zniżkę na pierwsze zamówienie',
        'discount-button': 'Otrzymaj 15% zniżki',
        'contact-title': 'Kontakt',
        'follow-title': 'Śledź nas',
        'address': 'Szczytnicka 54/1D, 50-382 Wrocław',
        'copyright': '© 2024 Sushi Club. Wszystkie prawa zastrzeżone.',
        'name-placeholder': 'Twoje imię',
        'email-placeholder': 'Twój email'
    }
};

// Current language state
let currentLanguage = 'pl';

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
        'en': 'en',
        'pl': 'pl'
    };
    return languageCodes[language] || 'pl';
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
    
    // Submit to Google Sheets
    const submitButton = discountForm.querySelector('.discount-button');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitButton.disabled = true;
    
    // Submit data to Google Sheets
    submitToGoogleSheets(name, email)
        .then(() => {
            showNotification('Thank you! Your 15% discount has been sent to your email.', 'success');
            discountForm.reset();
        })
        .catch((error) => {
            console.error('Error submitting to Google Sheets:', error);
            showNotification('There was an error processing your request. Please try again.', 'error');
        })
        .finally(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });
}

async function submitToGoogleSheets(name, email) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwYourScriptIdHere/exec';
    const timestamp = new Date().toLocaleString();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('timestamp', timestamp);
    formData.append('language', currentLanguage);
    
    const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.text();
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
    } else {
        // Default to Polish if no saved preference
        const polishButton = document.querySelector(`[data-lang="pl"]`);
        if (polishButton) {
            switchLanguage('pl');
            updateActiveLanguageButton(polishButton);
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
