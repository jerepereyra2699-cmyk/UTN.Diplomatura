function calcularPromedio (nota1,nota2){
    const promedio = (nota1 + nota2) / 2
    return promedio
}

let parcialUno = 10;
let parcialDos = 6;

let notafinal = calcularPromedio(parcialUno, parcialDos)

console.log(`Notas de historia. 1er nota: ${parcialUno}, 2da nota: ${parcialDos}. Y su promedio es de: ${notafinal}`)



