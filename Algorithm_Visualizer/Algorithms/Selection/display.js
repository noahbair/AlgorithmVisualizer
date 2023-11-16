var select;
var values = [];		// << The array that is used to store the user data
var w = 40;				// << The specific width of each of the bars on screen
var states = [];		// << Determines the coloring of the bar given their state
var step = 0; 			// << Used to determine if user wants to iterate one step
var clear = 0;			// << Used to prevent user from clear while sort in progress

function setup() {
	var canvas = createCanvas(windowWidth - 100, windowHeight - 350);
	select = new Select();
	values = [];
	states = [];
}

function draw() {
	background(255);
	select.display();
}