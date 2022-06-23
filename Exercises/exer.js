// const person = (name, lastName, age, country) => {
// 	return `${name} ${lastName} tiene ${age} y vive en ${country}`
// };

// let person1 = ['Alejandra','Emilia',23,'El Salvador'];

// let ale = person(...person1);

// console.log(ale);

// let a = 13;
// let b = 14;
// console.log(a,b);

// [a,b] = [b,a];

// console.log(a,b);

//CALLBACKS

// function calculator(n1,n2,suma,resta,multiplicacion,division) {
//     suma(n1,n2);
//     resta(n1,n2);
//     division(n1,n2);
//     multiplicacion(n1,n2);
// }

// calculator(
//     12,
//     34,
//     (n1,n2) => console.log(`La suma de ${n1} y ${n2} es ${n1 + n2}`),
//     (n1,n2) => console.log(`La resta de ${n1} y ${n2} es ${n1 - n2}`),
//     (n1,n2) => console.log(`La division de ${n1} y ${n2} es ${n1 / n2}`),
//     (n1,n2) => console.log(`La multiplicacion de ${n1} y ${n2} es ${n1 * n2}`)
// );

//TEXTO

let texto = 'lorem lorem lorem lorem lorem lorem lorem';

console.log(texto.concat(' pepito'));

let makeServerRequest = new Promise((resolve,reject) => {

});