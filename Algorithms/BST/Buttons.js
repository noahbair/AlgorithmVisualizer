// Insert a node into the tree by value
function Insert() {
	var inp = parseInt(document.getElementById('insert_box').value);
	if (document.getElementById('insert_box').value === '') {
		// Nothing no value
	} else {
		tree.Insert(inp);
	}
}

// Delete a node from the tree by value
function Delete() {
	var del = parseInt(document.getElementById('delete_box').value);
	if (document.getElementById('delete_box').value === '') {
		// Nothing no value
	} else {
		tree.Delete(del);
	}
}

// Reset the root node and clear screen
function Reset() {
	setup();
}

// Allow the user to close the instructions
function Close() {
	var close = document.getElementById("popup");
	close.style.display = "none";
}

// Allow the user to open the instructions
function Open() {
	var open = document.getElementById("popup");
	open.style.display = "";
}