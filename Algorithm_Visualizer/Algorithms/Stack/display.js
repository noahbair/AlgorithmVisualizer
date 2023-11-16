var stack;
var Xval, Yval;
var values = [];

function setup() {
	var canvas = createCanvas(windowWidth - 100, windowHeight - 350);
	stack = new Stack();
	values = [];
}

function draw() {
	background(255);
	Xval = width;
	Yval = height / 12;
	stack.display();
}