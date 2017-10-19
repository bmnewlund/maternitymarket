import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    // also needs to send other data to the database
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/admin']);
          
          firebase.auth().currentUser.getIdToken()
          
            .then(
              (token: string) => {
              this.token = token
              console.log(token)
              }
            )
            // close the login modal
        }
      )
      
      .catch(
        error => console.log(error)
      );
     
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/home']);
    console.log('Great Job. you logged out');
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}



