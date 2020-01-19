import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasService {
 public zapatillas: Array<Zapatilla>;
   
  constructor() {
    this.zapatillas = [
      new Zapatilla("Power clasica", 20000, "Power", "negras", true),
      new Zapatilla("Nike clasica", 30000, "Nike", "blancas", true),
      new Zapatilla("Adidas clasica", 50000, "Adidas", "rojas", true),
      new Zapatilla("Skecher clasica", 40000, "Skecher", "amarillas", false),
      new Zapatilla("Skecher clasica", 40000, "Skecher", "amarillas", false)
    ];
   }

   getTexto(){
     return "Hola Mundo desde un servicio";
   }

   getZapatillas():Array<Zapatilla> {
     return this.zapatillas;
   }
}
