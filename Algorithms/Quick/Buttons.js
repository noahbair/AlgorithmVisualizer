// Insert a node into the algorithm by value
function Insert() {
	var inp = parseInt(document.getElementById('insert_box').value);
	if (document.getElementById('insert_box').value === '') {
		// Nothing no value
	} else {
		quick.Insert(inp);
	}
}

// Radnomize the data in the array (Used in testing)
function Random() {
	quick.Random();
}

// Sort the data in the array using quick sort
function Sort() {
	quick.Sort();
}

// Allows the algorithm to iterate one time
function Step() {
	alert("Iterate: Under Development!");
	// quick.Step(); 
}

// Reset the root node and clear screen
function Reset() {
	if (status == 1) { // << Requires sort to finish before clear
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