import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
//La ruta de autenticación del plugin wordpress
APP_API: string = environment.APP_REST.API;
  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.APP_API}/skills`)
  }
  getSkillsByQuery(query) {
    return this.httpClient.get(`${this.APP_API}/skills/byQuery/` + query)
  }
  insert(skill: object): Observable<any> {
    return this.httpClient.post(`${this.APP_API}/skills`, skill);
  }
  update(skill: object): Observable<any> {
    return this.httpClient.put(`${this.APP_API}/skills/` + skill['id'], skill);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.APP_API}/skills/` + id);
  }
} 