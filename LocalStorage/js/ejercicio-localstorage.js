'use strict'

window.addEventListener('load',function(){

var form = document.querySelector('#formband')
 form.addEventListener('submit',function(){
   var nombreBand = document.querySelector('#addbanda').value;
   if (nombreBand.length > 0) {
     localStorage.setItem(nombreBand, nombreBand);


   }
 });


  var form2 = document.querySelector('#formeband')

  form2.addEventListener('submit',function(){
    var form2 = document.querySelector('#formeband')
    var nombreBandE = document.querySelector('#delbanda').value;

     if (nombreBandE.length > 0) {
        localStorage.removeItem(nombreBandE);
         }

    });

    var ul = document.querySelector('#lista-bandas');
      for (var index in localStorage) {
       if ( typeof localStorage[index] == 'string') {
         var li = document.createElement('li');
         li.append(localStorage[index]);
         ul.append(li);
         //localStorage.removeItem(localStorage[index]);
       }
     }

 });


  /*for (var index in localStorage) {
     if ( typeof localStorage[index] == 'string') {
       var li = document.createElement('li');
       li.append(localStorage[index]);
       ul2.append(li);
       //localStorage.removeItem(localStorage[index]);
     }
   }*/
