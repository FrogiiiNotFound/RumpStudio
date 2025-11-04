function checkCenterCard() {
    const scene = document.querySelector(".portfolio__scene");
    const cards = [
        document.querySelector(".portfolio__card1"),
        document.querySelector(".portfolio__card2"),
        document.querySelector(".portfolio__card3"),
        document.querySelector(".portfolio__card4"),
    ].filter(Boolean); // Убираем возможные null элементы

    const viewportCenter = window.innerHeight / 2;
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestCard = index + 1;
        }
    });

    // Удаляем старые классы и добавляем новый
    scene.classList.remove("scene-active1", "scene-active2", "scene-active3", "scene-active4");
    if (closestCard) {
        scene.classList.add(`scene-active${closestCard}`);
    }
}

// Запускаем при загрузке и при скролле
window.addEventListener("load", checkCenterCard);
window.addEventListener("scroll", checkCenterCard);
window.addEventListener("resize", checkCenterCard);
