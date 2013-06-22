// http://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&sensor=false
window.onload = initMap;

function initMap(){
	var mapOptions = {
		center: new google.maps.LatLng(-34, 150 ),
		zoom: 8,
		mapTypeId: google.maps.mapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initMap);

