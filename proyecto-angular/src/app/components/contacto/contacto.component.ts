import { Component, OnInit, ViewChild, asNativeElements } from '@angular/core';
//import * as $ from "jquery";

declare var $: any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   public widthSlider: number;
   public anchuraToSlider: number;
   public captions: boolean;
   public autor: any;
   @ViewChild('textos') textos;

  constructor() {
    this.captions = true;
   }

  ngOnInit(): void {
   

   $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","green")
                 .css("height","50px");   
    });

    $('.galeria').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 600
    });
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = null;
  }

  getAutor(event){
      this.autor = event;
  }

  getParrafo(){
    console.log(this.textos.nativeElement.textContent);
  }

}
