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
import { ValorOperacion } from './valores-operacion';
import { Encargo } from './encargo';
import { TipoRetiro } from './tipo-retiro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends FormComponent implements OnInit {
  mostrarEncargos: Boolean = true;
  saldoTotal: 2292877.93;
  saldoCanje: 0.00;
  aportesSinHistoria: 0.00;
  disponiblePortafolioEstable: 2292877.93;
  disponibleConsolidado: 0.00;
  tipoRetiro: TipoRetiro = {
    codigo: "",
    nombre: "",
    tpmv: "",
    nombreTpmv: ""
  };
  displayedColumns: string[] = ['Nombre', 'Valor'];
  valoresOperacion: ValorOperacion[] = [
    {
      nombre: "Contribución Especial",
      valor: 0
    },
    {
      nombre: "Retención en la Fuente",
      valor: 0
    },
    {
      nombre: "Rete. En La Fuente Capital",
      valor: 0
    },
    {
      nombre: "Retención Contingente",
      valor: 0
    },
    {
      nombre: "Costos de Operación",
      valor: 0
    },
    {
      nombre: "Iva Costos de Operación",
      valor: 0
    },
    {
      nombre: "Costos Bancarios",
      valor: 0
    },
    {
      nombre: "Comisión por Retiro",
      valor: 0
    },
    {
      nombre: "Rendimientos",
      valor: 31744.22
    }];
  total:number = 0;
  cuenta: Cuenta = {
    codigoBanco: "",
    nombreBanco: "",
    numero: "",
    tipo: ""
  };
  nroCheque: number = 6000123;
  beneficiario: Beneficiario = {
    identificacion: "",
    tipoId: "",
    descripcion: "",
    digito: ""
  }
  saldo: Saldo = {
    total: 2999251.03,
    enCanje: 0.00,
    aportesSinHistoria: 0.00,
    disponiblePortafolioEstable: 2969258.51
  };
  subcuentas: SubCuenta[] = [{
    codigo: 1,
    descripcion: "FUNCIONARIO",
    permiteRetiros: "S",
    saldoTotal: 2292877.93,
    saldoCanje: 0.00,
    aportesSinHistoria: 0.00,
    disponiblePortafolioEstable: 2292877.93,
    disponibleConsolidado: 0.00,
    valorARetirar: 0,
  }];
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
  valor: string = "0";
  nroVolante: string = "";
  fondoExterno: object = {
    "nit": "",
    "nombre": ""
  };
  formaPago: object = {
    "id": "CH",
    "descripcion": "Cheque"
  };
  operacionesGratis: number = 2;
  condicionPensionado: string = "N";
  observaciones: string = "RETIRO EXENTO (COMISION RECAUDO)";
  fecha: Date = new Date();
  myControl = new FormControl();
  encargosControl = new FormControl();
  tRetiroControl = new FormControl();
  terceroControl = new FormControl();
  cPagadoraControl = new FormControl();
  fPagoControl = new FormControl();
  ciudades: any = [];
  encargos: any = [];
  retiros: any = [];
  terceros: any = [];
  cuentasPagadoras: any = [];
  formasPago: any = [];
  filteredTipoRetiro: Observable<string[]>;
  filteredOptions: Observable<string[]>;
  filteredEncargos: Observable<string[]>;
  filteredTerceros: Observable<string[]>;
  filteredCPagadoras: Observable<string[]>;
  filteredFPago: Observable<string[]>;
  showResumen: Boolean = false;
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
    this.apiService.getRetiros().subscribe((data) => {
      this.retiros = data;
      this.filteredTipoRetiro = this.tRetiroControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterTipoRetiro(value))
      );
    });
    this.apiService.getTerceros().subscribe((data) => {
      this.terceros = data;
      this.filteredTerceros = this.terceroControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterTercero(value))
      );
    });
    this.apiService.getCuentasPagadoras().subscribe((data) => {
      this.cuentasPagadoras = data;
      this.filteredCPagadoras = this.cPagadoraControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterCPagadora(value))
      );
    });
    this.apiService.getFormasPago().subscribe((data) => {
      this.formasPago = data;
      this.filteredFPago = this.fPagoControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterFPago(value))
      );
    });
  }

  onKeydown(event, index) {
    if (index + 1 < this.navegacion.length) {
      //this.renderer.invokeElementMethod(this.navegacion[index + 1]._elementRef.nativeElement, 'focus');
    }
  }
  afectarAportes(): void {
    this.showResumen = true;
  }
  valorARetirar(): number {
    let prueba = this.subcuentas.map(t => Number(t.valorARetirar)).reduce((acc, value) => acc + value, 0);
    this.total = prueba;
    return prueba;
  }
  valorRestante(): number {
    return Number(this.valor) - this.valorARetirar();
  }
  select(event, option) {
    if (event.source.selected) this.oficina = option;
  }

  selectEncargo(event, option) {
    if (event.source.selected) { 
      this.encargo = option;
      this.mostrarEncargos = false;
     }

  }
  selectTipoRetiro(event, option) {
    if (event.source.selected) this.tipoRetiro = option;
  }
  selectTercero(event, option) {
    if (event.source.selected) this.beneficiario = option;
  }
  selectCPagadora(event, option) {
    if (event.source.selected) this.cuenta = option;
  }
  selectFPago(event, option) {
    if (event.source.selected) this.formaPago = option;
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ciudades.filter(option => option.codigo.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterFPago(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.formasPago.filter(option => (option.id + ' - ' + option.descripcion).toLowerCase().indexOf(filterValue) !== -1);
  }

  private _filterEncargos(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.encargos.filter(option => option.numero.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterTipoRetiro(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.retiros.filter(option => (option.codigo + ' - ' + option.nombre).toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterTercero(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.terceros.filter(option => option.identificacion.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterCPagadora(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cuentasPagadoras.filter(option => option.numero.toLowerCase().indexOf(filterValue) === 0);
  }
  getTotalCost(): number {
    return this.total;
  }
}

