var drawingCanvas = document.getElementById('myDrawing');
// Check the element is in the DOM and the browser supports canvas
if(drawingCanvas.getContext) {
	// Initaliase a 2-dimensional drawing context
	var context = drawingCanvas.getContext('2d');
	//Canvas commands go here
	// Create the yellow face
var gradient = context.createRadialGradient(90,63,30,90,63,90);
gradient.addColorStop(0, '#FF0000');
gradient.addColorStop(1, '#660000');
//Create radial gradient box for picture frame;
context.fillStyle = gradient;
context.fillRect(15,0,160,140);
//Load the image object in JS, then apply to canvas onload
var myImage = new Image();
myImage.onload = function() {
context.drawImage(myImage, 30, 15, 130, 110);
}
myImage.src = "cocktail.jpg";
}