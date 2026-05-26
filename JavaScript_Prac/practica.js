//Ejercicio 1 

const producto = 'Laptop';
const precio = 60000;
const stock = false;

 console.log(`La ${producto} cuesta ${precio} y su disponibilidad es: ${stock}`);


// Ejercicio 2 

const metros = 100001;

if (metros <= 1000){
    console.log('El medio de transporte que va a utilizar es: A pie')
} 
else if (metros <= 10000){
console.log('el medio de transporte que va a utilizar es: La Bicileta')
}
else if (metros <= 30000){
console.log('el medio de transporte que va a utilizar es: El Colectivo')
}
else if (metros <= 100000){
console.log('el medio de transporte que va a utilizar es: El Auto')
}
else {
    console.log('El medio de transporte que va a utilizar es: El avion')
};

//Ejercicio 3

 const productos = ['Manzanas', 'Fideos', 'Carne', 'Leche', 'Harina', 'Huevos']

 for (let i = 0; i < productos.length; i++){
     console.log('No te olvides de comprar ' + productos[i]);



// Ejercicio 4

const numeros = [4, 9, 180, 7, 96, 102];

let mayor = numeros[0];

for (let i = 0; i < numeros.length; i++){
    console.log('Los numeros que va a comparar son: ' + numeros[i]);

    if(numeros[i] > mayor){
        mayor = numeros[i];

    }

}

console.log('El numero mayor es: '+ mayor);