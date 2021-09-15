import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WP_User } from '../interfaces/WP_User';
import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  
  // URL del blog que vamos a trabajar con su REST API
  public URL = 'https://dev20.latiendasigueabierta.com/';
  public API = `${this.URL}wp-json/wp/v2/`;
  public TOKENIZER = `${this.URL}wp-json/jwt-auth/v1/token`;

  // Definimos usuario de blog
  private user: any;
  isAuthenticated = false;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;
  //Opciones de blog
  allPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}
  
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
