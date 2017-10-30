import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
  users: Observable<any[]>;
  usersDB: AngularFireList<any>;
  userRef: AngularFireObject<any>;
  currentUser: any;
  
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.usersDB = this.db.list('users');
    this.users = this.usersDB.valueChanges();
    this.userRef = db.object('user');
    this.currentUser = this.afAuth.auth.currentUser.uid
  }

  getUserByUserID(ID) {
    return this.db.list('/users', ref => ref.orderByChild('uid').equalTo(ID)).valueChanges();
  }

  updateProfile(user) {
    console.log(this.currentUser);
    this.usersDB.update(this.currentUser, user);
  }

}