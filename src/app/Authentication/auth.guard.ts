import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  user:string
  constructor(private router: Router) {}

  canActivate(): boolean {
    this.user = localStorage.getItem("user")
    if (this.user) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
