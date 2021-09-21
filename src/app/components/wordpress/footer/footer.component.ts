import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/wordpress/blog.service';
import { WPAuthService } from 'src/app/services/wordpress/wpauth.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent implements OnInit{

  constructor(public blogService: BlogService, private wpAuthService:WPAuthService, private router: Router) {
   }

    /**Metodo que me devuelve la información del usuario */
    get userData() {
      return this.wpAuthService.user;
  }
  
    /**Metodo que valida el logueo**/
    checklogin() {
      return this.wpAuthService.getIsAuth();
  }

  /**Metodo que redirige a la ruta actual**/
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  logout(): void {
    this.wpAuthService.logout();
    this.reloadCurrentRoute()
  }

  
  ngOnInit(): void {

  }

}
