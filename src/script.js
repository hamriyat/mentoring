'use strict';

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
         removeNestedMenu();
      });
   }


   // nested menu
   const nestedMenuLinks = document.querySelectorAll('.menu__item--dropdown');
   const dropdownMenu = document.querySelectorAll('.menu__dropdown');

   function removeNestedMenu () {
      dropdownMenu.forEach(el => {
         el.classList.remove('menu__dropdown--active-js');
      })
   }
   
   addBack();

   window.addEventListener(`resize`, event => {
      addBack();
   }, false);

   function addBack() {
      if(window.innerWidth <= 960) {

         nestedMenuLinks.forEach(el => {
            let back = el.querySelector('.menu__dropdown-back-js');
            if (!back) {
               let backBtn = document.createElement('li');
               backBtn.textContent = '< back';
               backBtn.classList.add('menu__dropdown-back-js');
               el.querySelector('.menu__dropdown').prepend(backBtn);
            }
         })

      } else {
         nestedMenuLinks.forEach(el => {
            let back = el.querySelector('.menu__dropdown-back-js');
            if (back) {
               back.remove();
            }
         })
      }
   }

   let backMenuBtn = document.querySelectorAll('.menu__dropdown-back-js');

   if (backMenuBtn) {
      backMenuBtn.forEach(el => {
         el.addEventListener("click", function (e) {
            dropdownMenu.forEach(el => {
               e.stopPropagation();
               el.classList.remove('menu__dropdown--active-js');
            })
         });
      })

   }

   if (nestedMenuLinks) {
      nestedMenuLinks.forEach(el => {
         el.addEventListener("click", function (e) {
            this.querySelector('.menu__dropdown').classList.add('menu__dropdown--active-js');
            
         });
      })
   }


   // accordion 
   const accordion = document.getElementsByClassName('accordion__panel');
   let i;
   for (i=0; i<accordion.length; i++) {
      accordion[i].addEventListener('click', function () {
         this.classList.toggle('accordion__panel--active-js')
      })
   }
})
   
