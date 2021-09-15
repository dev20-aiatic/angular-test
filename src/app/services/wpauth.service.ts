import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NotificationService } from './notification.service';
import { WP_User } from '../interfaces/WP_User';

@Injectable({
  providedIn: 'root'
})
export class WPAuthService {
   // URL del blog que vamos a trabajar
    public URL = 'https://dev20.latiendasigueabierta.com/';
   //La ruta de autenticación del plugin
    public TOKENIZER = `${this.URL}wp-json/jwt-auth/v1/token`;  
  user: WP_User;
  isAuthenticated = false;
  token: string;
  authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) { }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  Login(username:string, password:string) {
    this.http.post<WP_User>(`${this.TOKENIZER}`, {username, password}).subscribe(response => {
      const _user = response; 
      if (response.token) {
        localStorage.setItem('wp-token', response.token);
        this.isAuthenticated = true;
        this.token = response.token;
        this.user = response;
        this.authStatusListener.next(true);
        Swal.fire( 'Hola de nuevo', this.user.user_display_name , 'success');
        setTimeout(() => {
          this.router.navigateByUrl('/web/posts')
        })
      }
    },
      error => {
        this.notificationService.warn('¡Credenciales incorrectas, intente de nuevo!');
        this.authStatusListener.next(false);
      }
    );
  }

  /**Getter del usuario logueado*/
  get userIN() {
    return { ... this.user }
  }


  autoAuthUser() {
    if ((localStorage.getItem('wp-token'))) {
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }
  }

  /**Metodo  validar token*/
  validateWPToken(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('wp-token'));
    return this.http.post(`${this.TOKENIZER}/validate?token=` + token,
         {}, { headers: headers});
  }

  logout() {
    this.token = '';
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigateByUrl('login');
  }

  private clearAuthData() {
    localStorage.removeItem('wp-token');
  }
}