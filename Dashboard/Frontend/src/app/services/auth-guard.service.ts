import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild  {

  constructor(private auth: AuthService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const currentUser = this.auth.getUser();
    if (currentUser) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
