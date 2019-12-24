
//string
let cadena: string;

//number
let numero: number;

//boolean
let variable: boolean;

//any (cualquier tipo elimina el tipado fuerte)
let cualquier: any;
cualquier  = "hola";
cualquier = 4;

//Arrays
var lenguajes: Array<string> = ['php','java','c#'];
//arreglo de cualquier cosa
var arreglo: Array<any> = ['php','java','c#',4,true];

//Otra forma de derfinir un arreglo
let years: number[] = [2,4,5,7,6,8];

//Variables de mas de un tipo
let vari: string | number; //asume los dos posibles valores


//Tipos de datos personalizados
type letrasynumeros =  string | number;

let vari2 : letrasynumeros;

//let variable para bloque y var variable global
//let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    //imprime 44 y 55
    console.log(numero1, numero2);
}

//imprime 10 y 55 (var permite redefinir variable globalmente)
console.log(numero1, numero2);