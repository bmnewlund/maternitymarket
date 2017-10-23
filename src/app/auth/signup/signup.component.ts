import { Component, Pipe, OnInit, NgModule} from '@angular/core';
import {
  ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { Headers, Http, Response } from '@angular/http';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  phone: FormControl;
  zip: FormControl;
  constructor(private authService: AuthService, private http: Http) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
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

  onSignup(form: ngForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    
//     let data = {
//       email: form.value.email,
//       phone: form.value.phone,
//       zip: form.value.zip
//     }
// console.log(data)

//     return this.http.post('https://maternity1150.firebaseio.com/users.json',
//     data).subscribe();      
//     }
  }
}