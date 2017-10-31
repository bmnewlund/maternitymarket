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
    asdf() {
      console.log('asdf')
    }
    onSignup(data) {
      console.log(typeof data.value.email);
      this.authservice.signupUser(data.value, data.value.password)
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

}