var tree;
var Xval, Yval;

function setup() {
	var canvas = createCanvas(windowWidth - 100, windowHeight - 350);
	tree = new Tree();
}

function draw() {
	background(255);
	Xval = width;
	Yval = height / 12;
	tree.display();
}