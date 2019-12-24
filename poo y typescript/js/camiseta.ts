//Clase

Class Camiseta{
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  public setColor(color){
      this.color = color;
  }
  public getColor(){
      return this.color;
  }

}

var camiseta = new camiseta();
//camiseta.color = "rojo";
//camiseta.modelo = "manga larga";

camiseta.setColor("Rojo");
console.log(camiseta.getColor());