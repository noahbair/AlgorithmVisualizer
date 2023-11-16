// Reference: https://www.tutorialspoint.com/AVL-Tree-class-in-Javascript

class AVLTree {
	constructor() {
		this.root = null;
	}

	Insert(data) {
		if (data != null && data === parseInt(data)) { // << Requires Integer
			var node = new Node(data);
			if (this.root === null) {
				this.root = node;
			} else {
				this.root.insertHelper(this.root, node);
			}
		}
	}

	display() {
		translate(Xval / 2, 50);
		if (this.root != null) {
			Xval /= 2;
			this.root.show();
		}
	}
}

class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}

	getBalanceFactor(node) {
		return this.getHeight(node.left) - this.getHeight(node.right);
	}

	getHeight(node) {
		var height = 0;
		if (node === null || typeof node == "undefined") {
			height = -1;
		} else {
			height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
		}
		return height;
	}

	insertHelper(root, node) {
		if (root === null) {
			root = node;
			console.log("Debug Null")
		} else if (node.data < root.data) {
			console.log("Debug 1 : " + node.data + " | " + node.left + " | " + node.right + " " + root.data + " | " + root.left + " | " + root.right);
			root.left = this.insertHelper(root.left, node);
			if (root.left !== null && this.getBalanceFactor(root) > 1) {
				if (node.data > root.left.data) {
					root = this.rotationLL(root);
				} else {
					console.log("Here");
					root = this.rotationLR(root);
				}
			}
		} else if (node.data > root.data) {
			console.log("Debug 2 : " + node.data + " | " + node.left + " | " + node.right + " | " + root.data + " | " + root.left + " | " + root.right);
			root.right = this.insertHelper(root.right, node);
			if (root.right !== null && this.getBalanceFactor(root) < -1) {
				if (node.data > root.right.data) {
					root = this.rotationRR(root);
				} else {
					root = this.rotationRL(root);
				}
			}
		}
		console.log("Return: " + root.data);
		return root;
	}

	rotationLL(node) {
		let tmp = node.left;
		node.left = tmp.right;
		tmp.right = node;
		return tmp;
	}

	rotationRR(node) {
		let tmp = node.right;
		node.right = tmp.left; // << TODO: Issues Here! 
		tmp.left = node;
		return tmp;
	}

	rotationLR(node) {
		node.left = this.rotationRR(node.left);
		return this.rotationLL(node);
	}

	rotationRL(node) {
		node.right = this.rotationLL(node.right);
		return this.rotationRR(node);
	}

	show() {

		fill(255);
		textSize(18)
		textAlign(CENTER);
		stroke(0);
		ellipse(0, -25, 30);
		fill(0);
		text(this.data, 0, -20);

		// Handle drawing the left child on screen
		if (this.left != null) {
			push();
			stroke(0);
			line(0, -10, -Xval / 2 + 5, Yval - 25)
			translate(-Xval / 2 + 2, Yval);
			Xval /= 2;
			this.left.show();
			Xval *= 2;
			pop();
		}

		// Handle drawing the right child on screen
		if (this.right != null) {
			push();
			stroke(0);
			line(0, -10, Xval / 2 - 5, Yval - 25)
			translate(Xval / 2 - 2, Yval);
			Xval /= 2;
			this.right.show();
			Xval *= 2;
			pop();
		}
	}
}