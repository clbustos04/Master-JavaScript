$(document).ready(function(){
  //alert('eventos jquery ok');

 //Eventos Mouseover y Mouseout
 var caja = $('#caja');

 /*caja.mouseover(function(){
   $(this).css("background","red");
 });

 caja.mouseout(function(){
   $(this).css("background","green");
 });*/


 //Hover
 function cambiaRojo(){
   $(this).css("background","red");
 };

 function cambiaVerde(){
   $(this).css("background","green");
 };

 caja.hover(cambiaRojo,cambiaVerde);

  //Click y doble click
  caja.click(function(){
    $(this).css("background","blue")
           .css("color","white");

  });

  caja.dblclick(function(){
    $(this).css("background","pink")
           .css("color","yellow");

  });


    //Eventos Blur y Focus
   $('#nombre').focus(function(){
     $(this).css("border","2px solid green");
   });

   $('#nombre').blur(function(){
     $(this).css("border","1px solid #ccc");
     //obtengo valor del input $(this).val();
     //Metodo .text incrusto texto
       $('#datos').text($(this).val()).show();
   });


  //Eventos mousedown y mouseup
   var datos =  $('#datos');
   //mousedown (click mouse)
  datos.mousedown(function(){
    $(this).css("border-color","gray");
  });

  //mouseup (desclick mouse)
 datos.mouseup(function(){
   $(this).css("border-color","black");
 });


 //mousemove (movimiento del mouse)
 $(document).mousemove(function(){
   console.log("En X: "+event.clientX);
   console.log("En Y: "+event.clientY);
   //oculta cursor
   $('body').css("cursor","none");
   //mueve el elemento detrás del mouse
   $('#sigueme').css("left",event.clientX)
                .css("top",event.clientY);
 });




});
