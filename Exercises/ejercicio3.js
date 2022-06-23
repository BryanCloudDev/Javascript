"use strict";

let start = parseInt(prompt("Inicio"));
let end = parseInt(prompt("Final"));
//mostrar numeros en un rango de numeros
document.write(`Entre ${start} y ${end} se encuentran: </br>`);

while (start <= end) {
	document.write(start + "</br>");
	start++;
}
