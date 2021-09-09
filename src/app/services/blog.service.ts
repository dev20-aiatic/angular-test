import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // URL del blog que vamos a trabajar con su REST API
  public URL = 'http://dev20.latiendasigueabierta.com/blog';
  public API = `${this.URL}wp-json/wp/v2/posts`;

constructor(private http: HttpClient) { }
  /**
   * Numero de post que quieres mostrar
   * @param id
   */  

   getAll(id: number) {
    return this.http.get(`${this.API}?_embed&per_page=${id}`);
  }

  /**
   * Slug del post que vamos a mostrar
   * @param id
   */
  getSinglePost(id: string) {
    return this.http.get(`${this.API}?_embed&slug=${id}`);
  }

}
