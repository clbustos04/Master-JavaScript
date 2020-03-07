import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";

declare var $: any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   
  constructor() { }

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

}
