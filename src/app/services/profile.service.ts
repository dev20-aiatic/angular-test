import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: Profile[];
  api = 'http://localhost:5000/api'

  constructor(public httpClient: HttpClient) { 
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/profile')
  }

  /**Metodo  encontrar perfil por id de usuario */

  getProfile(id: string | number){
    return this.httpClient.get(`${this.api}/user/profile/user_Id=${id}`)
  }
  getProfileByUser(user_id) {
    return this.httpClient.get('http://localhost:3000/profile/user/' + user_id)
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

