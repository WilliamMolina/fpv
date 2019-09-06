import { Directive, HostListener, ElementRef, Input, QueryList, Renderer } from '@angular/core';
import { NavigationElement } from './navigation';


@Directive({ selector: '[navigation]' })
export class NavigationDirective{
  constructor(private el: ElementRef, private renderer: Renderer) { 

  }

  @HostListener('keydown.enter', ['$event']) enter()
  {
    if(this.el.next) this.renderer.invokeElementMethod(this.el.next.el.nativeElement, 'focus');
  }
  
}