import { ProfileDetails } from './../interfaces/Profile';
import { obtResponse, Profile } from './../interfaces/Auth';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  private userin: obtResponse;
  loggedIn: boolean = false;

  api = 'http://localhost:5000/api';

  constructor(public httpClient: HttpClient, private route: Router) {}

  /** Método registrar usuario */
  signup(name:string, email: string, password: string) {
    return this.httpClient.post<obtResponse>(`${this.api}/auth/register`, {name, email, password})
    .pipe(
      tap((res)=>{
        if(res.auth){
          this.setTokenAndUser(res);
        }
      })
    )
  }

  /**Metodo  iniciar sesión*/

  login(email: string, password: string) {
    return this.httpClient.post<obtResponse>(`${this.api}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          if (res.auth) {
            this.setTokenAndUser(res);
          }
        }),
        catchError((err) => of(err.error.msg))
      );
  }

  /**Metodo  logueo con Google*/
  googleIn() {
    return this.httpClient
      .post<obtResponse>(`${this.api}/auth/google`, this.token)
      .pipe(
        map((res) => {
          this.setTokenAndUser(res);
          this.loggedIn = true;
          return res.auth;
        }),
        catchError((err) => of(err.error.msg))
      );
  }

  /** Método que trae los datos del usuario logueado */
  get userlogged() {
    return { ...this.userin };
  }

  /**Metodo para cerrar sesión*/
  logout() {
    this.loggedIn = false;
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

 /**Metodo encargado de validar y renovar el token jwt*/
 validateToken(): Observable<boolean> {
  const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.get<obtResponse>(`${this.api}/auth/renew`, {headers})
    .pipe(
      map(res => {
        this.setTokenAndUser(res);
        return res.auth;
      }),
      catchError(err => of(false))
    );
}

  /**Metodo  formulario user */
  updateProfile(user: ProfileDetails, id: number): Observable<any> {
    return this.httpClient.post(`${this.api}/user/profile/${id}`, user);
  }

  /**Metodo validar logueo */
  isAuthenticated() {
    if (localStorage.getItem('x-access-token')) {
      return true;
    } else {
      return false;
    }
  }

/**Metodo para setear el usuario y token del logueo*/
setTokenAndUser(res: obtResponse) {
  localStorage.setItem('token', res.token);
  this.userin = res;
}

  getInfo(token) {
    return this.httpClient.get(`${this.api}/user/info`, {
      headers: { Authorization: token },
    });
  }
}
