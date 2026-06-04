
//metodo map 
const numeros = [1, 3, 8, 20];

const dobles = numeros.map(function(num){
return num * 2

});

// version simplificada
const dobles = numeros.map(num => num  * 2)

console.log(dobles);


//metodo filter 

const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = Numeros.filter(num => num % 2 === 0);

console.log(pares);


//metodo find

const numeros = [3, 8, 56, 121, 11, 47];
const encontrar = numeros.find(num => num > 12);

console.log(encontrar);

//metodo sort

const frutas = ["guineas", "bananas", "manzanas"];

frutas.sort();

console.log(frutas);
