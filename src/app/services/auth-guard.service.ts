import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router, UrlTree} from '@angular/router';
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild  {

  constructor(private auth: AuthService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.auth.isAuthenticated;
    if (!user) {
      this.router.navigate(['login']);
      return false
    }
    return true
    }
  }

