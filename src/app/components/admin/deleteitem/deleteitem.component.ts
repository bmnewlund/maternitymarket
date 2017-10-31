import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ItemService } from '../create/item.service';
declare var $: any

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent {
@Input() key: any;

  constructor(private itemService: ItemService, db: AngularFireDatabase) {}
  deleteItem() {
    this.itemService.deleteItem(this.key.keyId)
    $('#deleteitem-modal').modal('hide');
  }
}