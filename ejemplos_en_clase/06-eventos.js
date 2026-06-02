const conteneder = document.querySelector(".contenedor");

//console.log(conteneder);

const boton = document.getElementById("btn");

//console.log(boton);

conteneder.addEventListener("mouseover", function(){
    conteneder.style.backgroundColor = "orange"
})

conteneder.addEventListener("mouseout", function(){
    conteneder.style.backgroundColor = "red"
})

boton.addEventListener("click", function(){
    if (conteneder.style.display == ""){
        conteneder.style.display = "none"
    } else {
        conteneder.style.display = ""
    }
})