import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';
import { WP_User } from '../../interfaces/WP_User';
import * as moment from 'moment';
import { Wp_Category } from '../../interfaces/WP_Category';
import { Post, Posteo } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // URL del blog que vamos a trabajar con su REST API
  WP_API: string = environment.WP_REST.API;
  //Opciones de blog
  allPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}

  /**
   * procedimiento encargado de administrar las respuestas de error de wp-rest-api
   * @returns Mensaje de error obtenido
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Hubo un problema, intente nuevamente';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Errores del lado de la api
      errorMessage = `Código de error: ${error.status}\n Mensaje: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  /**
   * Método encargado de obtener el listado de los posts publicados en el blog
   * @returns Respuesta de petición de la api
   */
  getRecentPosts(categoryId: number, page = 1): Observable<any[]> {
    let category_url = categoryId ? '&categories=' + categoryId : '';
    let options = {
      observe: 'response' as 'body',
      params: {
        per_page: '10',
        page: '' + page,
        orderby: 'modified',
      },
    };

    return this.http
      .get<any[]>(`${this.WP_API}posts?_embed=true`, options)
      .pipe(
        map((res) => {
          this.pages = res['headers'].get('x-wp-totalpages');
          this.allPosts = res['headers'].get('x-wp-total');
          return res['body'];
        }),
        catchError(this.handleError)
      );
  }

  /**
   * Método encargado de obtener detalles de un post especifico
   * @returns Respuesta de petición de la api
   */
  getPost(id: any) {
    return this.http.get<Post>(`${this.WP_API}posts/${id}?_embed`).pipe(
      map((post) => {
        return post;
      })
    );
  }

  /**
   * Método encargado de obtener más posts
   * @returns Respuesta de petición de la api
   */

  getMorePosts(page: number): any {
    page++;
    return this.http
      .get<Post>(`${this.WP_API}posts/?_embed&page=` + page, {
        observe: 'response',
      })
      .pipe(
        map((post) => {
          return post;
        })
      );
  }
  /**
   * Método encargado de obtener los comentarios de un post en especifico
   * @returns Respuesta de petición de la api
   */
  getComments(id: any) {
    return this.http.get(`${this.WP_API}comments?post=${id}`).pipe(
      map((post) => {
        return post;
      })
    );
  }

  getAuthor(author) {
    return this.http.get(`${this.WP_API}` + 'users/' + author);
  }

  getCategories() {
    return this.http.get(`${this.WP_API}categories`);
  }

  getCategory(category: number) {
    return this.http.get(`${this.WP_API}` + 'categories/' + category);
  }

  /**
   * Método encargado de habilitar la creación de comentarios para un post
   * @returns Respuesta de petición de la api
   */
  createComment(postId: number, user: any, comment: string) {
    let header: HttpHeaders = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + user.token
    );
    return this.http.post(
      `${this.WP_API}` + 'comments?token=' + user.token,
      {
        author_name: user.displayname,
        author_email: user.email,
        post: postId,
        content: comment,
      },
      { headers: header }
    );
  }

  /**
   * Método encargado de crear un nuevo post
   * @returns Respuesta de petición de la api
   */
  createpost(data: any): Observable<any[]> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      },
    };
    return this.http
      .post<any[]>(`${this.WP_API}posts`, data, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método encargado de cargar un archivo de imagen en wp-rest-api
   * @returns Respuesta de petición post de la api
   */
  uploadImage(data:any) {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      },
    };
  
    return this.http
      .post(`${this.WP_API}media`, data, options)
      .pipe(catchError((err) => of(err)));
  }

  /**
   * Método encargado de actualizar un post
   * @returns Respuesta de petición de la api
   */

  updatepost(id: any, data: any): Observable<any> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      },
    };
    return this.http
      .post(`${this.WP_API}posts/${id}`, data, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método encargado de eliminar un post
   * @returns Respuesta de petición de la api
   */

  deletepost(id: any): Observable<any> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      },
    };
    return this.http
      .delete(`${this.WP_API}posts/${id}`, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método encargado de consultar la información de usuario logueado
   * @returns Información del usuario logueado
   */
  getUserLogged(): Observable<WP_User> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      },
    };

    return this.http
      .post<WP_User>(`${this.WP_API}users/me`, options)
      .pipe(catchError(this.handleError));
  }

  nextPage(page) {
    return this.http
      .get(`${this.WP_API}/posts?page=${page}&per_page=6`)
      .pipe(catchError(this.handleError));
  }
  previousPage(page) {
    return this.http
      .get(`${this.WP_API}/posts?page=${page}&per_page=6`)
      .pipe(catchError(this.handleError));
  }
}