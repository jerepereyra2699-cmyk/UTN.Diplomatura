const novedad = {
    titulo: "Nuevo producto disponible",
    subtitulo: "conoce las increibles caracteristicas de nuestro lanzamineto",
    cuerpo: "Estamos emocionados de anunciar el lanzamineto de nuestro nuevo dispositivo"

}; 

console.log(novedad);
console.log(novedad.titulo)

// destructuracion del objeto novedad 

const {titulo, subtitulo, cuerpo} = novedad;

console.log(subtitulo);