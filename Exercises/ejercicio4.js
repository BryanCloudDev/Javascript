"use-strict";

//mostrar numeros impares enre 2 numeros introducidos por teclado

let start = parseInt(prompt("Inicio"));
let end = parseInt(prompt("Final"));

document.write(`Los numeros impares entre ${start} y ${end} son: </br>`);

while (start <= end) {
	if (start % 2 != 0) {
		document.write(`${start}</br>`);
	}
	start++;
}
