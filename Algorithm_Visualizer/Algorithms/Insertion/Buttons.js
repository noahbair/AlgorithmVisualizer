// Insert a node into the algorithm by value
function Insert() {
	var inp = parseInt(document.getElementById('insert_box').value);
	if (document.getElementById('insert_box').value === '') {
		// Nothing no value
	} else {
		insertion.Insert(inp);
	}
}

// Radnomize the data in the array (Used in testing)
function Random() {
	insertion.Random();
}

// Sort the data in the array using insertion sort
function Sort() {
	insertion.Sort();
}

// Allows the algorithm to iterate one time
function Step() {
	insertion.Step();
}

// Reset the root node and clear screen
function Reset() {
	if (status == 1) {
		// Nothing
	} else {
		setup();
	}
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