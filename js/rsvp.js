var MAX_NUMBER_GUESTS = 4;

function addCritters(count){
	var i = 0;
	var critters 	= document.getElementsByClassName('roll');

	while(i < MAX_NUMBER_GUESTS) {
		if(i < count){
			critters[i].style.display = "inline-block";
		} else {
			critters[i].style.display = "none";
		}
		i++;
	}
}

function rsvpsubmit(){
	// var form 		= document.forms["rsvp-form"];
	// var attendee 	= form["name"].value;
	// var guests 		= form["guests"].value;
	// var number 		= document.getElementById("number").selectedIndex;
}
