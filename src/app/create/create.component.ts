import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  category:string;
  title:string;
  description:string;
  price:number;
  zip:number;


  constructor() { }

  ngOnInit() {
    this.category = '';
    this.title = '';
    this.description = '';
    this.price = 0;
    this.zip = 0;
  }

}
