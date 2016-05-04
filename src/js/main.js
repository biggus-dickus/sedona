'use strict';

/**
 * Hamburger menu toggler
 */
(function() {
  var navbarLogo = document.getElementById('navbar-logo');
  var menu = document.getElementById('menu');
  var menuToggler = document.getElementById('menu-toggler');
  var menuCross = document.getElementById('menu-cross');
 
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
})();


/**
 * Google Map 
 */
function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 34.825, lng: -111.670},
    disableDefaultUI: true,
    zoom: 9,
    scrollwheel: false
  });

  var myMarker = new google.maps.Marker({
    position: map.center,
    map: map,
    icon: '../img/icons/map-marker.png'
  });
}
