// Used to validate user name and password
function validateForm() {
	var form = document.getElementById("loginform");
	var usr = document.getElementById('usr').value;
	var pswd = document.getElementById('pswd').value;

	// Not secure just for fun!
	var username = "admin";
	var password = "password123";

	if ((usr == username) && (pswd == password)) {
		form.reset();
		return true;
	} else {
		form.reset();
		document.getElementById('alert').innerHTML = "Incorrect Password";
		return false;
	}
}