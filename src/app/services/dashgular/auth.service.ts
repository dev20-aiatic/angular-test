import { ProfileDetails } from './../../interfaces/Profile';
import { obtResponse, Profile, UserDetails } from './../../interfaces/Auth';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userin: obtResponse;
  loggedIn: boolean = false;
  isAuthenticated: any;
  //La ruta de autenticación del plugin wordpress
  APP_API: string = environment.APP_REST.API;
  
  constructor(public httpClient: HttpClient, private route: Router) {}

  /** Método registrar usuario */
  signup(name: string, email: string, password: string) {
    return this.httpClient
      .post<obtResponse>(`${this.APP_API}/auth/register`, { name, email, password })
      .pipe(tap((res) => this.setTokenAndUser(res)));
  }

  /**Metodo  iniciar sesión*/
  login(email: string, password: string) {
    return this.httpClient
      .post<obtResponse>(`${this.APP_API}/auth/login`, { email, password })
      .pipe(tap((res) => this.setTokenAndUser(res)));
  }

  /**Metodo  logueo con Google*/
  loginSocial(socialData: any) {
    return this.httpClient.post(`${this.APP_API}/auth/google`, socialData);
  }

  /** Método que trae los datos del usuario logueado */
  get userlogged() {
    return { ...this.userin };
  }

  /**Getter status login google y facebook*/
  get isLoggedIn() {
    return this.loggedIn;
  }
  /**Metodo para cerrar sesión*/
  logout() {
    this.loggedIn = false;
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

  //** Verificar si se encuentra logueado */
  getIsAuth() {
    return this.isAuthenticated;
  }

  /**Metodo encargado de validar y renovar el token jwt*/
  validateToken(): Observable<boolean> {
    const headers = new HttpHeaders().set('token',localStorage.getItem('token') || ''  );
    return this.httpClient
      .get<obtResponse>(`${this.APP_API}/auth/renew`, { headers })
      .pipe(
        map((res) => {
          this.setTokenAndUser(res);
          return res.auth;
        }),
        catchError((err) => of(false))
      );
  }

  /**Metodo encargado de mantener logueado el usuario*/

  autoAuthUser() {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }
  }

  /**Metodo  formulario user */
  updateProfile(user: ProfileDetails, id: number): Observable<any> {
    return this.httpClient.post(`${this.APP_API}/user/profile/${id}`, user);
  }

  /**Metodo para setear el usuario y token del logueo*/
  setTokenAndUser(res: obtResponse) {
    if (res.auth) {
      localStorage.setItem('token', res.token);
      this.userin = res;
      return;
    }
  }

  /**Metodo para obtener listado de usuarios*/

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.APP_API}/auth/users`);
  }

  getInfo() {
    let header: HttpHeaders = new HttpHeaders().append('token', localStorage.getItem('token') || '');
    return this.httpClient.get<User>(`${this.APP_API}/auth/user/info`, { headers: header}).pipe(
      map((user) => {
        return user;
      })
    );
  }

  
  /**
   * Método encargado de actualizar información de usuario
   * @returns Respuesta frente a petición put de la api
   */

   update_profile(data: any): Observable<any> {
    let header: HttpHeaders = new HttpHeaders().append('token', localStorage.getItem('token') || '');
    return this.httpClient.put(`${this.APP_API}/auth/user/update`, data, {headers: header});
  }

}
