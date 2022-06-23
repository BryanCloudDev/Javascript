"use-strict";

//mostrar todos los numeros divisores de un numero introducido por pantalla

let number = parseInt(prompt("Numero a verificar:"));

document.write(`<h1>Los numeros divisores de ${number} son:</h1> </br></br>`);

for (let i = 1; i <= number; i++) {
	if (number % i == 0) {
		document.write(`El numero ${i} es divisor de ${number}</br>`);
	}
}
