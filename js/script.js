"use strict"

// --------BURGER---------
const iconBurger = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__link');


if (iconBurger) {
    iconBurger.addEventListener('click', openMenu);
}

if (headerLinks) {
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener('click', closeMenu);
    })

}

function openMenu() {
    document.body.classList.toggle('lock');
    iconBurger.classList.toggle('active');
    menuHeader.classList.toggle('active');
}

function closeMenu() {
    if (iconBurger.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconBurger.classList.remove('active');
        menuHeader.classList.remove('active');
    }
}