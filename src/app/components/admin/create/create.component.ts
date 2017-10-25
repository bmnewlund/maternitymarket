import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ItemService } from './item.service';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  
  constructor(private itemService: ItemService, db: AngularFireDatabase) {}
  createItem(category, title, price, description) {
    let data = {
      category: category.value,
      title: title.value,
      price: price.value,
      description: description.value,
      userid: firebase.auth().currentUser.uid,
      key: null
    }
    this.itemService.createItem(data)
  }

  

  itemImageSelected(event: any) {
    const file: File = event.target.files[0];
    console.log("Selected filename: ", file.name);

    // const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref((file.name))
    storageRef.put(file);
    console.log("Uploading", file.name);
  }


}
