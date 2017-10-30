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
  key: any;
  itemKey

  constructor(private itemService: ItemService, db: AngularFireDatabase) {}


  deleteItem(e) {
    this.itemKey = e.target.id
  }

  confirmDelete(){
    this.itemService.deleteItem(this.itemKey)
    $('#deleteitem-modal').modal('hide');
  }

  ngOnInit() {
    this.itemService.getItemsByUserID().subscribe(items =>{
      this.items = items;
    })
  }

}
