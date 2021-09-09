import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild  {
  
  constructor(private authService: AuthService, private router: Router, private socialAuthService: SocialAuthService) {}


  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem('token') ||this.authService.isLoggedIn) {
      Swal.fire('Error','Debe iniciar sesión para acceder a este contenido', 'error');
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}

