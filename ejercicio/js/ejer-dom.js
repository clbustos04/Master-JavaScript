'use strict'

window.addEventListener('load',function(){

    var form = document.querySelector("#formulario");
    var boxDasher = document.querySelector(".dashed");
    boxDasher.style.display = "none";


    form.addEventListener('submit',function(){
      var nombre    =  document.querySelector('#nombre').value;
      var apellidos =  document.querySelector('#apellidos').value;
      var edad      =  parseInt(document.querySelector('#edad').value);


      if (nombre.trim() == null || nombre.trim().length == 0) {
          alert("El nombre no es válido");
          document.querySelector('#error-nombre').innerHTML = "El nombre no es válido";
          return false;
      }else{
            document.querySelector('#error-nombre').style.display = "none";
      }

      if (apellidos.trim() == null || apellidos.trim().length == 0) {
          alert("Apellidos no válidos");
            document.querySelector('#error-apellidos').innerHTML = "Apellidos no válidos";
          return false;
      }else{
           document.querySelector('#error-apellidos').style.display = "none";
      }

      if (edad == null || edad == 0 || isNaN(edad)) {
          alert("Edad no válida");
            document.querySelector('#error-edad').innerHTML = "Edad no válida";
          return false;
      }else{
         document.querySelector('#error-edad').style.display = "none";
      }




      boxDasher.style.display = "block";
      console.log(nombre, apellidos, edad);

      var p_nombres   = document.querySelector("#p_nombre span");
      var p_apellidos = document.querySelector("#p_apellidos span");
      var p_edad      = document.querySelector("#p_edad span");

      p_nombres.innerHTML = nombre;
      p_apellidos.innerHTML = apellidos;
      p_edad.innerHTML = edad;
    /*  var datosUsuario = [nombre, apellidos, edad]

      for (var indice in datosUsuario){
        var parrafo = document.createElement("p");
        parrafo.append(datosUsuario[indice]);
        boxDasher.append(parrafo);
      }
   */
    });

});
