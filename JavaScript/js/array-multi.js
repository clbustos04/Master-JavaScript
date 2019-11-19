'use strict'

var categorias = ['Terror','Suspenso','Acción','Drama'];
var peliculas = ['La Roca','Young Guns','Top Gun','Lost Boys'];

var cine = [categorias, peliculas];

//console.log(cine);

//console.log(cine[1][1]);
//console.log(cine[0][3]);

//Añadiendo datos al arreglos (push)
peliculas.push('Tombstone');
console.log(peliculas);

//Eliminando el ultimo elemento de un arreglo (pop)
peliculas.pop();
console.log(peliculas);

//Eliminar un elemento en concreto

//Obtengo indice de la posicion del arreglo
var indice = peliculas.indexOf('La Roca');

//Pregunto si el injdce fue encontrado
if (indice > -1 ){
  //metodo splice en earreglos, elimina elementos desde un elemnto hasta los que uno elija, en este caso es solo 1
  peliculas.splice(indice, 1);
}

console.log(peliculas);

//Convertir un arreglo a strings separados por coma (metodo join)
var peliculasString = peliculas.join();
console.log(peliculasString);


//Convertir un string a arreglo (metodo split)
var cadena = 'texto1, texto2, texto3';
var arrayCadena = cadena.split(', ');
console.log(arrayCadena);


//Ordenar un arreglo (alfabetico)
console.log(peliculas.sort());


//Orden inverso
console.log(peliculas.reverse());


//for in (otra manera de recorrer un array)
 for (let categoria in categorias) {
   console.log(categorias[categoria]);
 }

var peliculas2 = ['La Roca','Young Guns','Top Gun','Lost Boys'];

 //Busqueda de elementos dentro de un arreglos
 var busqueda = peliculas2.find((pelicula)=>{
    return pelicula == 'Young Guns';
 });

  console.log(busqueda);

 //Busqueda de elementos dentro de un arreglos (codigo reducido)
 var busqueda = peliculas2.find(pelicula => pelicula == 'Young Guns');
    console.log(busqueda);

 //DEvuelve indice
 var busqueda = peliculas2.findIndex(pelicula => pelicula == 'Young Guns');
    console.log(busqueda);


//Busqueda de numeros segun condicion (mayores o menores que) metodo some

var precios = [10, 20, 50, 80, 30, 100];
var busqueda = precios.some(precio => precio >= 101);
console.log(busqueda);
