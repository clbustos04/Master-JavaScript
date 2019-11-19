'use strict'

window.addEventListener('load', ()=>{

  function cambiaColor(){
    var vg = boton.style.background;
    if (vg == "green"){
       boton.style.background = 'red';
     } else{
        boton.style.background = 'green';
     }
   }

  var boton = document.querySelector('#boton');

  //Click
  boton.addEventListener('click', function(){
    cambiaColor();
  });

  //mouseover
  boton.addEventListener('mouseover', function(){
      boton.style.background = 'yellow';
  });

  //Mouseout
  boton.addEventListener('mouseout', function(){
    boton.style.background = 'blue';
  });


  var input = document.querySelector('#input');

  //focus
  input.addEventListener("focus",function(){
    console.log("[focus] Estas dentro del input");
  });

  //blur
  input.addEventListener("blur",function(){
    console.log("[blur] Estas fuera del input");
  });

  //keydown
  input.addEventListener("keydown",function(event){
    console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
  });

  //keypress
  input.addEventListener("keypress",function(event){
    console.log("[keydown] Tecla presionada ", String.fromCharCode(event.keyCode));
  });

  //keyup
  input.addEventListener("keyup",function(event){
    console.log("[keydown] Tecla soltada ", String.fromCharCode(event.keyCode));
  });


});
