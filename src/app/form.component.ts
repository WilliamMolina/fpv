import { Component, ViewChildren, QueryList, Renderer } from '@angular/core';
import { NavigationDirective } from './navigation-directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class FormComponent {
  navegacion: any[] = [];
  @ViewChildren(NavigationDirective) inputs: QueryList<any>;
  constructor(protected renderer: Renderer) { }

  ngAfterViewInit() {
    this.processChildren();
    this.inputs.changes.subscribe(_ => {
      this.processChildren();
    });
  }

  private processChildren(): void {
    this.navegacion = this.inputs.toArray();
    this.navegacion.forEach((field, index) => {
      field.next = this.navegacion[index + 1];
    });
    console.log(this.navegacion);
  }
}

