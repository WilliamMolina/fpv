import {Component, OnInit, ViewChildren, AfterViewInit, QueryList, Renderer} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApiService } from './api.service';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends FormComponent implements OnInit {
  user: string = "KMEDINA";
  username: string = "KAREN MEDINA"
  oficina: object = {"codigo":"30", "nombre": "BOGOTÁ - MORATO"};
  fondo: object = {"codigo":"300", "nombre":"Fondo de Pensiones Voluntarias Visión"};
  encargo: object = {
    "numero":"600010035",
    "codigoVerificacion":"9",
    "persona": "EDGAR FABIAN TORRES SANCHEZ",
    "identificacion": "79435173",
    "nombre": "EDGAR FABIAN TORRES SANCHEZ",
    "codigoPlanInversion": "1",
    "nombrePlanInversion" : "ABIERTO VISION -INDIVIDUALES"
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
  ciudades: any = [];
  filteredOptions: Observable<string[]>;
  constructor(protected renderer: Renderer, private apiService: ApiService) {
    super(renderer);
  }
  ngOnInit() {
    this.myControl.setValue(this.oficina.codigo);        
    this.apiService.getNews().subscribe((data)=>{
      this.ciudades = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  onKeydown(event, index) {
    if(index + 1 < this.navegacion.length){
      //this.renderer.invokeElementMethod(this.navegacion[index + 1]._elementRef.nativeElement, 'focus');
    }
  }
  select(event, option){
    if (event.source.selected) this.oficina = option;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ciudades.filter(option => option.codigo.toLowerCase().indexOf(filterValue) === 0);
  }
}

