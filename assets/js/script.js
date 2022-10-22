let input = document.getElementById("loopInput");
let output = document.getElementById("loopOutput");
let displayInput = document.getElementById("inputNumber");

let loopArray = [];

let input2 = document.getElementById("lo0pInput");
let output2 = document.getElementById("lo0pOutput");
let displayInput2 = document.getElementById("inputNumber2");

let lo0pArray = [];

let l = 0;

function looop() {
	// for fügt immer die Anzahl "o" hinzu wie die neue Zahl darstellt

	// for (let l = 0; l < input.value; l++) {
	//     loopArray.push(o);
	//     console.log(o);
	// }
	output.innerHTML = "";
	for (let l = 1; l < input.value; l++) {
		loopArray.push("o");
		displayInput.innerHTML = l;
	}

	output.innerHTML = "L" + loopArray.join("") + "p";
	loopArray = [];

	// verstehe nicht, warum es funktioniert, auch wenn ich die zahl manuell eingebe

	// while (l < input.value) {
	// 	l++;
	// 	loopArray.push("o");
	// 	output.innerHTML = "L" + loopArray.join("") + "p";
	// }
	// Löschen mit pop() und if else versucht, aber keine Logik gefunden
}
// Der funktioniert nicht
// function reset() {
// 	output.innerHTML = "";
// }
function lo0op() {
	if (input2.value % 2 === 0) {
		output2.innerHTML = "";

		for (let l = 0; l < input2.value; l++) {
			lo0pArray.push("o");
		}

		output2.innerHTML = "L" + lo0pArray.join("") + "p";
		lo0pArray = [];
	} else {
		output2.innerHTML = "";

		for (let l = 0; l < input2.value; l++) {
			console.log(l);
			if (l % 2 === 0) {
				lo0pArray.push("o");
			} else {
				lo0pArray.push("o".fontcolor("#D70014"));
			}
		}

		output2.innerHTML = "L" + lo0pArray.join("") + "p";
		lo0pArray = [];
	}
	if (input2.value <= 0) {
		output2.innerHTML="Bitte eine Zahl größer als 0 eingeben"
	}
}
