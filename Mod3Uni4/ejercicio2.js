const producto = {
id: 123,
nombre: "Auriculares inalámbricos",
precio: 120000,
stock: 25,
categoria: "Electrónica"
};

//console.log(producto);

const {nombre,precio,stock,categoria} = producto;

console.log(`el nombre del producto es: ${nombre}, tiene un precio de: ${precio}, el stock disponible es de: ${stock} y pertenece a la categoria de: ${categoria}`);
