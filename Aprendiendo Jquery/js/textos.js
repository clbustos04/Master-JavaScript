$(document).ready(function(){
  //Cantidad de enlaces
  console.log($('a').length);




  reloadLinks();
  $('#addbutton')
   .removeAttr('disabled')
   .click(function(){
    //append añade al final de la lista y prepend añade al principio
    //before lo agrega antes del elemento señalado (fuera de la lista)
    //after lo agrega despues del elemento señalado
    $('#menu').append('<li><a href="'+$('#addlink').val()+'"></a></li>');
    //limpio input
    $('#addlink').val('');
      reloadLinks();
  });


 function reloadLinks(){
   $('a').each(function(index){
     //Recorre enlaces
     var that = $(this);
     var enlace = that.attr("href");
     //agrego atributo
     that.attr('target','_blank')

     //remueve atributo
      that.removeAttr();

     that.text(enlace);
   });
 }





});
