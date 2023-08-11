/** @format */

// Sign Up modal
var modal = document.getElementById("Signup");
var btn = document.getElementById("signupBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
	modal.style.display = "block";
};

span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

// Login modal
var modal1 = document.getElementById("Login");
var btn1 = document.getElementById("LoginBtn");
var span = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
	modal1.style.display = "block";
};

span.onclick = function () {
	modal1.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
};
