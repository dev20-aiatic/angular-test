import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NotificationService } from './notification.service';
import { WP_User } from '../interfaces/WP_User';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { WP_Token } from '../interfaces/WP_Token';

@Injectable({
  providedIn: 'root',
})
export class WPAuthService {
  //La ruta de autenticación del plugin wordpress
  TOKENIZER: string = environment.wpAuth;
  user: WP_User;
  isAuthenticated = false;
  token: string;
  authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  Login(username: string, password: string) {
    this.http
      .post<WP_User>(`${this.TOKENIZER}`, { username, password })
      .subscribe(
        (response) => {
          const _user = response;
          if (response.token) {
            localStorage.setItem('wp-token', response.token);
            this.isAuthenticated = true;
            this.token = response.token;
            this.user = response;
            this.authStatusListener.next(true);
            Swal.fire('Hola de nuevo', this.user.user_display_name, 'success');
            setTimeout(() => {
              this.router.navigateByUrl('/web/posts');
            });
          }
        },
        (error) => {
          this.notificationService.warn(
            '¡Credenciales incorrectas, intente de nuevo!'
          );
          this.authStatusListener.next(false);
        }
      );
  }

  /**Getter del usuario logueado*/
  get userIN() {
    return { ...this.user };
  }

  autoAuthUser() {
    if (localStorage.getItem('wp-token')) {
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }
  }

  /**Metodo  validar token*/
  validateWPToken() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('wp-token')
    );
    return this.http
      .post<WP_Token>(
        `${this.TOKENIZER}/validate?token=`,
        {},
        { headers: headers }
      )
      .pipe(
        map((response) => {
          if (response.code === 'jwt_auth_valid_token') {
            return true;
          }
          return false;
        })
      );
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
