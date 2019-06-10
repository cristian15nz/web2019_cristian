/*
1. Hacer un scrpit que el usuario haga click 
  sobre un div y aparezca un mensaje diciendo 
  "Hola a todos"
*/

var nombre=document.querySelector("div#jose");

console.log(nombre);

nombre.addEventListener("click",function(){
    alert("hola a todos");
})


/*
2. Hacer un script que se haga click en un parrafo
   y le cambie el contenido por "contenido cambiado"
*/
var parrafo =document.querySelector("p");
parrafo.addEventListener("click",function (){
   parrafo.textContent="al contenido"
   
});


/*
3 Hacer un script que se haga click en un span
   Muestre un prompt para que el usuario digite su
   nombre, edad y telefono. Se debe mostrar esa 
   informacion por la consola.
*/

var span = document.querySelector("span");

span.addEventListener("click", function(){
var nombre = prompt("Digite su nombre");
var edad = prompt("Digite su edad");
var telefono = prompt("Digite su telefono");
var texto = nombre + " " + edad + " " + telefono;
texto.textContent = span;

console.log(nombre);
console.log(edad);
console.log(telefono);
});

/*
4. Hacer un script que el usuario haga doble click
    sobre un h1 y se muestre el contenido del h1
    en un alert.
    */

var h1 = document.querySelector("h1");
h1.addEventListener("dblclick", function(){
    alert(h1.textContent);
});


/*
5. Hacer un script que el usuario pase el mouse por 
   encima de un enlace y le cambie el color y fondo.
*/

var cambioColor = document.querySelector("a#cambioColor");

// Cuando el mouse entre
cambioColor.addEventListener("mouseover", function(){
    cambioColor.style.background="black";
    cambioColor.style.color="white";
    
});

// Cuando el mouse salga
cambioColor.addEventListener("mouseout", function(){
    cambioColor.style.background="red";
    cambioColor.style.color="blue";
    
});