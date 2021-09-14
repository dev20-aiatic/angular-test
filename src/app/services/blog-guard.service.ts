import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog.service';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: "root",
})
export class BlogGuard implements CanActivate  {
  
  constructor(private blogService: BlogService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.blogService.isLoggedIn        
      .pipe(
        take(1),                               
        map((isLoggedIn: boolean) => {        
          if (!localStorage.getItem('wp-token') || !isLoggedIn){
            Swal.fire('Error','Debe iniciar sesión para acceder a este contenido', 'error');
            setTimeout(() => {
              this.router.navigate(['/web/wp-login']);
          }, 2000);  //5s
            return false;
          }
          return true;
        }));
  }
  
}

