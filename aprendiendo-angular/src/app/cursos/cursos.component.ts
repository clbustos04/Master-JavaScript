import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
 
   public nombre: string;
   public parametro: string;
   public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.nombre = "Listado de cursos";
   }

  ngOnInit() {
    console.log("Componente ejecutado");
    this._route.params.subscribe((params)=>{
      this.parametro = params.nombre;
      this.followers = +params.followers; //signo + convierte a tipo number
      console.log(params);
    
       if(this.parametro == 'ninguno'){
        this._router.navigate(['/home']);
       }

    });
  }

  ngDoCheck(): void {
    console.log("Se ejecuta cuando hay un cambio en el codigo");
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

  cambiaNombre(){
    this.nombre = "Nuevo nombre";
  }

  ngOnDestroy(): void {
    console.log("OnDestroy ejecutado");
  }
 

}
