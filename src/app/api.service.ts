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
    //return this.httpClient.get("http://localhost:8034/maestras/oficinas", {headers});
    return of({
      "status": "OK",
      "data": [
          {
              "id": 10,
              "nombre": "MEDELLIN"
          },
          {
              "id": 20,
              "nombre": "CALI"
          },
          {
              "id": 30,
              "nombre": "BOGOTA- COUNTRY"
          },
          {
              "id": 40,
              "nombre": "BARRANQUILLA"
          },
          {
              "id": 41,
              "nombre": "PREVENTAS MEDELLIN"
          },
          {
              "id": 43,
              "nombre": "PREVENTAS BOGOTA"
          },
          {
              "id": 44,
              "nombre": "PREVENTAS CALI"
          },
          {
              "id": 70,
              "nombre": "MANIZALES"
          },
          {
              "id": 80,
              "nombre": "BUCARAMANGA"
          },
          {
              "id": 90,
              "nombre": "PEREIRA"
          },
          {
              "id": 100,
              "nombre": "BOGOTA MESA PAGOS"
          },
          {
              "id": 101,
              "nombre": "BTA MESA FIDEICOMISOS"
          }
      ]
  })
  }

  public getEncargos() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    //return this.httpClient.get("http://localhost:8034/maestras/encargos", {headers});
    return of({
      "status": "OK",
      "data": [
          {
              "fondo": 300,
              "plan": 60064010882,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60027000233,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60064010895,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60010000066,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60002000149,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60002000166,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60001000243,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003000284,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003000355,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003000437,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003000453,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60028001043,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60001001080,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001088,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60028001111,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60028001122,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60028001123,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60030011762,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001204,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001304,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001326,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001391,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60001001459,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001516,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003001524,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041001816,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041001852,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041001855,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041001862,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041001867,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041001888,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003002050,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002063,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002123,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003002154,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002182,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60003002218,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002252,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002280,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002282,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002285,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60030011669,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002320,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60064010855,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60049002371,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002416,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60010002420,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002428,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60044002444,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60041002464,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60001002478,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002505,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002518,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002525,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002527,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002530,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002533,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002526,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002539,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002541,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002543,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002545,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002546,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002551,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60055002620,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002728,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002746,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002748,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60057002823,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002844,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002899,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002903,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002934,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002940,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002987,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002988,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050002989,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003014,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003020,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60001003023,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003026,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003030,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003038,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003043,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60062003064,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60062003069,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003091,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003093,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003094,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003104,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003103,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60057003114,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60057003115,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003123,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003127,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003128,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003137,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003152,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60001003158,
              "estado": "ACT"
          },
          {
              "fondo": 300,
              "plan": 60050003381,
              "estado": "ACT"
          }
      ]
  })
  }
  public retirar() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.httpClient.post("http://localhost:8034/maestras/retiros", {headers});
  }
  public getRetiros() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    //return this.httpClient.get("http://localhost:8034/maestras/tiposretiro", {headers});
    return of({
      "status": "OK",
      "data": [
          {
              "codigo": "RESD",
              "nombre": "Retiros sin descuentos",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1519301457000,
              "tpreUsuamod": "EQUINTERO",
              "tpreFecmod": 1554137192000,
              "tipoMovimiento": {
                  "id": 385,
                  "descripcion": "REVERSIÓN UTILIDAD VENTA POR CESIÓN"
              }
          },
          {
              "codigo": "SIBT",
              "nombre": "Retiro Óptimo sin requisitos de ley para beneficio",
              "tpreDefault": "S",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330085000,
              "tpreUsuamod": "EQUINTERO",
              "tpreFecmod": 1554137168000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          },
          {
              "codigo": "AFCE",
              "nombre": "Traslado  AFC o Fondo Externo",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330085000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 297,
                  "descripcion": "RETIRO POR TRASLADOS CON GMF NO PENALIZA CGNTE"
              }
          },
          {
              "codigo": "RCAR",
              "nombre": "Solo aportes con RC desde más antiguo al más reciente",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          },
          {
              "codigo": "RCRA",
              "nombre": "Solo aportes con RC desde más reciente al más antiguo",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "JMONTANO",
              "tpreFecmod": 1539266340000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          },
          {
              "codigo": "SRCA",
              "nombre": "Solo aportes sin RC del más antiguo al más reciente",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          },
          {
              "codigo": "SRCR",
              "nombre": "Solo aportes sin RC del más reciente al más antiguo",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          },
          {
              "codigo": "EXRA",
              "nombre": "Solo aportes exentos del más reciente al más antiguo",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          },
          {
              "codigo": "CVCH",
              "nombre": "Compra de Vivienda y/o Cuota Crédito Hipotecario",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 297,
                  "descripcion": "RETIRO POR TRASLADOS CON GMF NO PENALIZA CGNTE"
              }
          },
          {
              "codigo": "TPMT",
              "nombre": "Traslado a Preventas Mismo Titular",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 299,
                  "descripcion": "RETIRO POR TRASLADOS (NO PENALIZA CGNTE)"
              }
          },
          {
              "codigo": "SMAN",
              "nombre": "Selección Manual de Aportes",
              "tpreDefault": "N",
              "tpreEstado": "A",
              "tpreUsuacre": "VU_SFI",
              "tpreFeccre": 1515330086000,
              "tpreUsuamod": "KMEDINA",
              "tpreFecmod": 1515418277000,
              "tipoMovimiento": {
                  "id": 51,
                  "descripcion": "REVERSO RETENCION CONTINGENTE POR ANULACION"
              }
          }
      ]
  })
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
    //return this.httpClient.get("http://localhost:8034/maestras/formaspago", { headers });
    return of({
      "status": "OK",
      "data": [
          {
              "id": "TM",
              "descripcion": "PAGO TARJETA MONEDERO",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "O",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TV",
              "descripcion": "TRASLADO INTERNO - DIVISAS",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 30,
              "fpagTpmvSiaf": 83,
              "fpagFrrk": 3,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "CQ",
              "descripcion": "CHEQUE FIDUCOR",
              "fpagOrigina": "EF",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "QF",
              "descripcion": "CHEQUE GERENCIA FIDUCOR",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TD",
              "descripcion": "TRASLADO ACH FIDUCOR",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TB",
              "descripcion": "TRASLADOS A CTAS (SIN FDO LIQUIDEZ)",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "S",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "SE",
              "descripcion": "TRASLADO VIA SEBRA",
              "fpagOrigina": "TI",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": 5,
              "fpagExtGmf": null
          },
          {
              "id": "DA",
              "descripcion": "DEVOLUCIÓN APORTES NO CONSOLIDADOS PATROCINADORA",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "BB",
              "descripcion": "BANCO - BANCO",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": null,
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "BS",
              "descripcion": "BANCO - SEBRA",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": null,
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "CW",
              "descripcion": "Cheque",
              "fpagOrigina": "CH",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TW",
              "descripcion": "TRASLADO A CTAS RELACIONADAS-WEB",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "S",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "EW",
              "descripcion": "TRASLADO A ENCARGOS RELACIONADOS-WEB",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 30,
              "fpagTpmvSiaf": 83,
              "fpagFrrk": 3,
              "fpagVafi": "S",
              "fpagInsctas": "S",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TF",
              "descripcion": "TRASLADO A ENCARGOS NO RELACIONADOS FASA",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 30,
              "fpagTpmvSiaf": 83,
              "fpagFrrk": 3,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "EF",
              "descripcion": "AJUSTES - PSE",
              "fpagOrigina": "EF",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "SS",
              "descripcion": "SEBRA - SEBRA",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": null,
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "OR",
              "descripcion": "OBLIGACIONES RELACIONADAS",
              "fpagOrigina": "TC",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "O",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "S",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "ON",
              "descripcion": "OBLIGACIONES NO RELACIONADAS",
              "fpagOrigina": "TC",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "O",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TI",
              "descripcion": "**ELIMINAR*******",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TO",
              "descripcion": "TRASLADO MATRIZ A ENC INDIVIDUAL",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 90,
              "fpagTpmvSiaf": 383,
              "fpagFrrk": 3,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "SV",
              "descripcion": "RETIRO SERVIBANCA",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "O",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "QG",
              "descripcion": "Cheque Gerencia.",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "CH",
              "descripcion": "Cheque",
              "fpagOrigina": "CH",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "CT",
              "descripcion": "******ELIMINAR******",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "SB",
              "descripcion": "SEBRA - BANCOS",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": null,
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": null,
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TC",
              "descripcion": "TRASLADO A CTAS RELACIONADAS",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "S",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TN",
              "descripcion": "TRASLADOS A CUENTAS NO RELACIONADAS",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "S",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TS",
              "descripcion": "TRASLADO A ENCARGOS NO RELACIONADOS",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 30,
              "fpagTpmvSiaf": 83,
              "fpagFrrk": 3,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TE",
              "descripcion": "TRASLADO A ENCARGOS RELACIONADOS",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 30,
              "fpagTpmvSiaf": 83,
              "fpagFrrk": 3,
              "fpagVafi": "S",
              "fpagInsctas": "S",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TG",
              "descripcion": "TRANSFERENCIAS GENERALES",
              "fpagOrigina": "TI",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": "A",
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "ESP",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "QE",
              "descripcion": "CHEQUE ELECTRÓNICO SUPER ASTRO",
              "fpagOrigina": "NA",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": null,
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": null,
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "PE",
              "descripcion": "PAGO EN EFECTIVO- OFICINA BANCO",
              "fpagOrigina": "EF",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "S",
              "fpagDocRef": null,
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "S",
              "fpagTpcta": "P",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "GB",
              "descripcion": "CHEQUE GERENCIA - OFICINA BANCO",
              "fpagOrigina": "CG",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "S",
              "fpagDocRef": "S",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "N",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": 2,
              "fpagExtGmf": null
          },
          {
              "id": "DC",
              "descripcion": "DEBITO CUENTA (CARTA)",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "S",
              "fpagBancdest": "S",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": "C",
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "S",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "PC",
              "descripcion": "DEVOLUCION APORTES PATROCINADORA CHEQUE",
              "fpagOrigina": "CH",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "A",
              "fpagTptras": null,
              "fpagTpmvTeso": null,
              "fpagTpmvSiaf": null,
              "fpagFrrk": null,
              "fpagVafi": "S",
              "fpagInsctas": "N",
              "fpagFmaCupl": "NA",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "S",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": null,
              "fpagExtGmf": null
          },
          {
              "id": "TT",
              "descripcion": "TRASLADO A ENCARGOS X CTA PROPIA",
              "fpagOrigina": "TR",
              "fpagModenti": "N",
              "fpagCtaben": "N",
              "fpagBancdest": "N",
              "fpagDocRef": "N",
              "fpagStatus": null,
              "fpagUser": null,
              "fpagFeccre": null,
              "fpagUserMod": null,
              "fpagFemod": null,
              "fpagOperEfec": "N",
              "fpagTpcta": "N",
              "fpagTptras": "E",
              "fpagTpmvTeso": 30,
              "fpagTpmvSiaf": 1,
              "fpagFrrk": 3,
              "fpagVafi": "N",
              "fpagInsctas": "S",
              "fpagFmaCupl": "GG",
              "fpagProcap": "OPE",
              "fpagObligaInpg": "N",
              "fpagInfNoti": "N",
              "fpagHoraAdic": null,
              "fpagHoraFin": null,
              "fpagWeb": "N",
              "fpagProc": null,
              "versionJava": 0,
              "fpagExtGmf": "N"
          }
      ]
  })
  }
}