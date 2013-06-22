function Map(){
	this.directionService = new google.maps.DirectionsService();
}
Map.prototype = {
	init: function (){
		var mapOptions = {
	        center: new google.maps.LatLng(-34.397, 150.644),
	        zoom: 8,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    this.map = new google.maps.Map(document.getElementById("map-canvas"),
        	mapOptions);
	},
	initDirector : function(){
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		this.directionsDisplay.setMap(this.map);
	},
	calcRoute : function(){
		var start = "Orange County";
		var end ="Bakersfield";
		var request = {
			origin: start,
			destination: end,
			travelMode:google.maps.TravelMode.DRIVING
		};
		var directionsDisplay = this.directionsDisplay;
		this.directionService.route(request, function(result, status){
			if (status == google.maps.DirectionsStatus.OK) {
     			directionsDisplay.setDirections(result);
    		}
		});
	}
}

//google.maps.event.addDomListener(window, 'load', initMap);

