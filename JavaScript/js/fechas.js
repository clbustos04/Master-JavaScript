'use strict'

var fecha = new Date();
console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth(); //El mes lo cuenta de cero
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoFecha = `
  El año es: ${year}
  El mes es: ${mes}
  El dia es: ${dia}
  La hora es: ${hora}
`;

console.log(textoFecha);
