"use-strict";

let num = 0;
let media;
let suma = 0;
let i = 1;

//media y suma
while (num >= 0) {
	num = parseInt(prompt("Ingrese un numero: ",-1));
	if (num >= 0) {
		suma += num;
		media = suma / i;
	}
	i++;
}

alert(`La suma de los numeros es ${suma} y la media es de ${media}`);
