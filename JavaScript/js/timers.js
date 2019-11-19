'use strict'

window.addEventListener('load',function(){

  //Timers

  // setTimeout Ejecuta solo una vez y no cada intervalo de tiempo
  //  var tiempo = setTimeout(function(){

  var tiempo = setInterval(function(){
    console.log("Hola");
    var encabezado = document.querySelector('h1');

    if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "30px";
      }else{
        encabezado.style.fontSize = "50px";
      }
  },500)

  var stop = document.querySelector('#stop');

  stop.addEventListener('click',function(){
        alert("Bucle detenido");
        clearInterval(tiempo);
  });


});
