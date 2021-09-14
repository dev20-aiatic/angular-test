import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WP_User } from '../interfaces/WP_User';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  
  // URL del blog que vamos a trabajar con su REST API
  public URL = 'http://dev20.latiendasigueabierta.com/';
  public API = `${this.URL}wp-json/wp/v2/`;
  public TOKENIZER = `${this.URL}wp-json/jwt-auth/v1/token`;

  // Definimos usuario de blog
  private user: any;
  private loggedIn = new BehaviorSubject<boolean>(false);
  isAuthenticated = false;
  token: any;
  
  //Opciones de blog
  allPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}
  
  /**Metodo  iniciar sesión*/

  Login(data) {
    return this.http.post<WP_User>(`${this.TOKENIZER}`, data)
      .pipe(
        tap(res => {
          if (res.token) {
            localStorage.setItem('wp-token', res.token);
            this.isAuthenticated = true;
            this.loggedIn.next(true);
          }
        }),
        catchError(error => of(error))
      );
  }

  /**Metodo que autentica si hay token*/
  autoAuthUser() {
    this.token = JSON.stringify(localStorage.getItem('wp-token'));
    if (this.token) {
      this.isAuthenticated = true;
      this.loggedIn.next(true);
    }
  }

/**Metodo  validar token*/
  validateWPToken(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('wp-token'));
    return this.http.post(`${this.TOKENIZER}/validate?token=` + token,
         {}, { headers: headers});
  }

/**Metodo  para validar logueo*/

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
​
/**Metodo  para cerrar sesión*/
logout() {
    this.token = null;
    this.loggedIn.next(false);
    localStorage.removeItem('wp-token');
}

  getUser() {
      return this.user;
  }
​
  setUser(user) {
      this.user = user;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Hubo un problema, intente nuevamente';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Código de error: ${error.status}\n Mensaje: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  

  getAllPosts(page = 1): Observable<any[]> {
    let options = {
      observe: 'response' as 'body',
      params: {
        per_page: '4',
        page: '' + page,
      },
    };

    return this.http.get<any[]>(`${this.API}posts?_embed=true`, options).pipe(
      map((res) => {
        this.pages = res['headers'].get('x-wp-totalpages');
        this.allPosts = res['headers'].get('x-wp-total');
        return res['body'];
      }),
      catchError(this.handleError)
    );
  }

  getPost(id:any) {
    return this.http.get(`${this.API}posts/${id}?_embed`).pipe(
      map((post) => {
        return post;
      })
    );
  }

  createpost(data: any): Observable<any[]> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      }
    };
    return this.http.post<any[]>(`${this.API}posts`, data, options).pipe(
      catchError(this.handleError)
    );
  }


  updatepost(id: any, data: any): Observable<any> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      }
    };
    return this.http.put(`${this.API}posts/${id}?_embed`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  deletepost(id:any): Observable<any> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      }
    };
    return this.http.delete(`${this.API}posts/${id}`, options).pipe(
      catchError(this.handleError)
    );
  }

  nextPage(page) {
    return this.http
      .get(`${this.API}posts?page=${(page)}&per_page=6`)
      .pipe(catchError(this.handleError));
  }
  previousPage(page) {
    return this.http
      .get(`${this.API}posts?page=${(page)}&per_page=6`)
      .pipe(catchError(this.handleError));
  }

  


}
