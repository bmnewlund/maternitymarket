import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

Deactivated = false

ActivateEditProfile(e){
this.Deactivated = !this.Deactivated
}

SaveChanges(e){
this.Deactivated = !this.Deactivated

}

  constructor() { }

  ngOnInit() {
  }

}