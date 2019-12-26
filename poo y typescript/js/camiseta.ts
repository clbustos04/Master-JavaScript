
interface icamiseta{
  setColor(color:string);
  getColor():string;
  darMensaje():string;
}


//Decorador (agrega funcionalidad extra a una clase)
function estampar(logo: string){
  return function(target: Function){
    target.prototype.estampacion = function():void{
      console.log("camiseta estampada con logo: "+logo);
    }
  }
}

//Clase
@estampar("Metallica")
 class Camiseta implements icamiseta{
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;


  constructor(color: string, modelo: string, marca: string){
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
  }


  public setColor (color: string) {
      this.color = color;
  }
  public getColor ():string{
      return this.color;
  }

  public darMensaje ():string{
    return "Hola";
   }
}


//Clase hija
class Musculosa extends Camiseta{
  private capucha: boolean;

  setCapucha(capucha:boolean){
    this.capucha = capucha;
  }

  getCapucha():boolean{
    return this.capucha;
  }


}

var sudadera = new Musculosa("rojo","musculosa","umbro");
sudadera.setCapucha(true);
sudadera.setColor("amarillo");
console.log(sudadera.darMensaje(), sudadera.getCapucha(), sudadera.getColor());

var polera = new Camiseta("","","");
//polera.estampacion();

/*
var poleron = new Camiseta();
var polera = new Camiseta();
//camiseta.color = "rojo";
//camiseta.modelo = "manga larga";

poleron.setColor("Rojo");
console.log(poleron.getColor());

polera.setColor("Blanco");
console.log(polera.getColor()); */

/*
var polera = new Camiseta("rojo","sin mangas","apolo");
console.log(polera);*/