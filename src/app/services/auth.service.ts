import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(db: AngularFireDatabase, private router: Router, private afAuth: AngularFireAuth) {}

  

  signupUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

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
    return this.token != null;
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
}



