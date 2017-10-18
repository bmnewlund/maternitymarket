import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { Headers, Http, Response } from '@angular/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private http: Http) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    
  
    let data = {
      email: form.value.email,
      phone: form.value.phone,
      zip: form.value.zip
    }
console.log(data)


    
    return this.http.post('https://maternity1150.firebaseio.com/users.json',
    data).subscribe();



      
    }
  
  }

