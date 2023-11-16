var bubble;
var values = [];		// << The array that is used to store the user data
var step = 0; 			// << Used to determine if user wants to iterate one step
var clear = 0;			// << Used to prevent user from clear while sort in progress
var states = []; 		// << Used to set the color of the bars at given times

function setup() {
	var canvas = createCanvas(windowWidth - 100, windowHeight - 350);
	bubble = new Bubble();
	values = [];
	states = [];
}

function draw() {
	background(255);
	bubble.display();
}