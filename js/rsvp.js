var MAX_NUMBER_GUESTS = 5;

function changedNum(){
	var selectBox = document.getElementById("number");
	var number = selectBox.options[selectBox.selectedIndex].value;
	var critters = document.getElementsByClassName('roll');
	console.log(critters);
	// var $critters = $(" li.roll" );
	var i = 1;

	while(i < MAX_NUMBER_GUESTS){

		if(i < number){
			critters[i-1].style.display = "inline-block";
		}else{
			critters[i-1].style.display = "none";
		}
		i++;
	}
}
