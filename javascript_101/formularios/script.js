// Seleccionar los elementos
var correo = document.querySelector("input#correo");
var contrasena = document.querySelector("input#contrasena");
var div = document.querySelector("div#contenido");
var iniciar = document.querySelector("button#iniciar");

console.log(correo);
console.log(contrasena);

// Agregarle el evento al elemento
correo.addEventListener("keyup", function(){
    //div.textContent = correo.value;
});


// Agregarle el evento al elemento
correo.addEventListener("blur", function(){
    //alert(correo.value);
});


// Agregarle el evento al boton
iniciar.addEventListener("click", function(){
    div.textContent = `Bienvenido ${correo.value}`;
});