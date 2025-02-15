import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(userData: any) {
    if (userData.username && userData.email && userData.dob) {
      this.isAuthenticated = true;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}