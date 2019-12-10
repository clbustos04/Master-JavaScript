$(document).ready(function(){
  //alert("Integrado");

  //load
  //$("#datos").load("https://reqres.in/");
  //carga pagina completa en div

  //Get y post
  $.get("https://reqres.in/api/users", {page:2}, function(response){
     response.data.forEach((element, index) => {
       $("#datos").append("<p>"+ element.first_name + " " + element.last_name +"</p>")
     });
   });


   $("#formulario").submit(function(e){
     //Para que no redirija
     e.preventDefault();
     var usuario = {
         name:$('input[name="nombre"]').val(),
         job: $('input[name="job"]').val()
     }

      console.log(usuario);
  /*   $.post($(this).attr("action"), usuario, function(response){
        console.log(response);
       }).done(function(){
       alert("Usuario añadido");
     });*/

     //Meodo $.ajax
     $.ajax({
       type: 'POST',
       url: $(this).attr("action"),
       data:usuario,
       beforeSend: function(){
         console.log("Enviando usuario...");
       },
       success: function(response){
         console.log(response);
       },
       error: function(){
         console.log("Ha ocurrido un error");
       },
        timeout:2000
     });



      // para que no se haga la acción por defecto
      return false;
   });

});
