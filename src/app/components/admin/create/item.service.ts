import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Items } from 'app/models/item.model';

@Injectable()
export class ItemService {
  items: Observable<any[]>;
  itemsDB: AngularFireList<any>;
  itemRef: AngularFireObject<any>;
  
    constructor(public db: AngularFireDatabase) {
      this.itemsDB = this.db.list('items');
      this.items = this.itemsDB.valueChanges();
      this.itemRef = db.object('item');
    } 
    
    getItems() {
      return this.items;
    }

    getItemsByUserID() {
      return this.db.list('/items', ref => ref.orderByChild('userid').equalTo(firebase.auth().currentUser.uid)).valueChanges()
    }

    getItemsByCategory(id) {
      return this.db.list('/items', ref => ref.orderByChild('category').equalTo(id)).valueChanges()
    }

    getItemByKey(key) {
      return this.db.object(`items/${key}`).valueChanges()
    }
  
    deleteItem() {
      this.itemRef.remove();
    }

    createItem(items: Items) {
      let key = this.itemsDB.push(items).key;  
      this.itemsDB.set(`${key}/key`, key)
    }
}