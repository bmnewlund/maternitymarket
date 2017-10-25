import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

LoggedIn: boolean

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (!auth) {
        return this.LoggedIn = false;
      }
      this.LoggedIn = true;
    })
  }

  logout() {
    this.authService.logout();
    this.LoggedIn = false;
  }

}
