import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

Unclicked = true

ShowCategories(e){
  this.Unclicked = !this.Unclicked
  
}
  
HideCategories(e){
  this.Unclicked = !this.Unclicked

}

  constructor() { }

  ngOnInit() {
  }

}
