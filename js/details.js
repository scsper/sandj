function Map(){
	this.directionService = new google.maps.DirectionsService();
}
Map.prototype = {
	init: function (){
		var mapOptions = {
	        center: new google.maps.LatLng(33.8, -117.9),
	        zoom: 10,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    this.map = new google.maps.Map(document.getElementById("map-canvas"),
        	mapOptions);
	},
	initDirector : function(){
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		this.directionsDisplay.setMap(this.map);
		this.directionsDisplay.setPanel(document.getElementById('directions-panel'));
	},
	calcRoute : function(origin1){
		var start = origin1;
		var end = "600 N. Main St., Santa Ana, CA 92701";
		var request = {
			origin: start,
			destination: end,
			travelMode:google.maps.TravelMode.DRIVING
		};
		var directionsDisplay = this.directionsDisplay;
		this.directionService.route(request, function(result, status){
			if (status == google.maps.DirectionsStatus.OK) {
				// document.getElementById("map-canvas").style.width = "400px";
				// document.getElementById("map-canvas").style.height = "500px";
     			directionsDisplay.setDirections(result);
     			// console.log(result.routes[0].legs[0].duration);
     			return false;
    		}
		});
	}
}

function calcRoute(e){
	m.calcRoute(document.forms["direction-form"]["origin"].value);
}