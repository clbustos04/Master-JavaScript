'use strict'


//funciones anonimas y de callback
function sumame(numero1, numero2, sumaYmuestra, sumaPordos){

  var suma = numero1 + numero2;
  sumaYmuestra(suma);
  sumaPordos(suma);
  return suma;

}

sumame(5,7, function(dato){
  console.log("La suma es: " + dato);
},
 function(dato){
   console.log("La suma por dos es: " + dato*2);
 }
);


//funciones de flecha
//Se remplaza la palabra function por una flecha a la derecha y funciona
sumame(5,7, (dato) => {
  console.log("La suma es: " + dato);
},
 (dato) => {
   console.log("La suma por dos es: " + dato*2);
 }
);


//funciones de flecha
//Se remplaza la palabra function por una flecha a la derecha y tambien se quitan los parentesis (solo cuando es un parametro) y funciona
sumame(5,7, dato => {
  console.log("La suma es: " + dato);
},
 dato => {
   console.log("La suma por dos es: " + dato*2);
 }
);
