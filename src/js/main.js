'use strict';

/**
 * Hamburger menu toggler
 */
(function() {
  var navbarLogo = document.getElementById('navbar-logo');
  var menu = document.getElementById('menu');
  var menuToggler = document.getElementById('menu-toggler');
  var menuCross = document.getElementById('menu-cross');

  menuToggler.addEventListener('click', function(evt) {
    evt.preventDefault();
    this.classList.toggle('hidden');
    navbarLogo.classList.toggle('hidden');
    menu.classList.toggle('hidden');
  });

  menuCross.addEventListener('click', function(evt) {
    evt.preventDefault();
    navbarLogo.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    menuToggler.classList.toggle('hidden');
  });
})();
