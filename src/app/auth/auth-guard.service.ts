import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                if(!firebase.auth().currentUser){
                  this.router.navigate(['/']);
                  console.log('Must be signed in');
                }
                
                
                return this.authService.isAuthenticated();
    
  }
  
}
