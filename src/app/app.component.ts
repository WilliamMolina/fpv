import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, Renderer } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
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
import { MatDialog } from '@angular/material';
import { AportesAfectadosComponent } from './dialogs/aportes-afectados/aportes-afectados.component';
import { AporteAfectado } from './models/aporte-afectado';
import { SeleccionManualComponent } from './dialogs/seleccion-manual/seleccion-manual.component';
import { HttpResponse } from './models/HttpResponse';
import { AlertService } from './common/services/alert.service';
import { FormCustomValidators } from './common/validators/form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends FormComponent implements OnInit {
  aportesAfectados: AporteAfectado[] = [
    {
      nroAporte: "332",
      fechaAporte: new Date(),
      opcion: '1',
      sbota: '2',
      valorAporte: 2000000,
      saldoAporte: 2000900,
      saldoRendimientos: 1423.12,
      liberaCntge: 'NO',
      rfteEstimadaCapital: 0,
      comiRetiroAnticipado: 0,
      valorDisponible: 0,
      saldoRetencion: 0,
      valorEgreso: 2000000,
      valorTotalEgreso: 2000000,
      feteFuenteEstimada: 0,
      costosOperacion: 900,
      rendimientosARetirar: 1423.12,
      reteFuenteCapital: 0,
      reteFuenteAPracticar: 0,
      contingenteAPracticar: 0,
      comiRetAntiA: 0
    },
    {
      nroAporte: "4",
      fechaAporte: new Date(),
      opcion: '1',
      sbota: '2',
      valorAporte: 4000000,
      saldoAporte: 3900000,
      saldoRendimientos: 400000,
      liberaCntge: 'NO',
      rfteEstimadaCapital: 0,
      comiRetiroAnticipado: 0,
      valorDisponible: 3900000,
      saldoRetencion: 0,
      valorEgreso: 3000000,
      valorTotalEgreso: 3000000,
      feteFuenteEstimada: 0,
      costosOperacion: 900,
      rendimientosARetirar: 1423.12,
      reteFuenteCapital: 0,
      reteFuenteAPracticar: 0,
      contingenteAPracticar: 0,
      comiRetAntiA: 0
    }
  ];
  animal: string;
  name: string;
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
  total: number = 0;
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
  subcuentas: SubCuenta[] = [];
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
    "descripcion": ""
  };
  operacionesGratis: number = 2;
  condicionPensionado: string = "N";
  observaciones: string = "RETIRO EXENTO (COMISION RECAUDO)";
  fecha: Date = new Date();
  fpvform: FormGroup;
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
  constructor(protected renderer: Renderer, private apiService: ApiService, private alertService: AlertService, public dialog: MatDialog, private _formBuilder: FormBuilder) {
    super(renderer);
  }
  ngOnInit() {

    this.fpvform = this._formBuilder.group({
      valor: new FormControl('', [Validators.required]),
      oficinaCtrl: new FormControl('', []),
      encargosCtrl: new FormControl(),
      tRetiroControl: new FormControl(),
      terceroControl: new FormControl(),
      cPagadoraControl: new FormControl(),
      fPagoControl: new FormControl(),
      codigoVerificacion: new FormControl('', [Validators.required]),
      nroVolante: new FormControl(),
      fondoExternoNit: new FormControl(),
      subcuentasArray: this._formBuilder.array([]),
      subcuentaControl: new FormControl()
    });

    this.apiService.getNews().subscribe((data: HttpResponse) => {
      this.ciudades = data.data;
      this.oficinaCtrl.setValidators([Validators.required, FormCustomValidators.valueSelected(this.ciudades)]);
      this.filteredOptions = this.fpvform.get('oficinaCtrl').valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      if (this.ciudades.length > 0) {
        this.fpvform.get('oficinaCtrl').setValue(this.ciudades[0].id);
        this.oficina = this.ciudades[0];
      }
    });
    this.apiService.getEncargos().subscribe((data: HttpResponse) => {
      this.encargos = data.data;
      this.encargosCtrl.setValidators([
        Validators.required,
        FormCustomValidators.valueSelected(this.encargos, 'plan')
      ]);

      this.filteredEncargos = this.fpvform.get('encargosCtrl').valueChanges.pipe(
        startWith(''),
        map(value => this._filterEncargos(value))
      );
    });
    this.apiService.getRetiros().subscribe((data: HttpResponse) => {
      this.retiros = data.data;
      this.tRetiroControl.setValidators([
        Validators.required,
        FormCustomValidators.valueSelected(this.retiros, 'codigo')
      ]);
      this.tRetiroControl.updateValueAndValidity();
      this.filteredTipoRetiro = this.fpvform.get('tRetiroControl').valueChanges.pipe(
        startWith(''),
        map(value => this._filterTipoRetiro(value))
      );
    });
    this.apiService.getTerceros().subscribe((data) => {
      this.terceros = data;
      this.terceroControl.setValidators([
        Validators.required,
        FormCustomValidators.valueSelected(this.terceros, 'identificacion')
      ]);
      this.terceroControl.updateValueAndValidity();
      this.filteredTerceros = this.fpvform.get('terceroControl').valueChanges.pipe(
        startWith(''),
        map(value => this._filterTercero(value))
      );
    });
    this.apiService.getCuentasPagadoras().subscribe((data) => {
      this.cuentasPagadoras = data;
      this.cPagadoraControl.setValidators([
        Validators.required,
        FormCustomValidators.valueSelected(this.cuentasPagadoras, 'numero')
      ]);
      this.cPagadoraControl.updateValueAndValidity();
      this.filteredCPagadoras = this.fpvform.get('cPagadoraControl').valueChanges.pipe(
        startWith(''),
        map(value => this._filterCPagadora(value))
      );
    });
    this.apiService.getFormasPago().subscribe((data: HttpResponse) => {
      this.formasPago = data.data;
      this.fPagoControl.setValidators([
        Validators.required,
        FormCustomValidators.valueSelected(this.formasPago)
      ]);
      this.fPagoControl.updateValueAndValidity();
      this.filteredFPago = this.fpvform.get('fPagoControl').valueChanges.pipe(
        startWith(''),
        map(value => this._filterFPago(value))
      );
    });
  }

  limpiarCampos(): void {
    this.encargo = {
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
    this.oficina = { "codigo": "30", "nombre": "BOGOTÁ - MORATO" };
    this.tipoRetiro = {
      codigo: "",
      nombre: "",
      tpmv: "",
      nombreTpmv: ""
    };
    this.beneficiario = {
      identificacion: "",
      tipoId: "",
      descripcion: "",
      digito: ""
    };
    this.cuenta = {
      codigoBanco: "",
      nombreBanco: "",
      numero: "",
      tipo: ""
    };
    this.formaPago = {
      "id": "CH",
      "descripcion": ""
    };
  }
  afectarAportes(): void {
    this.showResumen = true;
  }
  valorARetirar(): number {
    let prueba = this.sa.controls.map(t => this.valorNumerico(t.get('value').value)).reduce((acc, value) => acc + value, 0);
    this.total = prueba;
    return prueba;
  }
  valorRestante(): number {
    let valor = this.fpvform.get('valor').value;
    return this.valorNumerico(valor) - this.valorARetirar();
  }
  select(event, option) {
    if (event.source.selected) this.oficina = option;
  }
  valorNumerico(val: any) {
    const numberChars = new RegExp('[^0-9]', 'g');
    if (typeof (val) === 'string') {
      return Number(val.replace(numberChars, ''));
    } else {
      return val;
    }
  }
  selectEncargo(event, option) {
    if (event.source.selected) {
      this.encargo = option;
      //Inicio Temporal
      this.encargo = {
        "numero": option.plan,
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
      };
      this.subcuentas = [{
        codigo: 1,
        descripcion: "FUNCIONARIO",
        permiteRetiros: "S",
        saldoTotal: 2292877.93,
        saldoCanje: 0.00,
        aportesSinHistoria: 0.00,
        disponiblePortafolioEstable: 2292877.93,
        disponibleConsolidado: 0.00,
        valorARetirar: 0,
      },
      {
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
      this.sa.clear();
      this.sa.push(this._formBuilder.group({
        value: ['']
      }));
      this.sa.push(this._formBuilder.group({
        value: ['']
      }));
      // Fin temporal
      this.mostrarEncargos = false;

      this.codigoVerificacion.setValidators([
        Validators.required,
        FormCustomValidators.verificationCode(this.encargo.codigoVerificacion)]
      );

      this.fpvform.get('codigoVerificacion').updateValueAndValidity();
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
    const filterValue = String(value).toLowerCase();
    return this.ciudades.filter(option => String(option.id).indexOf(filterValue) === 0);
  }
  private _filterFPago(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.formasPago.filter(option => (option.id + ' - ' + option.descripcion).toLowerCase().indexOf(filterValue) !== -1);
  }

  private _filterEncargos(value: string): string[] {
    const filterValue = String(value).toLowerCase();
    return this.encargos.filter(option => String(option.plan).toLowerCase().indexOf(filterValue) === 0);
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

  openInfoModal() {
    //this.alertService.openErrorModal("Mensaje error");
    this.sa.push(this._formBuilder.group({
      value: ['']
    }));
    this.subcuentas.push({
      codigo: 1,
      descripcion: "FUNCIONARIO",
      permiteRetiros: "S",
      saldoTotal: 2292877.93,
      saldoCanje: 0.00,
      aportesSinHistoria: 0.00,
      disponiblePortafolioEstable: 2292877.93,
      disponibleConsolidado: 0.00,
      valorARetirar: 0,
    });
    console.log(this.sa);
  }
  limpiar() {
    this.fpvform.reset();
    this.limpiarCampos();
  }
  get sa() {
    return this.fpvform.get('subcuentasArray') as FormArray;
  }
  get oficinaCtrl() {
    return this.fpvform.get('oficinaCtrl') as FormControl;
  }
  get encargosCtrl() {
    return this.fpvform.get('encargosCtrl') as FormControl;
  }
  get codigoVerificacion() {
    return this.fpvform.get('codigoVerificacion') as FormControl;
  }
  get tRetiroControl() {
    return this.fpvform.get('tRetiroControl') as FormControl;
  }
  get terceroControl() {
    return this.fpvform.get('terceroControl') as FormControl;
  }
  get cPagadoraControl() {
    return this.fpvform.get('cPagadoraControl') as FormControl;
  }
  get fPagoControl() {
    return this.fpvform.get('fPagoControl') as FormControl;
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AportesAfectadosComponent, {
      width: '95%',
      data: { aportesAfectados: this.aportesAfectados }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialogManual(): void {
    const dialogRef = this.dialog.open(SeleccionManualComponent, {
      width: '95%',
      data: { aportesAfectados: this.aportesAfectados }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  aplicar() {
    if (this.fpvform.valid) {
      if (this.valorRestante() != 0) {
        this.alertService.openErrorModal("El valor restante debe ser igual a cero.");
      } else {
        this.apiService.retirar().subscribe((data: HttpResponse) => {
          if (data.status == "OK") {
            this.alertService.openInfoModal(data.data.toString());
            this.limpiar();
          } else {
            this.alertService.openErrorModal(data.data.toString());
          }
        });
      }
    } else {
      this.alertService.openErrorModal("Por favor complete todos los campos obligatorios");
    }
  }

}