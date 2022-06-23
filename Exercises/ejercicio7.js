"use-strict";

//tabla de multiplicar de un numero introducido por pantalla

let number = parseInt(prompt("Numero a multiplicar"));

document.write(`La tabla del ${number}: </br></br>`)

for (let i = 1; i <= 10; i++) {
    document.write(`${i} X ${number} = ${number * i} </br>`);
}


//imprimir las tablas del 1 al 10

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10;j++) {
//         document.write(`${i} X ${j} = ${j * i} </br>`);
//     }
//     document.write(`</br>`);
// }