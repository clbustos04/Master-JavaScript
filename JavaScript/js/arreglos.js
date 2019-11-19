'use strict'

//Arreglos

var nombres = ["Claudio","Camila","Alonso","Amparo", 59, true]; //distintos tipos de datos


//Como Objetos
var lenguajes = new Array("php","java","angular","react");


//Recorrer array con cifro for

document.write("<h1>Lenguajes Modernos de Programación</h1>");
document.write("<ul>");

for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>" );
}

document.write("</ul>");


//Ciclo foreach
document.write("<h1>Lenguajes Modernos de Programación</h1>");
document.write("<ul>");

//forEach con funcion de callback recibe 3 elementos
lenguajes.forEach((elemento, index, arr)=>{
    document.write("<li>" + index + " - " + elemento + "</li>" );
    console.log(arr);
});

//Parametros index y arr son opcionsles
//Index lleva el indice y arr lleva el arreglo puro (los nombres pueden ser a elección)

document.write("</ul>");


document.write("<h1>Lenguajes Modernos de Programación</h1>");
document.write("<ul>");

//forEach con funcion de callback solo con el primer parametro (elemento)
lenguajes.forEach((elemento)=>{
    document.write("<li>" + elemento + "</li>" );
});

//Parametros index y arr son opcionales
document.write("</ul>");
