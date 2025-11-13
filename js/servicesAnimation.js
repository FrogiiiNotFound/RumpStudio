const services = document.querySelectorAll(".item-service");
let activeItem = 0;

function handleMobileLayout() {
    const isMobile = window.innerWidth <= 1250;

    services.forEach((service) => {
        service.style.pointerEvents = isMobile ? "none" : "auto";

        if (isMobile) {
            service.classList.add("active-item");
        } else {
            service.classList.remove("active-item");
            services[activeItem].classList.add("active-item");
        }
    });
}

services.forEach((el, key) => {
    el.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
            services.forEach((service) => service.classList.remove("active-item"));
            el.classList.add("active-item");
            activeItem = key;
        }
    });
});

window.addEventListener("load", handleMobileLayout);
window.addEventListener("resize", handleMobileLayout);
