import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
 
   public nombre: string;

  constructor() {
    this.nombre = "Listado de cursos";
   }

  ngOnInit() {
    console.log("Componente ejecutado");
  }

  ngDoCheck(): void {
    console.log("Se ejecuta cuando hay un cambio en el codigo");
  }

  cambiaNombre(){
    this.nombre = "Nuevo nombre";
  }

  ngOnDestroy(): void {
    console.log("OnDestroy ejecutado");
  }
 

}
