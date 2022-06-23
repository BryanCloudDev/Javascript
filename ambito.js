'use-strict';

let texto = 'hola mama soy una variable global';
let numero = 23;


function holaMama(saludo) {
    let hola_mundo = 'Soy una variable local';
    console.log(saludo + ' ' + typeof numero.toString() + ' ' + hola_mundo);
}

holaMama(texto);

//console.log(hola_mundo);//aca la palma la app, no es una variable local