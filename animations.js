document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        el.style.transition = "0.6s";
    });

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});