import {Component, OnInit, ViewChildren, AfterViewInit, QueryList, Renderer} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: string = "KMEDINA";
  username: string = "KAREN MEDINA"
  fecha: Date = new Date();
  myControl = new FormControl();
  ciudades: any = [];
  filteredOptions: Observable<string[]>;
  navegacion:any[] = [];
  @ViewChildren(MatFormFieldControl) inputs: QueryList<any>;
  constructor(private renderer: Renderer, private apiService: ApiService) {}
  ngOnInit() {    
    this.apiService.getNews().subscribe((data)=>{
      this.ciudades = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  ngAfterViewInit() {
    this.navegacion = this.inputs.toArray();
  }

  onKeydown(event, index) {
    if(index + 1 < this.navegacion.length){
      this.renderer.invokeElementMethod(this.navegacion[index + 1]._elementRef.nativeElement, 'focus');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ciudades.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
  }
}

