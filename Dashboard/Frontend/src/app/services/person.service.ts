import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/person')
  }
  getPersonBySkill(categoryId) {
    return this.httpClient.get('http://localhost:3000/person/category/' + categoryId)
  }
  getPersonByQuery(query) {
    return this.httpClient.get('http://localhost:3000/person/byQuery/' + query)
  }
  insert(person: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/person', person);
  }
  update(person: object): Observable<any> {
    return this.httpClient.put('http://localhost:3000/person/' + person['id'], person);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/person/' + id);
  }
}

