import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = "Lista Video Juegos";
   }

  ngOnInit() {
  }

}
