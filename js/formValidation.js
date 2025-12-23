// Wait for DOM to be ready
(function() {
    'use strict';
    
    const nameInput = document.querySelector(".name-input");
    const nameInputError = document.querySelector(".name-error");

    const emailInput = document.querySelector(".email-input");
    const emailInputError = document.querySelector(".email-error");

    const messageInput = document.querySelector(".message-input");
    const messageInputError = document.querySelector(".message-error");

    const form = document.querySelector("form");

    if (!nameInput || !emailInput || !messageInput || !form) {
        return; // Exit if elements not found
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let nameValid = false;
    let emailValid = false;
    let messageValid = false;

nameInput.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
        nameInput.classList.add("error-input");
        nameInputError.textContent = "Введите ваше имя";

        nameValid = false;
    } else {
        nameInput.classList.remove("error-input");
        nameInputError.textContent = "";

        nameValid = true;
    }

    console.log(nameValid);
    
});

emailInput.addEventListener("input", (e) => {
    if (!emailRegex.test(e.target.value)) {
        emailInput.classList.add("error-input");
        emailInputError.textContent = "Введите корректный email";

        emailValid = false;
    } else {
        emailInput.classList.remove("error-input");
        emailInputError.textContent = "";

        emailValid = true;
    }

    console.log(emailValid);
});

messageInput.addEventListener("input", (e) => {
    if (e.target.value.length < 15) {
        messageInput.classList.add("error-input");
        messageInputError.textContent = "Сообщение должно быть хотя бы 15 символов";

        messageValid = false;
    } else {
        messageInput.classList.remove("error-input");
        messageInputError.textContent = "";

        messageValid = true;
    }

    console.log(messageValid);
});

form.addEventListener("submit", (e) => {
    if (!nameValid || !emailValid || !messageValid) e.preventDefault();
});
})();
