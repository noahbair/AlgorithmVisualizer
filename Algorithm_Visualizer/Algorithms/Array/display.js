var array;
var Xval, Yval;
var values = [];

function setup() {
	var canvas = createCanvas(windowWidth - 100, windowHeight - 350);
	array = new Array();
	values = [];
}

function draw() {
	background(255);
	Xval = width;
	Yval = height / 12;
	array.display();
}