import { ProfileDetails } from './../interfaces/Profile';
import { obtResponse, Profile } from './../interfaces/Auth';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { SocialAuthService } from 'angularx-social-login';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = "";
  private  userin!:obtResponse;

  api = 'http://localhost:5000/api';

  constructor(public httpClient: HttpClient) { }
  

  get user() {
    return { ... this.userin }
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
  updateProfile(user: ProfileDetails, id: number): Observable<any> {
    return this.httpClient.post(`${this.api}/user/profile/${id}`, user)
  }


  Profile(user: Profile, id: string, provider: string = '') {
    const url = `${this.api}/user/update/${id}`;
    const body = {
      lastname: user.lastname,
      natIdCard: user.natIdCard,
      DoB: user.DoB,
      city: user.city,
      department: user.department,
      country: user.country,
      postalcode: user.postalcode,
      career: user.career,
      skill_Id: user.skill_Id,
      description: user.description
    }
    return this.httpClient.post<obtResponse>(url, body).pipe(
      tap(user => this.userin = user),
      catchError(err => of(err.error))
    )
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
    this.token = token;
  }

  /**Metodo  obtener token **/ 
  getToken(): string {
    // return localStorage.getItem('authToken');
    return this.token;
  }

   setUser(res:obtResponse) {
    this.userin = res;
  } 

  getInfo(token) {
    return this.httpClient.get(`${this.api}/user/info`, {
      headers: {Authorization:token }
    })
  }
}
