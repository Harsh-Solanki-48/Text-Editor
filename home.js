let color1 = document.querySelector(".color1");
var fontSize1 = document.querySelector(".fontSize1");

document.getElementById("editor1").innerHTML =
  localStorage["save"]; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["save"] = document.getElementById("editor1").innerHTML; // content div
}, 1000);

function f1() {
	
	document.getElementById("editor1").style.fontWeight = "bold";
}

function f2() {
	
	document.getElementById("editor1").style.fontStyle = "italic";
}

function f3() {
	
	document.getElementById("editor1").style.textAlign = "left";
}

function f4() {
	
	document.getElementById("editor1").style.textAlign = "center";
}

function f5() {
	
	document.getElementById("editor1").style.textAlign = "right";
}

function f6() {
	
	document.getElementById("editor1").style.textTransform = "uppercase";
}

function f7() {
	
	document.getElementById("editor1").style.textTransform = "lowercase";
}

function f8() {
	
	document.getElementById("editor1").style.textTransform = "capitalize";
}

function f9() {

	document.getElementById("editor1").style.fontWeight = "normal";
	document.getElementById("editor1").style.textAlign = "left";
	document.getElementById("editor1").style.fontStyle = "normal";
	document.getElementById("editor1").style.textTransform = "capitalize";
	localStorage["save"] = "";
	document.getElementById("editor1").innerHTML = localStorage["save"];

}

function f10() {
	document.getElementById("editor1").style.fontWeight = "normal";
	document.getElementById("editor1").style.textAlign = "left";
	document.getElementById("editor1").style.fontStyle = "normal";
}

color1.addEventListener("input", () => document.getElementById("editor1").style.color = color1.value);

function myFunction() {
	document.getElementById("editor1").style.fontSize = String(fontSize1.value) + "px" ;
  }

