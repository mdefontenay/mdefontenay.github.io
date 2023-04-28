let s1 = document.getElementById("s1")
let s2 = document.getElementById("s2")
let s3 = document.getElementById("s3")
let s4 = document.getElementById("s4")
let s5 = document.getElementById("s5")

let outfit = document.getElementsByClassName("outfit")

function hide() {
	for (i = 0; i < 5; i++) {
		outfit[i].style.display = "none";
	};
};

s1.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide()
	document.getElementById("o1").style.display = "block";
};
s2.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide()
	document.getElementById("o2").style.display = "block";
};
s3.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide()
	document.getElementById("o3").style.display = "block";
};
s4.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide()
	document.getElementById("o4").style.display = "block";
};
s5.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide()
	document.getElementById("o5").style.display = "block";
};

let strip = document.getElementById("strip-button");
strip.onclick = function() {
	hide()
	document.getElementById("body").style.display = "block";
};