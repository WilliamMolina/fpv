import {Component, ViewChildren, QueryList, Renderer} from '@angular/core';
import { NavigationDirective } from './navigation-directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class FormComponent {
  navegacion:any[] = [];
  @ViewChildren(NavigationDirective) inputs: QueryList<any>;
  constructor(protected renderer: Renderer) {}

  ngAfterViewInit() {
    this.navegacion = this.inputs.toArray();
    this.navegacion.forEach((field, index) => {
        field.el.next = this.navegacion[index+1];
    });
    console.log(this.navegacion);
  }
}

