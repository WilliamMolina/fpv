import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public getNews() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8034/maestras/oficinas", {headers});
    /*return of([
      {
        "codigo": "30",
        "nombre": "BOGOTÁ - MORATO"
      },
      {
        "codigo": "31",
        "nombre": "Bogotá"
      },
      {
        "codigo": "32",
        "nombre": "Medellín"
      },
      {
        "codigo": "33",
        "nombre": "Barranquilla"
      }
    ])*/
  }

  public getEncargos() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8034/maestras/encargos", {headers});
    /*return of([
      {
        "numero": "600010035",
        "codigoVerificacion": 9,
        "persona": "EDGAR FABIAN TORRES SANCHEZ",
        "identificacion": "79435173",
        "nombre": "EDGAR FABIAN TORRES SANCHEZ",
        "codigoPlanInversion": "1",
        "nombrePlanInversion": "ABIERTO VISION -INDIVIDUALES",
        "saldo": {
          "total": 2999251.03,
          "enCanje": 0.00,
          "aportesSinHistoria": 0.00,
          "disponiblePortafolioEstable": 2969258.51
        }
      },
      {
        "numero": "600010034",
        "codigoVerificacion": 7,
        "persona": "WILLIAM DARIO MOLINA ARDILA",
        "identificacion": "1152700319",
        "nombre": "WILLIAM DARIO MOLINA ARDILA",
        "codigoPlanInversion": "1",
        "nombrePlanInversion": "ABIERTO VISION -INDIVIDUALES",
        "saldo": {
          "total": 3999251.03,
          "enCanje": 0.00,
          "aportesSinHistoria": 0.00,
          "disponiblePortafolioEstable": 3969258.51
        }
      }
    ])*/
  }
  public retirar() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.httpClient.post("http://localhost:8034/maestras/retiros", {headers});
  }
  public getRetiros() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8034/maestras/tiposretiro", {headers});
    /*return of([
      {
        "codigo": "AFCE",
        "nombre": "TRASLADO  AFC O FONDO EXTERNO",
        "tpmv": "297",
        "nombreTpmv": ""
      },
      {
        "codigo": "CVCH",
        "nombre": "COMPRA DE VIVIENDA Y/O CUOTA CRÉDITO HIPOTECARIO",
        "tpmv": "297",
        "nombreTpmv": ""
      },
      {
        "codigo": "EXRA",
        "nombre": "SOLO APORTES EXENTOS DEL MÁS RECIENTE AL MÁS ANTIGUO",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "RCAR",
        "nombre": "SOLO APORTES CON RC DESDE MÁS ANTIGUO AL MÁS RECIENTE",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "RCRA",
        "nombre": "SOLO APORTES CON RC DESDE MÁS RECIENTE AL MÁS ANTIGUO",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "RESD",
        "nombre": "RETIROS SIN DESCUENTOS",
        "tpmv": "385",
        "nombreTpmv": "RETIRO EXCENTO (COMISIÓN RECAUDO)"
      },
      {
        "codigo": "SIBT",
        "nombre": "RETIRO ÓPTIMO SIN REQUISITOS DE LEY PARA BENEFICIO",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "SMAN",
        "nombre": "SELECCIÓN MANUAL DE APORTES",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "SRCA",
        "nombre": "SOLO APORTES SIN RC DEL MÁS ANTIGUO AL MÁS RECIENTE",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "SRCR",
        "nombre": "SOLO APORTES SIN RC DEL MÁS RECIENTE AL MÁS ANTIGUO",
        "tpmv": "51",
        "nombreTpmv": ""
      },
      {
        "codigo": "TPMT",
        "nombre": "TRASLADO A PREVENTAS MISMO TITULAR",
        "tpmv": "299",
        "nombreTpmv": ""
      }
    ])*/
  }
  public getTerceros() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    //return this.httpClient.get("http://localhost:8080/fpv/terceros.json", {headers});
    return of([
      {
        "identificacion": "79435173",
        "tipoId": "C",
        "descripcion": "JUAN LOPEZ PEREZ",
        "digito": "0"
      },
      {
        "identificacion": "1152700319",
        "tipoId": "C",
        "descripcion": "WILLIAM MOLINA",
        "digito": "0"
      },
      {
        "identificacion": "1112223334",
        "tipoId": "C",
        "descripcion": "DARIO ARDILA",
        "digito": "0"
      }
    ])
  }
  public getCuentasPagadoras() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    //return this.httpClient.get("http://localhost:8080/fpv/cuentaspagadoras.json", {headers});
    return of([
      {
        "numero": "270063696",
        "tipo": "CUENTA CORRIENTE",
        "codigoBanco": "23",
        "nombreBanco": "BANCO DE OCCIDENTE"
      },
      {
        "numero": "270063697",
        "tipo": "CUENTA CORRIENTE",
        "codigoBanco": "23",
        "nombreBanco": "BANCO DE OCCIDENTE"
      }
    ])
  }
  public getFormasPago() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.httpClient.get("http://localhost:8034/maestras/formaspago", { headers });
    /*return of([
      {
          "id": "TE",
          "descripcion": "Traslado a encargos relacionados"
      },
      {
          "id": "TS",
          "descripcion": "Traslado a encargos no relacionados"
      },
      {
          "id": "TC",
          "descripcion": "Traslado a cuentas relacionadas"
      },
      {
          "id": "TN",
          "descripcion": "Traslado a cuentas no relacionadas"
      },
      {
          "id": "ON",
          "descripcion": "Obligaciones no relacionadas"
      },
      {
          "id": "OR",
          "descripcion": "Obligaciones relacionadas"
      },
      {
          "id": "CH",
          "descripcion": "Cheque"
      },
      {
          "id": "QG",
          "descripcion": "Cheque Gerencia"
      },
      {
          "id": "DA",
          "descripcion": "Dev. aportes no consolidados patrocinadora"
      },
      {
          "id": "PC",
          "descripcion": "Dev. aportes patrocinadora"
      }
  ])*/
  }
}