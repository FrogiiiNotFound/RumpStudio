// footer
function copyToClipboard(event, textToCopy) {
    event.preventDefault();
    
    const contactText = event.currentTarget.querySelector('.footer__contact-text');
    const originalText = contactText.textContent;
    
    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Меняем текст на "Скопировано"
        contactText.textContent = 'Скопировано!';
        
        // Возвращаем исходный текст через 2 секунды
        setTimeout(() => {
            contactText.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
        // Если копирование не удалось, все равно показываем "Скопировано"
        contactText.textContent = 'Скопировано';
        setTimeout(() => {
            contactText.textContent = originalText;
        }, 2000);
    });
}


// email icon

// new browsers
async function copyEmail() {
    const email = 'rumpwebstudio@gmail.com';

    const emailText = document.querySelector('.email-link')
    if (emailText.querySelector('.email-text')) {
        document.querySelector('.email-text').innerHTML = "Скопировано!"

        setTimeout(() => {
            document.querySelector('.email-text').innerHTML = "Почта"
        }, 2000)
    }

    try {
        await navigator.clipboard.writeText(email);
    } catch (err) {
        fallbackCopyTextToClipboard(email);
    }
}

// old browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'успешно' : 'неудачно';
        alert('Email скопирован ' + msg + ': ' + text);
    } catch (err) {
        alert('Ошибка копирования: ' + err);
    }
    
    document.body.removeChild(textArea);
}

// phone icon

// new browsers
async function copyPhone() {
    const phone = '+79871752973';

    const phoneText = document.querySelector('.phone-link')
    if (phoneText.querySelector('.phone-text')) {
        document.querySelector('.phone-text').innerHTML = "Скопировано!"

        setTimeout(() => {
            document.querySelector('.phone-text').innerHTML = "Номер"
        }, 2000)
    }

    try {
        await navigator.clipboard.writeText(phone);
    } catch (err) {
        fallbackCopyTextToClipboard(phone);
    }
}

// old browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'успешно' : 'неудачно';
        alert('Телефон скопирован ' + msg + ': ' + text);
    } catch (err) {
        alert('Ошибка копирования: ' + err);
    }
    
    document.body.removeChild(textArea);
}