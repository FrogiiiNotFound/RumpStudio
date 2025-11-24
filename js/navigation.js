const menuLinks = document.querySelectorAll(".link-header");
const sections = document.querySelectorAll("section");

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = e.target.getAttribute("id");

        sections.forEach((section) => {
            if (section.id === targetId || section.classList.contains(targetId)) {
                const y = section.getBoundingClientRect().top + window.scrollY - 100;

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });
});
