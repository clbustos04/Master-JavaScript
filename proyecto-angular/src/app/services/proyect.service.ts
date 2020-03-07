import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Global } from './global';
import { Proyect } from '../models/proyect';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

   testService(){
     return 'Probando el servicio de Angular';
   }

   saveProyect(proyect: Proyect):Observable<any>{
     let params = JSON.stringify(proyect);
     let headers = new HttpHeaders().set('Content-Type','application/json');

     return this._http.post(this.url+'/save-proyect',params, {headers: headers});

   }

   getProyects():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'/get-proyects', {headers: headers})

   }

   getProyect(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'/get-proyect/'+id, {headers: headers});
   }

   deleteProyect(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'/del-proyect/'+id, {headers: headers});
   }

   updateProyect(proyect):Observable<any>{
     let params = JSON.stringify(proyect)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'/upd-proyect/'+proyect._id, params, {headers: headers});
   }

 

}
