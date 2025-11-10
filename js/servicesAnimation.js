const services = document.querySelectorAll(".item-service");

let activeItem = 0;

services.forEach((el, key) => el.addEventListener("mouseenter", (e) => {
    services.forEach((service) => {
        service.classList.remove("active-item");
    })

    if (!el.classList.contains("active-item")) el.classList.add("active-item");
    
    activeItem = key
}));

services.forEach(el => el.addEventListener("mouseleave", (e) => {
    services.forEach((service) => {
        service.classList.remove("active-item");
    })

    services[activeItem].classList.add("active-item");
}))