//import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Item } from 'app/models/item.model';

@Injectable()
export class ItemService {

  //itemsCollection: AngularFireObject<Item>;
  items: any;
  users: any;
  //itemDoc: AngularFireObject<Item>;
  
  itemsDB: AngularFireList<any>;
  usersDB: AngularFireList<any>;
  // itemRef: AngularFireObject<Item>;
  //item$: FirebaseObjectObservable<any>;
  
  constructor(public db: AngularFireDatabase) {
    this.itemsDB = this.db.list(`items`); 
    this.usersDB = this.db.list(`users`);
    //this.items = this.db.('items', ref=> ref.orderBy('title'))
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

  deleteItem(key) {
    return this.db.object(`items/${key}`).remove()
  }

  updateItem(item) {
    console.log(item)
    this.itemsDB.update(item.key, item);
  
  }

  createItem(items: Item) {
    console.log(items);
    let key = this.itemsDB.push(items).key;
    this.itemsDB.set(`${key}/key`, key);
  }

  
}
