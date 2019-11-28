$(document).ready(function(){
  //console.log("jquery funcionando");}

//SELECTOR DE ID
 $("#verde").css("background","green")
            .css("color","white");

 $("#amarillo").css("background","yellow")
             .css("color","red");

 $("#azul").css("background","blue")
              .css("color","white");


//SELECTOR DE CLASES
$(".zebra").css("border","5px dashed black");


//SELECTOR DE ETIQUETAS
var parrafos = $("p").css("cursor","pointer");
  parrafos.click(function(){
    $(this).css("padding","5px")
  });


//$(this).addClass('zebrita); AÑADE CLASE
//$(this).hasClass('zebrita); BUSCA SI EXISTE LA CLASE
//$(this).removeClass('zebrita); QUITA LA CLASE

//SELECTORES DE ATRIBUTO
$('[title = "google"]').css("background","green").css("color","white");
$('[title = "facebook"]').css("background","blue").css("color","white");
});
