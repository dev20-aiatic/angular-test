import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/profile')
  }
  getProfileBySkill(skill_Id) {
    return this.httpClient.get('http://localhost:3000/profile/skill/' + skill_Id)
  }
  getProfileByQuery(query) {
    return this.httpClient.get('http://localhost:3000/profile/byQuery/' + query)
  }
  insert(profile: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/profile', profile);
  }
  update(profile: object): Observable<any> {
    return this.httpClient.put('http://localhost:3000/profile/' + profile['id'], profile);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/profile/' + id);
  }
}

