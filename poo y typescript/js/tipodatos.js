//string
var cadena;
//number
var numero;
//boolean
var variable;
//any (cualquier tipo elimina el tipado fuerte)
var cualquier;
cualquier = "hola";
cualquier = 4;
//Arrays
var lenguajes = ['php', 'java', 'c#'];
//arreglo de cualquier cosa
var arreglo = ['php', 'java', 'c#', 4, true];
//Otra forma de derfinir un arreglo
var years = [2, 4, 5, 7, 6, 8];
//Variables de mas de un tipo
var vari; //asume los dos posibles valores
var vari2;
//let variable para bloque y var variable global
//let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    //imprime 44 y 55
    console.log(numero1_1, numero2);
}
//imprime 10 y 55 (var permite redefinir variable globalmente)
console.log(numero1, numero2);
