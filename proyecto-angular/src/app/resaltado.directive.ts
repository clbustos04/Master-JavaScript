import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
   
   }

   ngOnInit(){
     var elemento = this.el.nativeElement;
     elemento.style.background = "blue";
     elemento.style.padding = "20px";
     elemento.style.marginTop = "15px";
     elemento.style.color = "white";

     console.log(elemento.innerText);
     elemento.innerText = elemento.innerText.toUpperCase();

   }

}
