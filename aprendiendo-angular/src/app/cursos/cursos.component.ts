import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
   public nombre: string;

  constructor() {
    this.nombre = "Listado de cursos";
   }

  ngOnInit() {
  }

}
