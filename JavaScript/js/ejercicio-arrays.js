'use strict'

var numeros = [];


document.write("<h1>Números del arreglo</h1>");
document.write("<ul>");

for (var i = 0; i < 6; i++) {
  var number = prompt("Ingrese número");
  numeros.push(number);
  document.write("<li>" + numeros[i] + "</li>" );
  console.log(number);
}

document.write("</ul>");



numeros.sort();

document.write("<h1>Números del arreglo ordenados</h1>");
document.write("<ul>");
for (var i = 0; i < numeros.length; i++) {
  document.write("<li>" + numeros[i] + "</li>" );
  console.log(number);
}

document.write("</ul>");


numeros.reverse();

document.write("<h1>Números del arreglo Invertidos  </h1>");
document.write("<ul>");
for (var i = 0; i < numeros.length; i++) {
  document.write("<li>" + numeros[i] + "</li>" );
  console.log(number);
}

document.write("</ul>");

alert("El arreglo tiene: " + numeros.length + " " + "elementos")


var dato = prompt("Ingrese valor a buscar");

var numEnc = numeros.find(numero => numero == dato);
   console.log(numEnc);

var indEnc = numeros.findIndex(numero => numero == dato);
  console.log(indEnc);

if (indEnc == -1) {
   alert("Valor no encontrado")
}else{
  alert("El valor es: " + numEnc + " " + "y está en el índice: " + indEnc)
}
