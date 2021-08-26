import { TokenResponse } from './../interfaces/User';
import { Profile } from './../interfaces/Profile';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = "";
  private user: object = {};
  private luser: (TokenResponse); 

  api = 'http://localhost:5000/api';

  constructor(public httpClient: HttpClient) { }
  

  getAll() {
    return this.httpClient.get(`${this.api}/users`)
  }

  /** Método registrar usuario */
  signup(user: object): Observable<any> {
    return this.httpClient.post(`${this.api}/auth/register`, user);
  }

  /**Metodo  iniciar sesión*/

  login(user: object): Observable<any> {
    return this.httpClient.post(`${this.api}/auth/login`, user);
  }

  /**Metodo  cerrar sesión*/
  logout() {
  localStorage.clear();
  }

  /**Metodo  formulario user */
  updateProfile(user: object, id: number): Observable<any> {
    return this.httpClient.post(`${this.api}/user/profile/${id}`, user)
  }

  /**Metodo validar logueo */
  isAuthenticated() {
    if (localStorage.getItem('x-access-token')) {
      return true;
    } else {
      return false;
    }
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  /**Metodo  obtener token **/ 
  getToken(): string {
    // return localStorage.getItem('authToken');
    return this.token;
  }

  setUser(user: object): void {
    this.user = user;
  }

  getUser() {
    return {... this.luser};
  }

  getInfo(token) {
    return this.httpClient.get(`${this.api}/user/info`, {
      headers: {Authorization: token }
    })
  }
}
