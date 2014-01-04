var MAX_NUMBER_GUESTS = 4;

function changedNum(){
	var i = 0;
	var number 		= document.getElementById("number").selectedIndex;
	var critters 	= document.getElementsByClassName('roll');

	while(i < MAX_NUMBER_GUESTS){
		if(i < number){
			critters[i].style.display = "inline-block";
		}else{
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
