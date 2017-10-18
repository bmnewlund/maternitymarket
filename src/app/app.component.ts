import { Component, OnInit } from '@angular/core';
//import { ItemsComponent } from './items/items.component';
//import { CreateComponent } from './create/create.component';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCShVccI_R-ixs0_E_h0GtQc5f1PML5O3I",
      authDomain: "maternity1150.firebaseapp.com"
    });
  }





}
