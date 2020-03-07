import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public web: string;

  constructor() {
    this.title = "Claudio Bustos";
    this.subtitle = "Desarrollador Full Stack";
    this.web = "www.sinweb.cl";
   }

  ngOnInit(): void {
  }

}
