import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Items } from 'app/models/item.model';

@Injectable()
export class ItemService {
  items: Observable<Items[]>;
  itemsDB: AngularFireList<Items>;
  itemRef: AngularFireObject<any>;
  
    constructor(public db: AngularFireDatabase) {
      this.itemsDB = this.db.list('items');
      this.items = this.itemsDB.valueChanges();
      this.itemRef = db.object('item');
    } 
    
    getItems() {
      return this.items;
    }

    createItem(items: Items) {

      return this.itemsDB.set(items.title, items);
    }
    deleteItem() {
      this.itemRef.remove();
  }
}

