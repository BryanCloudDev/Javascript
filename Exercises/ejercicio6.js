"use-strict";

//ver si un numero es par o impar

let number = parseInt(prompt("Numero a revisar"));

while (isNaN(number)) {
	number = parseInt(prompt("Debe de ser un numero"));
}

if (number % 2 == 0) {
	document.write(`El numero ${number} es par`);
} else {
	document.write(`El numero ${number} es impar`);
}
