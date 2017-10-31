import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, } from "angularfire2/database";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  authState: any = null;
  user: any[];

  constructor(private db: AngularFireDatabase, private router: Router, private afAuth: AngularFireAuth) {}

  signinUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getToken() {
    return this.afAuth.auth.currentUser.getIdToken().then( token => this.token = token);
  }

  isAuthenticated() {
    return this.token !== null;
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid: '';
}

//SIGN UP
signupUser(user, password) {
  return this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
  .then((newUser) => {
      this.authState = newUser;
      this.updateUserData(user);
      this.router.navigate(['/admin']);
  })
  .catch(error => console.log(error));
}
  //// Helpers ////
  private updateUserData(user): void {
    // Writes email to realtime db
    // useful if your app displays information about users or for admin features
    let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
        email: this.authState.email,
        uid: this.authState.uid,
        phone: user.phone,
        zip: user.zip
    }
    this.db.list("users").set(this.currentUserId, data)
    .catch(error => console.log(error));
    }


}



