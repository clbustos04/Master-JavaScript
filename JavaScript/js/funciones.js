'use strict'

//Parametros de tipo Rest y Spread

//Parametros Rest, devuelve el resto parametros en un arreglo (pera, sandia, melon)
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
  console.log("fruta1: " + fruta1);
  console.log("fruta2: " + fruta2);
  //console.log(resto_de_frutas);
}

listadoFrutas("naranja","manzana","pera","sandia","melon");

var frutas = ["Naranja","Manzana"];

//Spread separa los parametros de arreglo
listadoFrutas(...frutas,"pera","sandia","melon");
