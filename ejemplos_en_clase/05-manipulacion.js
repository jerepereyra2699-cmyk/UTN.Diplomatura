const titulo = document.querySelector("h1");

//console.log(titulo);

titulo.style.color = "red";

//claslist

titulo.classList.add("fondo"); //agrego lo que estsba en el archivo HTML O CSS

//seleccion por id 

const boton = document.getElementById("boton");

//console.log(boton);

const texto = document.getElementById("texto");

//console.log(texto);

boton.addEventListener("click", ()=>{
    texto.classList.toggle("invisible")
});

//.add: Agregar clases.
//.remove: elimina clases.
//toggle: alterna la presencia de una clase.
//.replace: reemplaza una clase por otra.
//.lenght: devuelve el numero de clases en el elemento.

const aclaracion = document.getElementById("aclaracion");

//console.log(aclaracion);

aclaracion.innerHTML = "<h1> Este es un nuevo texto desde el js </h1>"
//aclaracion.innerText = "Nuevo texto pero sin ponerle el h1"

