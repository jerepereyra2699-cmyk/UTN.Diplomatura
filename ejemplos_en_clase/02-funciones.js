function calcularDescuento (precio,descuento){
   const descuent = (precio*descuento)/100
   const precioDescuento = precio - descuent
   return precioDescuento

}

const precioPrenda = 30000;
const descuentoHoy = 40;

const precioFinal = calcularDescuento(precioPrenda, descuentoHoy)


console.log(`la prenda queda con este precio ${precioFinal}`)