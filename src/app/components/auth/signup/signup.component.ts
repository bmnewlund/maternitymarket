import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'app/services/auth.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public afAuth: AngularFireAuth, private router: Router, private authservice: AuthService, private db: AngularFireDatabase) {
  }
  users: Observable<any[]>;
  
    state: string = '';
    error: any;
    myform: FormGroup;
    email: FormControl;
    password: FormControl;
    phone: FormControl;
    zip: FormControl;
  
    ngOnInit() {
      this.createFormControls();
      this.createForm();
    }
    //angularFireDatabase Service...
    createUser(userinfo){
      const user = this.db.list('users');
      user.set( userinfo.phone, userinfo );
    }
  
    createFormControls() {
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]);
      this.phone = new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]);
      this.zip = new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]);
    }
  
    createForm() {
      this.myform = new FormGroup({
        email: this.email,
        password: this.password,
        phone: this.phone,
        zip: this.zip
      });
    }

    onSignup(data, password) {
      console.log(data);
      this.authservice.signupUser(data, password)
    }

    // onSignup(data) {
    //   console.log(data)
    //   const email = data.value.email;
    //   const password = data.value.password;
    //   let user = {
    //     email: data.value.email,
    //     phone: data.value.phone,
    //     zip: data.value.zip,
    //     userid: firebase.auth().currentUser.uid
    //   }
    //   this.createUser(user)
    //   this.router.navigate(['/admin'])
    //   this.authservice.signupUser(email, password);
      
    //   console.log('Registration was a great success!');
  
    // }
}









// import { Component, Pipe, OnInit, NgModule} from '@angular/core';
// import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
// import { AuthService } from 'app/services/auth.service';
// import { Headers, Http, Response } from '@angular/http';
// import { AngularFireDatabase } from 'angularfire2/database';
// import {BrowserModule} from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import { Observable } from 'rxjs/Observable';
// import {Router, RouterModule} from "@angular/router";

// import * as firebase from 'firebase';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })

// export class SignupComponent implements OnInit {
  

//   constructor(public af: AngularFire,private router: Router) {

//   }

//   onSubmit(formData) {
//     if(formData.valid) {
//       console.log(formData.value);
//       this.af.auth.createUser({
//         email: formData.value.email,
//         password: formData.value.password
//       }).then(
//         (success) => {
//         console.log(success);
//         this.router.navigate(['/login'])
//       }).catch(
//         (err) => {
//         console.log(err);
//         this.error = err;
//       })
//     }
//   }

//   // constructor(private authService: AuthService, private db: AngularFireDatabase, private router: Router) {
//   //   this.users = db.list('users').valueChanges();
//   // }



  
// }
