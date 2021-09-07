'use strict';


document.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu');
    let menuLinks = document.querySelectorAll('.menu__links');
    let overlay = document.querySelector('.menu__overlay');
    let header = document.querySelector('.promo__wrapper');
    let sidepanel = document.querySelector('.sidepanel');
    let sidepanelInfo = document.querySelector('.sidepanel__block');
    let sidepanelArrow = document.querySelectorAll('.sidepanel__arrow');
    let sidepanelText = document.querySelector('.sidepanel__text');
    let isMenuOpen = false;
    let isSidepanelOpen = false;

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            sidepanel.classList.remove('active');
            header.classList.remove('active');
            overlay.classList.remove('active');
            isMenuOpen = !isMenuOpen;
        });
    });

    hamburger.addEventListener('click', () => {
        if (!isMenuOpen) {
            menu.classList.add('active');
            sidepanel.classList.add('active');
            header.classList.add('active');
            overlay.classList.add('active');
        } else {
            menu.classList.remove('active');
            sidepanel.classList.remove('active');
            header.classList.remove('active');
            overlay.classList.remove('active');
        }
        isMenuOpen = !isMenuOpen;
    });

    sidepanelArrow.forEach(item => {
        item.addEventListener('click', () => {
            if (!isSidepanelOpen) {
                sidepanelInfo.classList.add('active');
                sidepanelText.classList.add('active');
                hamburger.style.display = 'none';
            } else {
                sidepanelInfo.classList.remove('active');
                sidepanelText.classList.remove('active');
                hamburger.style.display = 'flex';
            }
            isSidepanelOpen = !isSidepanelOpen;
        });
    });
});

