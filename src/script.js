
document.addEventListener('DOMContentLoaded', function (event) {

   // smooth scroll for navigation
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

   // nested menu
   const nestedMenuLinks = document.querySelector('.menu__item--dropdown');
   const dropdownMenu = document.querySelector('.menu__dropdown');

   if (nestedMenuLinks && dropdownMenu) {
      nestedMenuLinks.addEventListener("click", function (e) {
         dropdownMenu.classList.toggle('menu__dropdown--active-js');
      });
   }


   const nestedActive = document.querySelector('.menu__dropdown--active-js');
   if (nestedActive.lenght > 0) {
         let backBtn = document.createElement('li');
         backBtn.textContent = '< back';
         dropdownMenu.prepend(backBtn);
      }
   
   // accordion 
   const accordion = document.getElementsByClassName('accordion__panel');
   for (i=0; i<accordion.length; i++) {
      accordion[i].addEventListener('click', function () {
         this.classList.toggle('accordion__panel--active-js')
      })
   }
})
   
