'use strict'

// DOM  - Docunment Object Model

//Obtiene elemento html
//var caja = document.getElementById("micaja").innerHTML;

function cambiaColor(color){
  caja.style.background = color;
}


//var caja = document.getElementById("micaja");

//QuerySelector accede a elementos como en css (# para id y . para clases)
var caja = document.querySelector("#micaja");

caja.innerHTML = "<h1>Texto editado desde javasctipt</h1>";

//Modificando estilos
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

//Agregando clases
caja.className = "hola hola2";


//Conseguir elementos por su etiqueta
  var todosLosDivs = document.getElementsByTagName('div');
  console.log(todosLosDivs);

 var contenidoEnTexto = todosLosDivs[1].textContent;
   console.log(contenidoEnTexto);


 var valor;

 for (valor in todosLosDivs) {

   if (typeof todosLosDivs[valor].textContent == 'string') {
     var parrafo = document.createElement("p");
     var texto = document.createTextNode(todosLosDivs[valor].textContent);
     parrafo.appendChild(texto);
     document.querySelector("#miseccion").appendChild(parrafo);
   }

 }


 //seleccion por classes

var divsRojos = document.getElementsByClassName('rojo');

//despliega arreglo con los divs de clase rojo
console.log(divsRojos);

divsRojos[0].style.background = "red";
divsRojos[1].style.background = "red";


var divsRojos2 = document.querySelectorAll(".rojo");
console.log(divsRojos2);
