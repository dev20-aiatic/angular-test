import { Observable } from 'rxjs';
import { Locations } from '../interfaces/Locations';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class WebService {

  locationsUrl:string;

constructor(private http: HttpClient) {
  //this.locationsUrl= "https://www.datos.gov.co/resource/xdk5-pm3f.json"; //Url Json Municipios y Departamentos Colombia
  this.locationsUrl = "https://raw.githubusercontent.com/valer0ck/departamentos-ciudades-colombia/master/ciudades.json" //Url Json Municipios y Departamentos Colombia
}

 //Definimos un método get para extraer los datos del json

 public getDepartments(): Promise<Locations>{
   return this.http.get<Locations>(`${this.locationsUrl}`).toPromise();
 }


}
