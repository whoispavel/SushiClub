console.log('=== START OF JS ===');
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
});