import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NotificationService } from './../notification.service';
import { WP_User } from '../../interfaces/WP_User';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { WP_Token } from '../../interfaces/WP_Token';

@Injectable({
  providedIn: 'root',
})
export class WPAuthService {
  TOKENIZER: string = environment.WP_REST.AUTH;
  user: any;
  isAuthenticated = false;
  token: string;
  authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  // Función para verificar si usuario se encuentra logueado
  getIsAuth() {
    return this.isAuthenticated;
  }

  // Función para validación de inicio de sesión
  getAuthStatusListener() {
  return this.authStatusListener.asObservable();
  }

  // Función para obtener el token JWT generado por la API
  getToken() {
    return this.token;
  }


  /**
   * Método encargado de realizar la petición de autenticación del usuario
   * @void se asigna el token y el usuario
   */
  Login(username: string, password: string) {
    this.http
      .post<WP_Token>(`${this.TOKENIZER}token`, { username, password })
      .subscribe(
        (response) => {
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

  /**
   * Función encargada de verificar y manterner iniciada la sesión del usuario
   * @void 
   */
  autoAuthUser() {
    if (localStorage.getItem('wp-token')) {
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }
  }

  /**
   * Función encargada de validar el token JWT
   * @return respuesta del wpapi que valida el token 
   */
  validateWPToken() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('wp-token')
    );
    return this.http
      .post<WP_Token>(
        `${this.TOKENIZER}token/validate?token=`,
        {},
        { headers: headers }
      );
  }

  /**
   * Procedimiento encargado de desauntenticar al usuario
   * @void 
   */
  logout() {
    this.token = '';
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
  }

  private clearAuthData() {
    localStorage.removeItem('wp-token');
  }
}
