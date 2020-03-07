import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { Proyect } from 'src/app/models/proyect';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProyectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public proyect: Proyect;
  public status: string;
  public saveProyect;
  public filesToUpload: Array<File>;
  public url: string;


  constructor(
    private _proyectService: ProyectService,
    private _uploadService: UploadService
  ) { 
    this.title = 'Crear Proyecto';
    this.proyect = new Proyect('','','','',2020,'','');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
      this._proyectService.saveProyect(this.proyect).subscribe(
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
        form.reset();
        
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
