import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public email:string;

  constructor() {
    this.title = "Franco Rodriguez Viau";
    this.subtitle = "Programador Amateur";
    this.email = "franco.rodriguez.viau@gmail.com";
  }

  ngOnInit(): void {
  }

}
