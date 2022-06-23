"use-strict";

// FUNCIONES ANONIMAS

//es una funcion que no tiene nombre

//funcion anonima usando ES6

// let pelicula = name => `El nombre de la pelicula es ${name}`;

function sumame(n1, n2, sumaYmuestra, sumaPorDos) {
	let result = n1 + n2;
	sumaYmuestra(result);
	sumaPorDos(result);
}

sumame(
	5,
	7,
	dato => {
		console.log(`La suma es ${dato}`);
	},
	dato => {
		console.log(`La suma por 2 es ${dato * 2}`);
	}
);
