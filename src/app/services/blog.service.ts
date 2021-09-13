import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // Definimos usuario de blog
  user = {
    login: '',
    password: '',
  };
  //Guardamos el token que ser+a usado en las API REQUEST
  @Input() token;
  @Output() tokenChange = new EventEmitter<string>();
  // URL del blog que vamos a trabajar con su REST API
  public URL = 'http://dev36.latiendasigueabierta.com/';
  public API = `${this.URL}wp-json/wp/v2/`;
  allPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}

  auth() {
    this.http
      .post(`${this.URL}wp-json/jwt-auth/v1/token`, {})
      .subscribe((data) => {
        if (data['token']) {
          // if token is returned
          this.token = data['token'];
          this.tokenChange.emit(this.token);
        }
      });
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Hubo un problema, intente nuevamente';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
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

  getPost(id) {
    return this.http.get(`${this.API}posts/${id}?_embed`).pipe(
      map((post) => {
        return post;
      })
    );
  }

  createpost(data): Observable<any> {
    return this.http.post(`${this.API}posts?_embed`, data);
  }

  updatepost(id, data): Observable<any> {
    return this.http.put(`${this.API}posts/${id}?_embed`, data);
  }

  deletepost(id): Observable<any> {
    return this.http.delete(`${this.API}posts/${id}?_embed`);
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
