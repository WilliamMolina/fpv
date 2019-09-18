import { Directive, HostListener, ElementRef, Input, QueryList, Renderer } from '@angular/core';
import { NavigationElement } from './navigation';


@Directive({ selector: '[navigation]' })
export class NavigationDirective{
  next: NavigationDirective;
  constructor(private el: ElementRef, private renderer: Renderer) { 

  }

  @HostListener('keydown.enter', ['$event']) enter()
  {
    if(this.next){
      this.renderer.invokeElementMethod(this.next.el.nativeElement, 'focus');
      //this.renderer.invokeElementMethod(this.next.el.nativeElement, 'scrollIntoView');
    }
  }
  
}