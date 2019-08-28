import {Component, OnInit, ViewChildren, AfterViewInit, QueryList, Renderer} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Delhi', 'Mumbai', 'Banglore'];
  filteredOptions: Observable<string[]>;
  navegacion:any[] = [];
  @ViewChildren(MatFormFieldControl) inputs: QueryList<any>;
  constructor(private renderer: Renderer) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
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
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}