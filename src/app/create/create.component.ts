import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ItemService } from './item.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  
  constructor(private itemService: ItemService) {}
  addItem(title, description, zip) {
    let data = {
      title: title.value,
      description: description.value,
      zip: zip.value
    }
    console.log(title.value, description.value, zip.value)
    this.itemService.AddItems(data)
    .subscribe(
      (response) => console.log(response)
    );
  }

}
