import { Inject, ElementRef } from '@angular/core';
import { NavigationDirective } from './navigation-directive';

export class NavigationElement extends ElementRef{
    next: NavigationDirective;
    constructor(private el:ElementRef){
        super(el);
    }
}