/*
1. Hacer un script que pida al 
usuario digite su nombre, edad y si esta casado
Imprimir esos valores en la pagina y por la consola.
*/
var nombre = prompt("Digite su nombre");
var edad = prompt("Digite su edad");
var esta_casado = prompt("¿Esta casado?");

document.write(`<h1>${nombre}</h1>`);
document.write(`<h1>${edad}</h1>`);
document.write(`<h1>${esta_casado}</h1>`);

console.log(nombre);
console.log(edad);
console.log(esta_casado);

/*
2. Hacer un script que tenga 4 variables 
(Usar comentarios multilinea)
pais_nombre;
pais_capital;
pais_habitantes;
pais_tiene_bandera;
Imprimir los datos por la consola.
*/
var pais_nombre = "Rep. Dom.";
var pais_capital = "Santo Domingo";
var pais_habitantes = 78945678921;
var pais_tiene_bandera = "si";

console.log(pais_nombre);
console.log(pais_capital);
console.log(pais_habitantes);
console.log(pais_tiene_bandera);


// 3. Hacer un script con tres variables 
// (Usar comentarios de 1 sola linea)
// (Esta informacion es suya)
// estudiante_nombre;
// estudiante_edad;
// estudiante_tiene_carro;
// Usar los tipos de dato string, number y boolean;
// Imprimir los valores por la pagina en un h1;

var estudiante_nombre = "Critian";
var estudiante_edad = "23";
var estudiante_tiene_carro = false;

document.write(`<h1>${estudiante_nombre}</h1>`);
document.write(`<h1>${estudiante_edad}</h1>`);
document.write(`<h1>${estudiante_tiene_carro}</h1>`);

/* 
4. Hacer un script que el usuario digite su nombre y edad
imprirlos dentro de un parrafo de la siguiente manera:

Te llamas __nombre__  y tienes _edad_ años;
*/
var nombre = prompt("Digita tu nombre");
var edad = prompt("Digita tu edad");

document.write(`<p>Te llamas ${nombre} y tienes ${edad} años</p>`);


/*
5. Dar la bienvenida a un usuario en Facebook usando template strings
*/
var nombre = prompt("Digita tu nombre");
var apellido = prompt("Digita tu apellido");
var ciudad = prompt("Digita tu ciudad");

// Con multiples document.write
document.write(`<h1>Bievenido ${nombre} ${apellido} a Facebook</h1>`);
document.write(`<h2>Actualmente vives en ${ciudad}</h2>`);
document.write(`<h3>Gracias por registrarte ${nombre} en nuestro sitio</h3>`);

// Con uno solo
document.write(`<h1>Bievenido ${nombre} ${apellido} a Facebook</h1>
                <h2>Actualmente vives en ${ciudad}</h2>
                <h3>Gracias por registrarte ${nombre} en nuestro sitio</h3>`);