import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  constructor() {
    console.log('constructor ran..');
  }
  ngOnInit() {
    console.log('ngOnInit ran...');
  }

}
