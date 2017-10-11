import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  name:string;
  age:number;
  hobbies:string[];

  constructor() { 

  }

  ngOnInit() {
    console.log('ngOnInit works...');

    this.name = 'Simon Lee';
    this.age = 100;
    this.hobbies = ['read', 'play', 'naps'];
    
  }

}
