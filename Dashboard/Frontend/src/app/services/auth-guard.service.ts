import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';

import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild  {
  
  constructor(private authService: AuthService, private router: Router) {}


  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.authService.logIn) {
      alert('No tienes permitido ver esta página');
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
