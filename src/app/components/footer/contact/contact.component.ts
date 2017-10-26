import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  name:string = '';
  email:string = '';
  message:string='';
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(40)])],
      'message' : [null, Validators.required]
    })
  }
  addPost(post) {
    
    this.name = post.name;
    this.email = post.email;
    this.message = post.message;
  }

  ngOnInit() {
  }

}
