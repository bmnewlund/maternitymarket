import { Component, Pipe, OnInit, NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Headers, Http, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Observable } from 'rxjs/Observable';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  users: Observable<any[]>;
  constructor(private authService: AuthService, private db: AngularFireDatabase, private router: Router) {
    this.users = db.list('users').valueChanges();
  }

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

  onSignup(data) {
    const email = data.value.email;
    const password = data.value.password;
    this.authService.signupUser(email, password);

    let user = {
      email: data.value.email,
      phone: data.value.phone,
      zip: data.value.zip
    }
    this.createUser(user)
    this.router.navigate(['admin'])
    
    alert('Registration was a great success!');
    console.log('Registration was a great success!');

  }
}
