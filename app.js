document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    const backToTop = document.getElementById("backToTop");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});