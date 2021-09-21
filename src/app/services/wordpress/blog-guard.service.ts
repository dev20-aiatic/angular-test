import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import Swal from 'sweetalert2'
import { WPAuthService } from './wpauth.service';

@Injectable({
  providedIn: "root",
})
export class BlogGuard implements CanActivate  {
  
  constructor(private wpAuthService: WPAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {        
          if (!localStorage.getItem('wp-token') || !this.wpAuthService.getIsAuth){
            Swal.fire('Error','Debe iniciar sesión para acceder a este contenido', 'error');
            return false;
          }
          return true;
        }
}

