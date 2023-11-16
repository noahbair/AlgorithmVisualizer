// Insert an element into the stack by value
function Insert() {
	var inp = parseInt(document.getElementById('insert_box').value);
	if (document.getElementById('insert_box').value === '') {
		// Nothing no value
	} else {
		stack.push(inp);
	}
}

// Delete the element at the top of the stack
function Delete() {
	stack.pop();
}

// Reset the elements and clear screen
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