import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
setTimeout(() => console.log(this.authService.usuarioLogueado))
    
    if (this.authService.usuarioLogueado) { return true; }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/error']);
    return false;
  }
}
