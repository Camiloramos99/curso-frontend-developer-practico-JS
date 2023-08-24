const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);

menuMobileIcon.addEventListener("click", toggleMobileMenu);