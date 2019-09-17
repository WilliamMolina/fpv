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
    return this.httpClient.get("http://localhost:8080/fpv/oficinas.json", {headers});
  }

  public getEncargos(){
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8080/fpv/encargos.json", {headers});
  }
  public getRetiros(){
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8080/fpv/tiposretiro.json", {headers});
  }
  public getTerceros(){
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8080/fpv/terceros.json", {headers});
  }
  public getCuentasPagadoras(){
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8080/fpv/cuentaspagadoras.json", {headers});
  }
  public getFormasPago(){
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8080/fpv/formaspago.json", {headers});
  }
}