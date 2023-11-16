function Insert() {
	var inp = parseInt(document.getElementById('insert_box').value);
	var popup = document.getElementById("insert");

	if (document.getElementById('insert_box').value === '') {
		Insert_Alert();
	} else {
		array.push(inp);
	}
}

// Delete an element from the array by index
function Delete() {
	var del = parseInt(document.getElementById('delete_box').value);
	var popup = document.getElementById("delete");

	if (document.getElementById('delete_box').value === '') {
		popup.classList.toggle("show");
	} else {
		array.pop(del);
	}
}

// Reset the elements and clear screen
function Reset() {
	setup();
}

// Allow the user to close the instructions
function Close() {
	var close = document.getElementById("popup");
	close.style.display = ("none");
}

// Allow the user to open the instructions
function Open() {
	var open = document.getElementById("popup");
	open.style.display = "";
}

function Insert_Alert() {
	var popup = document.getElementById("insert");
	popup.classList.toggle("show");
}

function togglePopup() {
	document.getElementById("popup-1").classList.toggle("active");
}