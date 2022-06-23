'use-strict';

// metodos para transformar texto

let numero = 4;
let texto1 = 'Bienvenido al curso de JS';
let texto2 = 'es un buen curso la dvd';
let arr = [1,2,3,4,5,6];

// Convertir un numero a string
console.log(typeof numero.toString());

// Convertir un string a mayusculas
console.log(texto1.toUpperCase());

// Convertir un string a minusculas
console.log(texto1.toLowerCase());

//calcular longitud de un texto o un array
console.log(texto1.length);
console.log(arr.length);

// Concatenar

// asi 
console.log(texto1 + ' ' + texto2);

//o

console.log(texto1.concat(' ' + texto2));
