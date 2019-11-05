import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({ selector: '[navigation]' })
export class NavigationDirective{

  next: NavigationDirective;
  constructor(private el: ElementRef,private formControl: NgControl, private renderer: Renderer) { 
    
  }

  @HostListener('keydown.enter', ['$event']) enter()
  {
    if(this.next && this.formControl.control.errors==null){
      this.renderer.invokeElementMethod(this.next.el.nativeElement, 'focus');
    }
  }
  
}