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


/**
 * Google Map 
 */
function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 34.850, lng: -111.800},
    disableDefaultUI: true,
    zoom: 9,
    scrollwheel: false
  });

  var myMarker = new google.maps.Marker({
    position: {lat: 34.825, lng: -111.670},
    map: map,
    icon: '../img/icons/map-marker.png'
  });
}
