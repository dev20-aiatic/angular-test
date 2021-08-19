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
  api = 'http://localhost:5000/api/';

  constructor(public httpClient: HttpClient) { }
  

  getAll() {
    return this.httpClient.get(this.api + 'users')
  }

  /** Método registrar usuario */
  signup(user: object): Observable<any> {
    return this.httpClient.post(this.api +'auth/register', user);
  }

  /**Metodo  iniciar sesión*/

  login(user: object): Observable<any> {
    return this.httpClient.post(this.api + 'auth/login', user);
  }

  /**Metodo  cerrar sesión*/
  logout() {
  localStorage.removeItem('authToken')
  }


  /**Metodo validar logueo */
  isAuthenticated() {
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  setToken(token: string): void {
    this.token = token;
  }

  /**Metodo  obtener token **/ 
  getToken(): string {
    // return localStorage.getItem('authToken');

    return this.token;
  }

  setUser(user: object): void {
    this.user = user;
  }

  getUser(): object {
    return this.user;
  }

  getInfo(token) {
    return this.httpClient.get(this.api + 'users/info', {
      headers: { authorization: token }
    })
  }
}
