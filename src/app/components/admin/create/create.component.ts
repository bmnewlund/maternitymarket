import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ItemService } from './item.service';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
declare var $ :any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

urlForm: string

  constructor(private itemService: ItemService, db: AngularFireDatabase) {}

  freeItem(){
    console.log("first");
    $('#price').attr('disabled');
    console.log("second");
  }

  createItem(category, title, price, description) {
    console.log(this.urlForm)
    let data = {
      category: category.value,
      title: title.value,
      price: price.value,
      description: description.value,
      userid: firebase.auth().currentUser.uid,
      key: null,
      imgurl: this.urlForm
    }
    this.itemService.createItem(data)

    $('#create-modal').modal('hide');
  }

  ImageSelected(event: any){
    const file: File = event.target.files[0];
    const storageRef: firebase.storage.Reference = firebase.storage().ref((file.name))

    storageRef.put(file).then(data => {
      let url = data.metadata.downloadURLs[0]
      this.urlForm = url
    })
  }
}
