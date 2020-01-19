import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/configuracion';
import { Zapatilla } from 'src/app/models/zapatilla';
import { ZapatillasService } from 'src/app/services/zapatillas.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  public descripcion: string = "Componente de zapatillas";
  public config;
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor(
    private zapatillaService: ZapatillasService
  ) { 
    this.marcas = new Array();
    this.titulo = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
    this.color = 'yellow';
    this.miMarca = 'Fila';
    
  }

  ngOnInit() {
    console.log(this.zapatillas);
    this.zapatillas = this.zapatillaService.getZapatillas();
    alert(this.zapatillaService.getTexto());
    this.getMarcas();

  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla,index) => {
      //Busqueda de elemento en todo el arreglo
      if(this.marcas.indexOf(zapatilla.marca) < 0){
        this.marcas.push(zapatilla.marca);
      } 
     });
      console.log(this.marcas);
  }

  getMiMarca(){
   alert(this.miMarca);
  }

  addMarca(){
    this.marcas.push(this.miMarca);
  }

  borrarMarca(indice){
    //delete this.marcas[indice];
    this.marcas.splice(indice, 1);
 
  }

  onBlur(){
    alert("Has salido del input");
  }

  mostrarPalabra(){
    alert(this.color);
  }

}
