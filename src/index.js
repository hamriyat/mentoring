import './style.scss';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

let swiper = new Swiper(".my-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

console.log('Webpack starter with SCSS and dev server');
