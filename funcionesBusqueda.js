'use-strict';

let numero = 4;
let texto1 = 'Bienvenido al curso de JS curso';
let texto2 = 'es un buen curso la dvd';

// Encontrar el indice o primera conincidencia de una palabra o letra a buscar

let busqueda = texto1.indexOf('curso');//returns 14

// Encontrar el ultimo indice o conincidencia de una palabra o letra a buscar

let busqueda1 = texto1.lastIndexOf('curso');//returns 24

// Buscar texto en una cadena, es un alias de indexOf(), si el caracter
// o palabra a buscar no existe retornara un -1

let busqueda2 = texto1.search('curso');//returns 14

// Match nos retornara un array con las palabras que encuentre, podemos
// pasarle expersiones regulares para mejorar la busqueda

// let busqueda4 = texto1.match('curso');

let busqueda4 = texto1.match(/curso/g);//returns ['curso','curso']

//con substr podemos seleccionar piezas de string desde un inicio dado y un fin dado
// substr(14,19) es obsoleto pero aun funciona, en su lugar se usa ahora substring()

let busqueda5 = texto1.substring(14,19);//returns 'curso'

// con charAt() podemos seleccionar el index de una letra dada como parametro del String al cual
// se le aplica el metodo

let busqueda6 = texto1.charAt(11);// returns 'a'

// startsWith() nos permite verificar si un String empieza con cierta palabra o caracter dado
// nos devuelve true o false si se encuentra o no

let busqueda7 = texto1.startsWith('Bienvenido');// returns true

// Como el anterior nos permite ver si un String termina con cierto string/patron de 
// caracteres y si se encuentra o no

let busqueda8 = texto1.endsWith('curso');// returns true


// Includes nos permite ver si la palabra a buscar se encuentra dentro del string, 
// devolviendo true o false acordemente, es case sensitive
let busqueda9 = texto1.includes('JS');// returns true

console.log(busqueda9);