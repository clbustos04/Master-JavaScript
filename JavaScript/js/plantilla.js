'use strict'



var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");

//Plantillas de texto e interpolacion de variables (nuevo en java script)
//`dentro de estas comillas va html y variables java script con sigo $ y {}`
var texto = `
   <h1>Hola que tal </h1>
   <h3>Mi nombre es: ${nombre} </h3>
   <h3>Mi apellido es: ${apellido} </h3>
`;

document.write(texto);
