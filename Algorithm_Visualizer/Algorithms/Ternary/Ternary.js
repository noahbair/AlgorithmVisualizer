/**
 * TREE: This class handles the tree object which is composed of a root. Inside Insert (), 
 * Delete (), Remove (), Display () and Search () are handled. Each function has comments
 * associated with it to explain the purpose behind the particular code.
 */
class Tree {
    constructor() {
        this.root = null;
        this.leftSubtree = 0;
        this.rightSubtree = 0;

    }

    /**
     * INSERT: This function handles assigning the root node. If there is not a
     * root node, one is created. Add () is then called to handle the
     * determination processes of assigning child nodes to form the tree.
     * 
     * @param data: User passed value to be added to the tree
     */
    Insert(data) {
        if (data != null && data === parseInt(data)) { // << Requires Integer
            var node = new Node(data);
            if (this.root == null) {
                this.root = node;
            } else {
                this.root.Add(node);
            }
        }
    }

    /**
     * DELETE: This function handles removing a node from the tree. This works
     * as a helper function which allows the user to pass a value to be removed.
     * Remove () is then called to handle the process of locating the node to be
     * removed.
     * 
     * @param data: User passed value to be removed from the tree
     */
    Delete(data) {
        this.root = this.Remove(this.root, data);
    }
    
    incrementSubtree(node) {
    	var node = new Node();
        node.subtree = node.subtree - 1;
        node.subtree = node.subtree + 1;
    }

    decrementSubtree(node) {
    	var node = new Node();
        node.subtree = node.subtree - 1;
    }
    
    /**
     * REMOVE: This functions handles determining the location of a node to be
     * removed from the tree. This function is called from Delete () where the
     * user passes the value to be removed.
     * 
     * @param root: The root node used to in reference to child nodes
     * @param data: User passed value to be removed from the tree
     */
    Remove (root, data) {
    	
    	if (this.root == null) {
    		// Nothing
    	}

        this.decrementSubtree(this.data);

        if (this.data == data) {
        	if (this.middle != null) {
        		this.middle = this.middle.Remove(data);
        	} else {
        		if (this.left == null && this.right == null) {
                    return null;
                }

                this.leftSubtree = -1;
                this.rightSubtree = -1;

                if (this.left != null) {
                    this.leftSubtree = this.left.subtree;
                }

                if (this.right != null) {
                    this.rightSubtree = this.right.subtree;
                }

                if (leftSubtree - rightSubtree > 0) {
                	this.Insert(this.left, this.right);
                    return this.left;
                } else {
                	this.Insert(this.right, this.left);
                    return this.right;
                }
            }
        } else if (this.data < data) {
            this.right = this.right.Remove(data);
        } else if (this.data > data) {
            this.left = this.left.Remove(data);
        }
        return this.data;
    }
  
    /**
     * DISPLAY: This calls show () in the case of a root node. The working
     * function translate () is used to allow scaling.
     */
    display() {
        translate(width / 2, Yval);
        if (this.root != null) {
            Xval /= 2;
            this.root.show();
        }
    }
}

/**
 * NODE: This class handles the node object which is composed of left, right,
 * and data parameters. Specifically this class handles adding and showing nodes
 * on the screen.
 * 
 * @param data: User passed value to be assigned to the node object
 */
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.middle = null; // << Added This!
        this.data = data;
        this.subtree = 0;
    }
    
    /**
     * ADD: This function handles adding a node to the tree. This function is
     * called above from Insert () where the user passes a value to be added.
     * The node is compared to the root node and if smaller it is placed on the
     * left otherwise if it is larger it is placed on the right.
     * 
     * @param node: User passed value to be added to the tree
     */
    Add(node) {
        if (node == null) {
            return;
        }

        var tree = new Tree();
        tree.incrementSubtree(node);

        if (node.data < this.data) {
            if (this.left == null) {
                this.left = node;
            } else {
                this.left.Add(node);
            }
        } else if (node.data > this.data) {
            if (this.right == null) {
                this.right = node;
            } else {
                this.right.Add(node);
            }
        } else {
            if (this.middle == null) {
                this.middle = node;
            } else {
                this.middle.Add(node);
            }
        }

    }
    
    /**
     * SHOW: This handles drawing the node objects on screen. This function is
     * called from Display () in the case of a root node. Push () is a working
     * function which allows you to create a new drawing state. Pop () allows
     * you to restore the original drawing state. This is useful in the case you
     * want to add shapes to an existing drawing.
     */
    show() {
        fill(255);
        textSize(18)
        textAlign(CENTER);
        stroke(0);
        ellipse(0, -25, 30)
        fill(0);
        text(this.data, 0, -20);
        
        // Handle drawing the left child on screen
        if (this.left != null) {
            push();
            stroke(0);
            line(0, -10, -Xval / 2 + 5, Yval - 25)
            translate(-Xval / 2, Yval);
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
            translate(Xval / 2, Yval);
            Xval /= 2;
            this.right.show();
            Xval *= 2;
            pop();
        }
    }
}