import './style.scss';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

let swiper = new Swiper(".my-swiper", {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2,
        },

        1140: {
            slidesPerView: 3,
        }
    }
});

console.log('Webpack starter with SCSS and dev server');
