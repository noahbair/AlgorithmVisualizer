var avltree;
var Xval, Yval;

function setup() {
	var canvas = createCanvas(windowWidth - 100, windowHeight - 350);
	avltree = new AVLTree();
}

function draw() {
	background(255);
	Xval = width;
	Yval = height / 12;
	avltree.display();
}