import { Directive, HostListener, ElementRef, Input, QueryList } from '@angular/core';
import { element } from 'protractor';


@Directive({ selector: '[navigation]' })
export class NavigationDirective{
  @Input('navigation') fields: QueryList<any>;
  constructor(private el: ElementRef) { 
  }

  @HostListener('keydown.enter', ['$event']) enter()
  {
    
  }
  
}