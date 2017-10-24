import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import * as firebase from 'firebase';
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  
  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    
  }
  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password).then(() => console.log(firebase.auth().currentUser.email));
    this.router.navigate(['admin'])
    alert('You Are Logged In!');
    console.log('Thanks for logging in!');
  }

}
