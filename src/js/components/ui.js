/**
 * Hamburger menu toggler
 */
(function() {
  var navbarLogo = document.getElementById('navbar-logo');
  var menu = document.getElementById('menu');
  var menuToggler = document.getElementById('menu-toggler');
  var menuCross = document.getElementById('menu-cross');
  var findHotel = document.getElementById('find-hotel');
  var modalWindow = document.querySelector('.modal-window');
  var hotelModal = document.getElementById('hotel-modal');
 
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
        modalWindow.classList.toggle('hidden');

        if (modalWindow.parentNode.classList.contains('modal-window__overlay')) {
          modalWindow.parentNode.classList.toggle('hidden');
        }
      });
    }
  } 

})();
