'use-strict';

function porConsola(num1,num2) {
    console.log('Suma ' + (num1 + num2));
    console.log('Resta ' + (num1 - num2));
    console.log('Division ' + (num1 / num2));
    console.log('Multiplicacion ' + (num1 * num2));
}

function porWeb(num1,num2) {
    document.write('Suma ' + (num1 + num2)+ '<br>');
    document.write('Resta ' + (num1 - num2)+ '<br>');
    document.write('Division ' + (num1 / num2)+ '<br>');
    document.write('Multiplicacion ' + (num1 * num2)+ '<br>');
}

function calculadora(num1,num2, show = false) {
    if(!show) {
        porConsola(num1,num2);
    } else {
        porWeb(num1,num2);
    }
}

calculadora(1,2,true);