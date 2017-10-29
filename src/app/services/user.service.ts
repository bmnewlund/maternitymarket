import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  users: Observable<any[]>;
  usersDB: AngularFireList<any>;
  userRef: AngularFireObject<any>;
  
  constructor(public db: AngularFireDatabase) {
    this.usersDB = this.db.list('users');
    this.users = this.usersDB.valueChanges();
    this.userRef = db.object('user');
  }

  getUserByUserID(ID) {
    console.log()
    return this.db.list('/users', ref => ref.orderByChild('uid').equalTo(ID)).valueChanges();
  }
}