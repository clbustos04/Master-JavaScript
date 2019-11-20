'use strict'

//JSON

var pelicula = {
  titulo:'Young Guns II',
  year: 1990,
  pais:'EEUU'
}

console.log(pelicula);

  //Cambiar el valor de una propiedad
  pelicula.pais = 'Chile';

var peliculas = [{titulo:'Top Gun', year:'1986', pais:'EEUU'},pelicula];
console.log(peliculas);

var cajaPeliculas = document.querySelector("#peliculas");
for (var index in peliculas) {
    var p = document.createElement('p');
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    cajaPeliculas.append(p);
}
