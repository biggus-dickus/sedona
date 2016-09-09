/**
 * Hamburger menu toggler
 */
(function() {
  var navbar = document.querySelector('.navbar'),
      navbarLogo = document.getElementById('navbar-logo'),
      menu = document.getElementById('menu'),
      menuToggler = document.getElementById('menu-toggler'),
      menuCross = document.getElementById('menu-cross'),
      findHotel = document.getElementById('find-hotel'),
      modalWindow = document.querySelector('.modal-window'),
      hotelModal = document.getElementById('hotel-modal');
 
  /**
   * Toggle 'hidden' class in a specified array of elements
   * @param  {[Array]} elems [description]
   */
  function toggleHidden(elems) {
    elems.forEach(function(elem) {
      elem.classList.toggle('hidden');
    });
  }

  // Shows menu on click, hides logo and hamburger
  menuToggler.addEventListener('click', function() {
    toggleHidden([menuToggler, navbarLogo]);
    menu.style.display = 'block';
  });
  
  // Hides menu on click, shows logo and hamburger
  menuCross.addEventListener('click', function() {
    toggleHidden([navbarLogo, menuToggler]);
    menu.style.display = 'none';
  });


  //Toggle Find Hotels Modal Window 
  if (findHotel) {
    findHotel.addEventListener('click', function() {
      hotelModal.classList.toggle('hidden');
    });
  }

  //Modal windows close button
  var closeBtn = document.querySelectorAll('[data-modal="close"]');
  
  if (closeBtn) {
    for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener('click', function() {
        modalWindow.classList.add('hidden');
        
        if (navbar.classList.contains('index-one')) {
          navbar.classList.remove('index-one');
        }
      });
    }
  } 

})();
