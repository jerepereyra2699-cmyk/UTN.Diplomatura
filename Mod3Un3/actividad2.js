const texto = document.getElementById("Texto");

//console.log(texto);

const contar = document.getElementById("contador");

//console.log(contar);

texto.addEventListener("keyup", function(){
    contar.innerText = texto.value.length
    
})

