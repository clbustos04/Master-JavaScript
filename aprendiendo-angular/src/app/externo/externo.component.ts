import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public newUser: any;
  public usuarioGuardado:any;

  constructor(
    private peticionesService: PeticionesService 
  ) { 
    this.userId = 1;
    this.newUser = {
      "name": "",
      "job": ""
      }
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date();
  }

  cargaUsuario(){
    this.user = false;
    this.peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form){
    this.peticionesService.addUser(this.newUser).subscribe(
      response => {
          console.log(response);
          this.usuarioGuardado = response;
          form.reset();
      },
      error => {
        console.log(<any>error);
      }
    )

  }

}
