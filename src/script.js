// smooth scroll for navigation

const navLinks = document.querySelectorAll('.nav__link[data-goto]');

if (navLinks.length > 0) {
   navLinks.forEach(navLink => {
      navLink.addEventListener("click", onNavLinkClick);
   });

   function onNavLinkClick(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const gotoBlock = document.querySelector(navLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

// burger menu

const burgerMenu = document.querySelector('.block-lowres__burger');

 if ('.block-lowres__burger') {
   const menuBody  = document.querySelector('.menu');

   burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('--lock');
      burgerMenu.classList.toggle('--active');
      menuBody.classList.toggle('--active');
   });
}