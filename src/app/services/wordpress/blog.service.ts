import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WP_User } from '../../interfaces/WP_User';
import * as moment from "moment";
import { Wp_Category } from '../../interfaces/WP_Category';

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

  getRecentPosts(categoryId: number, page: number = 1): Observable<any[]> {
    let category_url = categoryId? ("&categories=" + categoryId): "";
    let options = {
      observe: 'response' as 'body',
      params: {
        per_page: '4',
        page: '' + page,
        orderby:'modified',
        category_url
      },
    };

    return this.http.get<any[]>(`${this.WP_API}posts?_embed=true`, options).pipe(
      map((res) => {
        this.pages = res['headers'].get('x-wp-totalpages');
        this.allPosts = res['headers'].get('x-wp-total');
        return res['body'];
      }),
      catchError(this.handleError)
    );
  }
  getPost(id:any) {
    return this.http.get(`${this.WP_API}posts/${id}?_embed`).pipe(
      map((post) => {
        return post;
      })
    );
  }
  
  getComments(id:any) {
    return this.http.get(`${this.WP_API}comments?post=${id}`).pipe(
      map((post) => {
        return post;
      })
    );
  }

  getAuthor(author) {
    return this.http.get(`${this.WP_API}` + "users/" + author)
  }

  getPostCategories(post) {
    let observableBatch = [];
    post.categories.forEach((category: number) => {
      observableBatch.push();
    });

    return forkJoin(observableBatch);
  }

  getCategory(category: number) {
    return this.http.get(`${this.WP_API}` + "categories/" + category)
  }

  createComment(postId: number, user: any, comment: string) {
    let header: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ' + user.token);
    return this.http.post(`${this.WP_API}` + "comments?token=" + user.token, {
      author_name: user.displayname,
      author_email: user.email,
      post: postId,
      content: comment
    },{ headers: header })
  }
  createpost(data: any): Observable<any[]> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      }
    };
    return this.http.post<any[]>(`${this.WP_API}/posts`, data, options).pipe(
      catchError(this.handleError)
    );
  }


  updatepost(id: any, data: any): Observable<any> {
    let options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      }
    };
    return this.http.put(`${this.WP_API}/posts/${id}?_embed`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  deletepost(id:any): Observable<any> {
    let options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wp-token'),
      }
    };
    return this.http.delete(`${this.WP_API}/posts/${id}`, options).pipe(
      catchError(this.handleError)
    );
  }

  nextPage(page) {
    return this.http
      .get(`${this.WP_API}/posts?page=${(page)}&per_page=6`)
      .pipe(catchError(this.handleError));
  }
  previousPage(page) {
    return this.http
      .get(`${this.WP_API}/posts?page=${(page)}&per_page=6`)
      .pipe(catchError(this.handleError));
  }




}
