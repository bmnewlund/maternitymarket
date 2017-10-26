import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ItemService } from '../create/item.service';
declare var $: any

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent {
  ItemService: any;

  constructor(private itemService: ItemService, db: AngularFireDatabase) {}
  deleteItem(category, title, price, description) {
    let data = {
      category: category.value,
      title: title.value,
      price: price.value,
      description: description.value,
    }
    console.log(category.value, title.value, price.value, description.value)
    this.ItemService.deleteItem(data)
    // .subscribe(
    //   (response) => console.log(response)
    // );

    $('#deleteitem-modal').modal('hide');
  }
}