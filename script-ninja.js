// Language data object
const languageData = {
    en: {
        'hero-title': 'SUSHI CLUB',
        'hero-subtitle': 'Authentic Japanese flavors delivered to your table',
        'menu-title': 'Our Menu',
        'contact-title': 'Contact',
        'follow-title': 'Follow Us',
        'address': 'Szczytnicka 54/1D, 50-382 Wrocław',
        'copyright': '© 2024 Sushi Club. All rights reserved.',
    },
    pl: {
        'hero-title': 'SUSHI CLUB',
        'hero-subtitle': 'Autentyczne japońskie smaki dostarczone do Twojego stołu',
        'menu-title': 'Nasze Menu',
        'contact-title': 'Kontakt',
        'follow-title': 'Śledź nas',
        'address': 'Szczytnicka 54/1D, 50-382 Wrocław',
        'copyright': '© 2024 Sushi Club. Wszystkie prawa zastrzeżone.',
    }
};

// Menu data
const menuData = {
    "menuItems": [
        {
            "id": 1,
            "title": "Zestaw 1",
            "subtitle": "Do każdego zestawu 1 rolka gratis.",
            "description": "Futomak pieczony łosoś (6 sztuk) <br>Hosomaki pieczony łosoś (8 sztuk)",
            "price": "67 zł",
            "image": "Zestaw 1_1751666573597.jpg",
            "category": "sets"
        },
        {
            "id": 2,
            "title": "Zestaw 2",
            "subtitle": "Do każdego zestawu 1 rolka gratis.",
            "description": "Futomak łosoś surowy (6 sztuk) <br>Hosomaki łosoś surowy (8 sztuk) <br>1 rolka gratis (6 sztuk)",
            "price": "67 zł",
            "image": "Zestaw 2_1751666573597.jpg",
            "category": "sets"
        },
        {
            "id": 3,
            "title": "Zestaw 3",
            "subtitle": "Do każdego zestawu 1 rolka gratis.",
            "description": "California tuńczyk surowy okładany w mango (8 sztuk) <br>Futomak łosoś pieczony (6 sztuk) <br>Hosomaki ogórek (8 sztuk)",
            "price": "137 zł",
            "image": "Zestaw 3 _1751666573598.jpg",
            "category": "sets"
        },
        {
            "id": 4,
            "title": "Zestaw 4",
            "subtitle": "Do każdego zestawu 1 rolka gratis.",
            "description": "Philadelphia mango z łososiem pieczone sosem unagi (8 sztuk)<br>California krewetka okładana tatarem (10 sztuk)<br>Futomak tilapia tempura (6 sztuk)<br>Hosomaki ogórek (8 sztuk)<br>Hosomaki batat (8 sztuk)",
            "price": "197 zł",
            "image": "Zestaw 4_1751666573598.jpg",
            "category": "sets"
        },
        {
            "id": 5,
            "title": "Zestaw 5",
            "subtitle": "Do każdego zestawu 1 rolka gratis.",
            "description": "California węgorz w zielone masago (8 sztuk)<br>Futomaki sałatka surimi w tempurze (6 sztuk)<br> Futomaki krewetka gotowana (6 sztuk) <br>Hosomaki mango (8 sztuk)<br>Hosomaki awokado (8 sztuk)  <br>Hosomaki łosoś (8 sztuk)",
            "price": "223 zł",
            "image": "Zestaw 5_1751666573598.jpg",
            "category": "sets"
        },
        {
            "id": 6,
            "title": "Zestaw 6",
            "subtitle": "Do każdego zestawu 1 rolka gratis.",
            "description": "Vulkan łosoś pieczony (2 sztuki)<br>nori, ryż, serek Philadelphia, awokado, czapeczki serowe, z sosem słodkim <br><br>Vulkan tatar z łososia (2 sztuki)<br>nori, ryż, łosoś, por, olej sezamowy <br><br>Vulkan krabowy (2 sztuki)<br>nori, ryż, serek philadelphia, krewetka gotowana, masago<br><br>Nigiri łosoś (2 sztuki) <br>Nigiri tuńczyk (2 sztuki)<br>Nigiri węgorz (2 sztuki)",
            "price": "127 zł",
            "image": "Zestaw 6_1751666573598.jpg",
            "category": "sets"
        },
        {
            "id": 7,
            "title": "Futo set",
            "subtitle": "",
            "description": "Futomaki tatar z łososia (12 sztuk)<br>Futomaki łosoś (12 sztuk)<br>Futomaki sałatka surimi w tempurze (12 sztuk)<br>Futomaki krewetka (12 sztuk)<br>Futomaki tunczyk (12 sztuk)<br>Futomaki wegetarianski (tofu, kampio, ogórek) (12 sztuk)",
            "price": "395 zł",
            "image": "Futo set_1751666573596.jpg",
            "category": "sets"
        },
        {
            "id": 8,
            "title": "California set",
            "subtitle": "Każda California – 10 sztuk.",
            "description": "Philadelphia okładana tatarem opalonym<br>California pieczony łosoś okładany mango<br>Philadelphia łosoś<br>California tuńczyk w masago zielony<br>California batat okładana gruszka<br>California cukinia okładana boczkiem opalonym<br>Philadelphia węgorzem<br>California tunczyk w masago zielony<br>California batat oktadana gruszka<br>California cukinia oktadana boczkiem opalonym",
            "price": "377 zł",
            "image": "California set_1751666573596.jpg",
            "category": "sets"
        },
        {
            "id": 9,
            "title": "PHILADELPHIA",
            "subtitle": "Różne rodzaje Philadelphia",
            "description": "Philadelphia tuńczyk<br>serek Philadelphia, masago, mango, łosoś - 57 zł<br><br>Philadelphia krewetka<br>serek Philadelphia, masago, mango, łosoś - 57 zł<br><br>Philadelphia węgorz<br>serek Philadelphia, masago, mango, łosoś - 59 zł<br><br>Philadelphia łosoś<br>serek Philadelphia, masago, mango, łosoś - 57 zł",
            "price": "od 57 zł",
            "image": "Philadelphia _1751666573596.jpg",
            "category": "rolls"
        },
        {
            "id": 10,
            "title": "Wegetariański set",
            "subtitle": "",
            "description": "Futomaki tofu (6 sztuk)<br>Kalifornia cukinia w ogórkach (10 sztuk)<br>Philadelphia z ogórkiem okładana goma (10 sztuk) <br>Hosomaki kampyo (8 sztuk)<br>Hosomaki mango (8 sztuk)<br>Nigiri z awokado (2 sztuki)",
            "price": "119 zł",
            "image": "Wegetariański set _1751666573597.jpg",
            "category": "sets"
        },
        {
            "id": 11,
            "title": "Hosomaki set",
            "subtitle": "",
            "description": "Hosomaki ogórek<br> Hosomaki kanpyo<br> Hosomaki mango<br> Hosomaki awokado<br> Hosomaki batat<br> Hosomaki łosoś<br> Hosomaki tuńczyk<br> Hosomaki łosoś pieczony<br> Hosomaki krewetka<br> Hosomaki węgorzem",
            "price": "127 zł",
            "image": "Hosomaki set_1751666573596.jpg",
            "category": "rolls"
        },
        {
            "id": 12,
            "title": "ROLKI POJEDYNCZE",
            "subtitle": "Różne rolki po 10 sztuk",
            "description": "California Rainbow (łosoś tuńczyk, krewetka) (10 sztuk) - 57 zł<br><br>California kurczak panko okładana boczkiem - 57 zł<br><br>Philadelphia tatar z losośia - 57 zł<br><br>California pieczony łosoś okładaną mango - 57 zł<br><br>Philadelphia  krewetka - 57 zł<br><br>Philadelphia losoś - 57 zł",
            "price": "od 57 zł",
            "image": "Rolki Pojedyncze_1751666573597.jpg",
            "category": "rolls"
        },
        {
            "id": 13,
            "title": "Sushi burger łosoś",
            "subtitle": "",
            "description": "(nori, ryż, łosoś, serek philadelphia, masago, sos sriracha, panko,<br>maka tempura, awokado, ogórek).",
            "price": "29 zł",
            "image": "Sushi burger łosoś _1751666573597.jpg",
            "category": "burgers"
        },
        {
            "id": 14,
            "title": "Sushi burger krewetka",
            "subtitle": "",
            "description": "(nori, ryż, krewetka + mango, sos słodkie chilli, ser cheddar,<br>ogórek, panko, maka tempura).",
            "price": "29 zł",
            "image": "Sushi burger krewetka_1751666573597.jpg",
            "category": "burgers"
        },
        {
            "id": 15,
            "title": "Sushi burger wegetariański",
            "subtitle": "",
            "description": "(nori, ryż, batat, kampyo, ogórek, serek philadelphia,<br>mango, panko, maka tempura).",
            "price": "25 zł",
            "image": "Sushi burger wegetariański_1751666573597.jpg",
            "category": "burgers"
        },
        {
            "id": 16,
            "title": "PRZYSTAWKI",
            "subtitle": "Różne przystawki",
            "description": "Tatar z łososia 150 gram (łosoś, por, olej sezamowy) - 35 zł <br><br>Sałatka goma (150 gram) - 17 zł <br><br>Pierożki gyoza z mięsem + sos sweet chilli (6 sztuk + 1 sztuka) - 25 zł <br><br>Pierożki gyoza wegetariańskie + sos sweet chilli (6 sztuk + 1 sztuka) - 23 zł<br><br>Kimchi (kapusta pekińska, por, marchew, biała rzodkiew, imbir, czosnek, chilli (150 gram) - 17 zł <br><br>Kalmary (6 sztuk + sos sweet chilli) - 29 zł <br><br>Krewetka (6 sztuk + sos ma słodki) - 29 zł",
            "price": "od 17 zł",
            "image": "Przystawki_1751666573596.jpg",
            "category": "appetizers"
        },
        {
            "id": 17,
            "title": "NAPOJE",
            "subtitle": "",
            "description": "Coca-Cola 0,33l - 8 zł<br>Fanta 0,33l - 8 zł<br>Sprite 0,33l - 8 zł<br>Woda mineralna 0,5l - 6 zł<br>Sok pomarańczowy 0,25l - 7 zł<br>Herbata zielona - 5 zł",
            "price": "od 5 zł",
            "image": "menu-17.jpg",
            "category": "drinks"
        },
        {
            "id": 18,
            "title": "DODATKI",
            "subtitle": "",
            "description": "Sos sojowy - 2 zł<br>Sos wasabi - 3 zł<br>Imbir marynowany - 3 zł<br>Sos słodko-kwaśny - 4 zł<br>Sos sriracha - 4 zł<br>Sos unagi - 5 zł",
            "price": "od 2 zł",
            "image": "menu-18.jpg",
            "category": "appetizers"
        }
    ]
};

let currentLanguage = 'pl';

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSwitcher();
    initializeCategorySwitcher();
    initializeMenuDisplay();
    initializeCallbackWidget();
    initializeMobileMenu();
    initializeSmoothScrolling();
});

// Language Switcher
function initializeLanguageSwitcher() {
    // Language switching functionality can be added here
    updateContent();
}

function switchLanguage(language) {
    currentLanguage = language;
    updateContent();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (languageData[currentLanguage] && languageData[currentLanguage][key]) {
            element.textContent = languageData[currentLanguage][key];
        }
    });
}

// Category Switcher
function initializeCategorySwitcher() {
    const categoryItems = document.querySelectorAll('.categories__item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get category from href
            const href = item.getAttribute('href');
            const category = href.replace('#', '');
            
            // Filter and display menu items
            displayMenuItems(category);
        });
    });
}

// Menu Display
function initializeMenuDisplay() {
    displayMenuItems('sets'); // Show sets by default
}

function displayMenuItems(category = 'all') {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;
    
    let itemsToShow = menuData.menuItems;
    
    if (category !== 'all') {
        itemsToShow = menuData.menuItems.filter(item => item.category === category);
    }
    
    productGrid.innerHTML = itemsToShow.map(item => createProductCard(item)).join('');
}

function createProductCard(item) {
    return `
        <div class="product-card">
            <div class="product-card__image" style="background-image: url('images/${item.image}')"></div>
            <div class="product-card__content">
                <h3 class="product-card__name">${item.title}</h3>
                <div class="product-card__details">
                    ${item.subtitle ? `<p class="product-card__subtitle">${item.subtitle}</p>` : ''}
                    <p class="product-card__description">${item.description}</p>
                    <p class="product-card__price">Cena: ${item.price}</p>
                </div>
            </div>
        </div>
    `;
}

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

        // Simulate form submission
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

// Mobile Menu
function initializeMobileMenu() {
    const toggle = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}