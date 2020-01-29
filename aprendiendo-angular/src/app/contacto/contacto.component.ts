import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactousuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   contactoUsuario: ContactoUsuario;
  constructor() {
    this.contactoUsuario = new ContactoUsuario('','','','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    //limpia formulario
    form.reset();
    console.log(this.contactoUsuario);
  }

}
