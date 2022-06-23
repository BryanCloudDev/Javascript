"use-strict";

let num1 = parseInt(prompt("Numero 1"));
let num2 = parseInt(prompt("Numero 2"));

while (num1 <= 0 || num2 <= 0 || Number.isNaN(num1) || Number.isNaN(num2)) {
	if (num1 <= 0 || Number.isNaN(num1)) {
		num1 = parseInt(prompt("Numero 1 tiene que ser mayor a 0 y debe ser un numero"));
	} else if (num2 <= 0 || Number.isNaN(num2)) {
		num2 = parseInt(prompt("Numero 2 tiene que ser mayor a 0  y debe ser un numero"));
	}
}

if (num1 > num2) {
	alert(`Numero 1: ${num1} es mayor`);
	alert(`Numero 2: ${num2} es menor`);
} else if (num1 < num2) {
	alert(`Numero 2: ${num2} es mayor`);
	alert(`Numero 1: ${num1} es menor`);
} else {
	alert(`los numeros ${num1} y ${num2} son iguales`);
}
