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
    icon: 'img/icons/map-marker.png'
  });
}
