import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function ActivateEditProfile(){
  //remove all disabled attributes 
}

function SaveAndDisable(){
  //update information in database 
  //disable fields
}
