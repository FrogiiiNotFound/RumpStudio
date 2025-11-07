document.addEventListener("DOMContentLoaded", function () {
    const navigationConfig = {
        home__item1: { target: "home", offset: 0 },
        home__item2: { target: "about-us", offset: 0 },
        home__item3: { target: "portfolio", offset: 0 },
        home__item4: { target: "services", offset: 0 },
        home__item5: { target: "contacts", offset: 50 },
    };

    function scrollToElement(targetElement, offset = 0) {
        const elementRect = targetElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const targetPosition = absoluteElementTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }

    Object.keys(navigationConfig).forEach((linkClass) => {
        const links = document.querySelectorAll(`.${linkClass}`);
        const target = document.querySelector(`.${navigationConfig[linkClass].target}`);
        const offset = navigationConfig[linkClass].offset;

        if (links.length > 0 && target) {
            links.forEach((link) => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    scrollToElement(target, offset);
                });
            });
        }
    });
});
