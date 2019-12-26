//Clase
@estampar("Metallica")
class Camiseta implements icamiseta {
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;
  constructor(color: string, modelo: string, marca: string) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
  }
  public setColor(color: string) {
    this.color = color;
  }
  public getColor(): string {
    return this.color;
  }
  public darMensaje(): string {
    return "Hola";
  }
}
