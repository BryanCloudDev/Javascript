// 'use strict'

//que es el use strict?

//el modo estricto entr cuando nosotros inicializamos una variable sin usar var o let antes,
// sin el modo estricto lo siguiente funcionara:

// mama = 'geliz';

// console.log(mama);

//pero si aregamos el modo estricto con 'use-strict', obtendremos un error al tratar de acceder a la
//variable

//si se usa fuera de funciones se aplicara de forma global, si se usa en una funcion se aplicara en ese ambito local solamente

// let persona;
// let nacimiento;

persona2 = 'Alexander';

function informacion (){
    'use strict';
    let persona = 'Bryan';
    nacimiento = '1999';
    console.log(`${persona} nacio en ${nacimiento}`);
}

informacion();