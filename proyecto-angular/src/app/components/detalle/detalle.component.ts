import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyect } from 'src/app/models/proyect';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public url:string;
  public proyect: Proyect;
  public confirm: boolean;

  constructor(
    private _proyectService: ProyectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProyect(id);
    });
  }

  getProyect(id){
    this._proyectService.getProyect(id).subscribe( 
      response => {
        this.proyect = response.proyect;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  delProyect(id){
    this._proyectService.deleteProyect(id).subscribe( 
      response => {
       if(response.proyect){
         this._router.navigate(['/proyectos']);
       }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
