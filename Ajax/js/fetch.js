'use strict'

//fetch (ajax) y peticiones a servicios rest

var usuarios = [];
var divUsuario = document.querySelector('#usuarios');
var divJanet = document.querySelector('#Janet');

//url con api de prueba
getUsuarios()
   .then(data => data.json())
   .then(data => {
     usuarios = data;
     listadoUsuarios(usuarios);

     return getJanet();
   })
   .then(data => data.json())
   .then(usuario => {
      mostrarJanet(usuario.data);
   });

 function getUsuarios(){
   return fetch('https://jsonplaceholder.typicode.com/users');
 }

 function getJanet(){
   return fetch('https://reqres.in/api/users/2');
 }

 function listadoUsuarios(usuarios){
   for (var i in usuarios) {
     let nombre = document.createElement('h3');
     nombre.innerHTML = i + " . " + usuarios[i].name + " Email:  " + usuarios[i].email + " Ciudad:  " +  usuarios[i].address.city ;
     divUsuario.appendChild(nombre);
   }
     document.querySelector('.loading').style.display = 'none';
 }

 function mostrarJanet(usuario){

     let nombre = document.createElement('h4');
     let avatar = document.createElement('img');
     nombre.innerHTML =  usuario.first_name + "  " +  usuario.last_name;

     avatar.src = usuario.avatar;
     avatar.width = 100;
     divJanet.appendChild(nombre);
     divJanet.appendChild(avatar);

     document.querySelector('#Janet .loading').style.display = 'none';
 }
