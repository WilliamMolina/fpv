import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, Renderer } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from './api.service';
import { FormComponent } from './form.component';
import { Oficina } from './oficina';
import { Saldo } from './saldo';
import { SubCuenta } from './subcuenta';
import { Beneficiario } from './beneficiario';
import { Cuenta } from './cuenta';
import { ValoresOperacion } from './valores-operacion';
import { Encargo } from './encargo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends FormComponent implements OnInit {
  valoresOperacion: ValoresOperacion = {
    contribucionEspecial: 0,
    retencionFuente: 0,
    retencionFuenteCapital: 0,
    retencionContingente: 0,
    costosOperacion: 0,
    ivaCostosOperacion: 0,
    costosBancarios: 0,
    comisionRetiro: 0,
    rendimientos: 31744.22,
    totalOperacion: 856000
  };

  cuenta: Cuenta = {
    codigoBanco: "23",
    nombreBanco: "BANCO DE OCCIDENTE",
    numero: "270063696",
    tipo: "CUENTA CORRIENTE",
    nroCheque: "600001"
  }
  beneficiario: Beneficiario = {
    identificacion: "79435173",
    tipoId: "C",
    descripcion: "JUAN LOPEZ PEREZ",
    digito: "0"
  }
  saldo: Saldo = {
    total: 2999251.03,
    enCanje: 0.00,
    aportesSinHistoria: 0.00,
    disponiblePortafolioEstable: 2969258.51
  };
  subcuentas: SubCuenta[] = [
    {
      codigo: 1,
      descripcion: "FUNCIONARIO",
      permiteRetiros: "S",
      saldoTotal: 2292877.93,
      saldoCanje: 0.00,
      aportesSinHistoria: 0.00,
      disponiblePortafolioEstable: 2292877.93,
      disponibleConsolidado: 0.00,
      valorARetirar: 856000,
    }
  ];
  user: string = "KMEDINA";
  username: string = "KAREN MEDINA"
  oficina: Oficina = { "codigo": "30", "nombre": "BOGOTÁ - MORATO" };
  fondo: object = { "codigo": "300", "nombre": "Fondo de Pensiones Voluntarias Visión" };
  encargo: Encargo = {
    numero: "",
    codigoVerificacion: null,
    persona: "",
    identificacion: "",
    nombre: "",
    codigoPlanInversion: "",
    nombrePlanInversion: "",
    saldo: {
      total: null,
      enCanje: null,
      aportesSinHistoria: null,
      disponiblePortafolioEstable: null
    }
  };
  retiro: object = {
    "codigo": "RESD",
    "nombre": "RETIROS SIN DESCUENTOS",
    "tipoMvto": "385",
    "nombreMvto": "RETIRO EXENTO (COMISION RECAUDO)"
  };
  valor: string = "856000";
  nroVolante: string = "";
  fondoExterno: object = {
    "nit": "123453223",
    "nombre": "FONDO EXTERNO"
  };
  formaPago: object = {
    "codigo": "CH",
    "nombre": "Cheque",
    "operacionesGratis": 2,
    "condicionPensionado": "N"
  };
  observaciones: string = "RETIRO EXENTO (COMISION RECAUDO)";
  fecha: Date = new Date();
  myControl = new FormControl();
  encargosControl = new FormControl();
  ciudades: any = [];
  encargos: any = [];
  filteredOptions: Observable<string[]>;
  filteredEncargos: Observable<string[]>;
  constructor(protected renderer: Renderer, private apiService: ApiService) {
    super(renderer);
  }
  ngOnInit() {
    this.myControl.setValue(this.oficina.codigo);
    this.apiService.getNews().subscribe((data) => {
      this.ciudades = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
    this.apiService.getEncargos().subscribe((data) => {
      this.encargos = data;
      this.filteredEncargos = this.encargosControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterEncargos(value))
      );
    });
  }

  onKeydown(event, index) {
    if (index + 1 < this.navegacion.length) {
      //this.renderer.invokeElementMethod(this.navegacion[index + 1]._elementRef.nativeElement, 'focus');
    }
  }
  select(event, option) {
    if (event.source.selected) this.oficina = option;
  }

  selectEncargo(event, option) {
    if (event.source.selected) this.encargo = option;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ciudades.filter(option => option.codigo.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterEncargos(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.encargos.filter(option => option.numero.toLowerCase().indexOf(filterValue) === 0);
  }
}

