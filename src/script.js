// smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function (event) {

   const navLinks = document.querySelectorAll('.nav__link');

   if (navLinks.length > 0) {

      navLinks.forEach(navLink => {
         navLink.addEventListener("click", onNavLinkClick);
      });

      function onNavLinkClick(e) {
         let navLinkItem = this;
         let currentHref =  navLinkItem.getAttribute('href');
         const gotoBlock = document.querySelector(currentHref);
         if (gotoBlock) {
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
         }
         e.preventDefault();

      }
   }

//burger menu

const burgerMenu = document.querySelector('.burger');
const menuBody  = document.querySelector('.menu');

 if (burgerMenu && menuBody) {

   burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('scroll-lock-js');
      burgerMenu.classList.toggle('burger--active-js');
      menuBody.classList.toggle('menu--active-js');
   });
}



});