import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8080/fpv/ciudades", {headers});
  }
}