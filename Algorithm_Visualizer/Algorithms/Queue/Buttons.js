// Insert an element into the queue by value
function Insert() {
	var inp = parseInt(document.getElementById('insert_box').value);
	if (document.getElementById('insert_box').value === '') {
		// Nothing no value
	} else {
		queue.push(inp);
	}
}

// Delete the element from the end of the queue
function Delete() {
	queue.pop();
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