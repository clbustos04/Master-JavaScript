$(document).ready(function(){

  //slider
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
     mode: 'fade',
     captions: true,
     slideWidth: 1200
   });
   }
  //posts (arreglo de JSON)
    if (window.location.href.indexOf('index') > -1) {
      var posts = [
             {
               title: "prueba de titulo 1",
               date: moment().format("MMMM Do YYYY"),
               content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
             },
             {
               title: "prueba de titulo 2",
              date: moment().format("MMMM Do YYYY"),
               content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
             },
             {
               title: "prueba de titulo 3",
               date: moment().format("MMMM Do YYYY"),
               content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
             },
             {
               title: "prueba de titulo 4",
              date: moment().format("MMMM Do YYYY"),
               content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
             },
             {
               title: "prueba de titulo 5",
               date: moment().format("MMMM Do YYYY"),
               content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
             }
           ];


       posts.forEach((item, index) => {
         var post = `
             <article class="post">
                 <h2>${item.title}</h2>
                 <span class="date">${item.date}</span>
                 <p>${item.content}</p>
                 <a href="#" class="button-more">Leer mas</a>
             </article>
         `;

          $("#posts").append(post);

          });
        }

       //Selector de tema.
       var tema = $('#tema');
        $('#to-green').click(function(){
          tema.attr("href","css/green.css")
        });

        $('#to-blue').click(function(){
          tema.attr("href","css/blue.css")
        });

        $('#to-red').click(function(){
          tema.attr("href","css/red.css")
        });


        //Scroll arriba de la web
        $('.subir').click(function(e){
          //e.preventDefault();
          $('html','body').animate({
            scrollTop: 0
          },1000);
        //  return false;
        });

          //Login falso
          $('#login form').submit(function(){
            var formName = $('#name').val()
            localStorage.setItem("form_name",formName)

          });

          var formName = localStorage.getItem("form_name");
          if (formName != null && formName != "undefined") {
             var about_parrafo = $('#about p');
             about_parrafo.html("<strong>Bienveniodo: "+ formName + "</strong>")
             about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>")

             $('#login form').hide();

             $('#logout').click(function(){
               localStorage.clear();
               location.reload();
             });
          }
            //Acordeon
            if (window.location.href.indexOf('about') > -1) {
              $('#acordeon').accordion();
            }

            //Reloj
            if (window.location.href.indexOf('reloj') > -1) {
              setInterval(function(){
                var reloj = moment().format('hh:mm:ss');
                $('#reloj').html(reloj);
              },1000);

            }



      });
