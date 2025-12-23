const scrollBtn = document.querySelectorAll(".menu-link");
const blockToScroll = document.querySelector(".contacts");

scrollBtn.forEach((el) =>
    el.addEventListener("click", (e) => {
        e.preventDefault();
        blockToScroll.scrollIntoView({
            top: 0,
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })
);
