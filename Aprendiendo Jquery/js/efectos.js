$(document).ready(function(){
  //alert("hola");
    $('#mostrar').click(function(){
       $(this).hide();
       $('#ocultar').show();
    //   $('#caja').show('fast');
      //  $('#caja').fadeOut('slow');
        $('#caja').fadeTo('slow',1);

    });

    $('#ocultar').click(function(){
      $(this).hide();
      $('#mostrar').show();
      // $('#caja').hide('fast');
    //   $('#caja').fadeIn('slow');
    //   $('#caja').fadeTo('slow',0);

        //Efecto puede ejecutar una funcion de callback despues de efectuarse
        $('#caja').slideUp('slow',function(){
          console.log("ocultado");
        });
    });

   //existen fast y normal

   $('#todoenuno').click(function(){
        $('#caja').toggle('fast');
   });

   //Existe wel slideToggle y fadeToggle

   $('#animar').click(function(){
       var caja = $('#caja')
       //metodo animate dentero de un JSON moficia el estilo
      caja.animate({marginLeft: '500px',
                    fontSize: '40px',
                    height:'200px'}
                    ,'slow')
          .animate({borderRadius: '900px',
                    marginTop:'50px'}
                    ,'slow')
          .animate({marginLeft: '400px',
                    fontSize: '30px',
                    height:'100px'}
                      ,'slow');
   });



});
