$(document).ready(function(){

  //slider
  $('.bxslider').bxSlider({
   mode: 'fade',
   captions: true,
   slideWidth: 1200
 });

  //posts (arreglo de JSON)
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
      });
