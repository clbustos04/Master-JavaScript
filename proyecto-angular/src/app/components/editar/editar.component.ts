import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect';
import { ProyectService } from 'src/app/services/proyect.service';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-editar',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public title: string;
  public proyect: Proyect;
  public status: string;
  public saveProyect;
  public filesToUpload: Array<File>
  public url:string;
 

  constructor(
    private _proyectService: ProyectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute
  ) { 
    this.title = 'Editar Proyecto';
    this.url = Global.url;
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

  onSubmit(form){
    this._proyectService.updateProyect(this.proyect).subscribe(
    response => {
       if(response.proyect){
        //Subir imagen
        if(this.filesToUpload){
        this._uploadService.makeFileRequest(Global.url + "/upload-image/" + response.proyect._id, [], this.filesToUpload, 
        "image").
          then((result:any)=>{
            this.saveProyect = result.proyect;
            this.status = 'success';
           });
          }else{
            this.saveProyect = response.proyect;
            this.status = 'success';
          }
      
      }else{
        this.status = 'failed'; 
      }
    },
     error =>{
      console.log(<any>error);
    }
  )
}

fileChangeEvent(fileInput: any){
  this.filesToUpload = <Array<File>>fileInput.target.files;
  console.log(fileInput);
}


}
