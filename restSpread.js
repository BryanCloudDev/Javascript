'use-strict';

//operador rest
// function name (nombre, apellido, ...otros){
//     console.log(otros);
// }

// name('bryan','portillo',1,2,3,4,5);

// operador spread

// function name(info) {
//     console.log(info);
//     console.log(info);
// }

// let data = [1,2,3,4,5,6];

// name(...data);

//REST
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas) {
    console.log(fruta1);
    console.log(fruta2);
    console.log(restoDeFrutas);
}

// listadoFrutas('Mango', 'Papaya', 'Melon', 'Avocado');

//SPREAD
//co este parametro podemos pasar un array por argumento y donde definimos la funcion
//cada posicion del array ocupara un lugar por cada parametro de la definicion.

let frutas = ['Mango', 'Papaya', 'Melon', 'Avocado'];
listadoFrutas(...frutas);