import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild  {
  
  constructor(private authService: AuthService, private router: Router) {}


  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem('token')) {
      Swal.fire('Error','Debe iniciar sesión para acceder a este contenido', 'error');
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}

