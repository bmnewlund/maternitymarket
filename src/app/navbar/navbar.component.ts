import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

LoggedIn = false

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.LoggedIn = false;
  }

}
