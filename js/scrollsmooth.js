document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const headerHeight = document.querySelector("nav").offsetHeight;
        const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition =
            targetPosition -
            window.innerHeight / 8 +
            target.offsetHeight / 8 -
            headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});
