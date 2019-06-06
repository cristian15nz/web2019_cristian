/* Selecionar el parrafo */
var mi_parrafo = document.querySelector("p");

console.log(mi_parrafo);
console.log(mi_parrafo.id);
console.log(mi_parrafo.name);
console.log(mi_parrafo.tagName);
console.log(mi_parrafo.textContent);
console.log(mi_parrafo.innerHTML);
console.log(mi_parrafo.style);

// Cambiar valores
mi_parrafo.textContent = "Hola mundo";
mi_parrafo.id = "nuevo";

// Estilo al parrafo
mi_parrafo.style.color = "white";
mi_parrafo.style.backgroundColor = "dodgerblue";
mi_parrafo.style.padding = "10px";
mi_parrafo.style.margin = "25px";
mi_parrafo.style.fontSize = "25px";
mi_parrafo.style.fontFamily = "Arial";
mi_parrafo.style.border = "solid 5px black";
