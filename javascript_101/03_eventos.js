// Seleccionar la etiqueta
var titulo1 = document.querySelector("h1");

console.log(titulo1);

// Registrar el evento al elemento
titulo1.addEventListener("click", function(){
    open("https://www.google.com");
});


/* Seleccionar el elemento */
var parrafoMostrar = document.querySelector("p#mostrar");
var divContenido = document.querySelector("#contenido");

// Registrar el evento al elemento
parrafoMostrar.addEventListener("click", function(){
    // divContenido.style.display = "none";
    var nombre = prompt("Digite su nombre");
    
    // document.write(`<p>${nombre}</p>`);
    divContenido.textContent = nombre;
});
