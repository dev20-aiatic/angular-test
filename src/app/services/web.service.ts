import { Observable } from 'rxjs';
import { Locations } from '../interfaces/Locations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class WebService {

  private location: Locations = { region: "",  c_digo_dane_del_departamento: 68, departamento: "", c_digo_dane_del_municipio: 68, municipio: ""}
  private locationsUrl= "https://www.datos.gov.co/resource/xdk5-pm3f.json"; //Url Json Locations

 

constructor(private http: HttpClient) {
 }

 //Definimos un método get para extraer los datos del json en github

 public getLocation(): Observable<Locations>{
   return this.http.get<Locations>(this.locationsUrl);
 }

}
