import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { ItemService } from '../create/item.service';
import { UserService } from 'app/services/user.service';
import { Item } from 'app/models/item.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

Deactivated = false
// @Input() userid: any;


constructor(public userService: UserService) {
  // this.item = this.itemService.itemRef;
 }

ActivateEditProfile(e){
this.Deactivated = !this.Deactivated
}

SaveChanges(email, phone, zip){
this.Deactivated = !this.Deactivated
  let data = {
    email: email.value,
    phone: phone.value,
    zip: zip.value
    }

  this.userService.updateProfile(data);
  
}

  ngOnInit() {
  }

}