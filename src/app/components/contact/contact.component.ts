import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider : number;
  public anchuraToSlider : any;
  public autor : any;
  @ViewChild("textos",{static:true}) textos : any; // Opcion Angular
  constructor() { }

  ngOnInit(): void {
    var opcionClasica = document.querySelector("#texto");
    //console.log(this.textos.nativeElement.textContent);
  }
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }
  resetearSlider(){
    this.anchuraToSlider = false;
  }
  conseguirAutor(event){
    this.autor = event;
  }

}
