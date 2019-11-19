'use strict'

//Local storage (guardar datos en navegadoe, similar a las sesiones en backend php)


//Comprobar disponibilidad de local storage
if (typeof(Storage) !== 'undefined') {
   console.log("Localstorage disponible");
 }else{
   console.log("incompatible con Localstorage");
 }

 //Guardar datos
 localStorage.setItem("Banda","Slayer");

//Recuperar elemento
console.log(localStorage.getItem("Banda"));

//Insertar en html
document.querySelector('#caja').innerHTML = localStorage.getItem("Banda");

//Guardar Objetos
var persona = {
    nombre:"Claudio Bustos",
    edad:40,
    email:"sin@mail.com"
  };

  //Formato JSON tiene que convertirse a String para ser enviado por POST o a una api y al localstorage con la funcion stringify del objeto JSON
  localStorage.setItem("usuario",JSON.stringify(persona));

  //Recuperar Objeto (funcion parse de objeto JSON transforma strig guardado en localStorage en un objeto javascript)
  var userRec = JSON.parse(localStorage.getItem("usuario"));
  console.log(userRec);

  //usando pobjheto recuperado en html
  document.querySelector('#caja').append("   " + userRec.nombre);

  //Eliminar elementod del localStorage
  //Elimina un elemento en particular
  localStorage.removeItem("usuario");

  //Elimina todo lo del localStorage
  localStorage.clear();
