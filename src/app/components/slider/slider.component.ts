import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import $ from "jquery"

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input("anchura") ancho : any;
  @Output() getAutor = new EventEmitter();
  public autor : any;
  constructor() {

  }

  ngOnInit(): void {
    this.autor = {
      nombre: "Franco",
      apellidos: "Rodriguez Viau",
      edad: "16"
    }
    $(".slider").bxSlider({
      mode:"fade",
      captions:false,
      slideWidth: this.ancho
    });
    console.log(this.ancho);
  }

  lanzar(event){
    this.getAutor.emit(this.autor);
  }

}
