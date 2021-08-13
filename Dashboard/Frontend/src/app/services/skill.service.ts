import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/skills')
  }
  getSkillsByQuery(query) {
    return this.httpClient.get('http://localhost:3000/skills/byQuery/' + query)
  }
  insert(skill: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/skills', skill);
  }
  update(skill: object): Observable<any> {
    return this.httpClient.put('http://localhost:3000/skills/' + skill['id'], skill);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/skills/' + id);
  }
} 