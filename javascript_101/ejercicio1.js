/* Ejercicio 1:
Hacer un script que el usuario 
digite su nombre y edad e imprimir 
el nombre en un <h1> y la edad en un <p>.
*/

var nombre = prompt("Digite su nombre");
var edad = prompt("Digite su edad");

document.write("<h1>nombre</h1>");
document.write("<p>edad</p>");

document.write(`<h1>${nombre}</h1>`);
document.write(`<p>${edad}</p>`);

// 2. Hacer que el usuario digite 
// su ciudad, barrio y direccion
// imprimirlos en un <div>
