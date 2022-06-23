'use-strict';

//calculadora

let operation = prompt('Que deseas hacer?\n\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir');
let number1 = parseInt(prompt('Numero 1'));
let number2 = parseInt(prompt('Numero 2'));
let result;
let operacion;

while(isNaN(number1) || isNaN(number2)){
    if(isNaN(number1)){
        number1 = parseInt(prompt('Asegurese que numero 1 sea un numero'));

    } else {
        number2 = parseInt(prompt('Asegurese que numero 2 sea un numero'));
    }
}

switch (operation) {
    case '1' :
        result = number1 + number2;
        operacion = 'suma';
        break
    case '2':
        result = number1 - number2;
        operacion = 'resta';
        break
    case '3' :
        result = number1 * number2;
        operacion = 'multiplicacion';
        break
    case '4' :
        result = number1 / number2;
        operacion = 'division';
        break
    default:
        result = 'Porfavor selecciona una de las opciones';
    break;
}

document.write(`La operacion ${operacion} de ${number1} y ${number2} es ${result}`);

