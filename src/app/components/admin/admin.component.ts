import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ItemService } from 'app/components/admin/create/item.service';
declare var $: any

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: any
  key: any
  itemKey
  itemKeyUpdate

  constructor(private itemService: ItemService, db: AngularFireDatabase) {}

  ngOnInit() {
    this.itemService.getItemsByUserID().subscribe(items =>{
      this.items = items;
    })
  }

  deleteItem(e) {
    this.itemKey = e.target.id
  }

  confirmDelete(){
    this.itemService.deleteItem(this.itemKey)
    $('#deleteitem-modal').modal('hide');
  }

  updateItem(e){
    this.itemKeyUpdate = e.target.id
    this.itemService.getItemByKey(this.itemKeyUpdate).subscribe(items =>{
      this.items = items
    $('#category').val(this.items.category)
    $('#title').val(this.items.title)
    $('#price').val(this.items.price)
    $('#description').val(this.items.description)
    })
  }


  confirmUpdateItem(category, title, price, description) {
    let data = {
      category: category.value,
      title: title.value,
      price: price.value,
      description: description.value,
      key: this.itemKeyUpdate
    }

    this.itemService.updateItem(data)
    $('#edititem-modal').modal('hide');
  }
}
