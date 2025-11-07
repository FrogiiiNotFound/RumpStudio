const services = document.querySelectorAll(".item-service");

services.forEach(el => el.addEventListener("mouseenter", (e) => {
    if (!el.classList.contains("active-item")) el.classList.add("active-item");
}));

services.forEach(el => el.addEventListener("mouseleave", (e) => {
    el.classList.remove("active-item");
}))