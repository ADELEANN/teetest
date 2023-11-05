document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const content = document.querySelector(".content");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        content.classList.toggle("active");
    });
});
