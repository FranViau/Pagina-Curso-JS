import { Directive, ElementRef, OnInit } from '@angular/core'; // Lo que hace es que cuando le aplicas la directiva a un elemento, te consigue el elemento nativo que estes tocando

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el : ElementRef) {

   }

   ngOnInit(): void{
    var element = this.el.nativeElement;
    element.style.background = "blue";
    element.innerText = element.innerText.toUpperCase().replace("CONTACTO"," ");
   }
}
