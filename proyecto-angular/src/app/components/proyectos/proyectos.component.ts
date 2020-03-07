import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { Proyect } from 'src/app/models/proyect';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 public proyects: Proyect[];
 public url: string;
  constructor( private _proyectService: ProyectService) {
      this.url = Global.url;
   }

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects(){
    this._proyectService.getProyects().subscribe(response=>{
      if(response ){
       this.proyects = response.proyects;
     }
    }, error=>{
      console.log(<any>error);
    })
  }

}
