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
  createItem(category, title, price, description, zip) {
    let data = {
      category: category.value,
      title: title.value,
      description: description.value,
      price: price.value,
      zip: zip.value
    }
    console.log(category.value, title.value, price.value, description.value, zip.value)
    this.itemService.createItem(data)
    // .subscribe(
    //   (response) => console.log(response)
    // );
  }

}
