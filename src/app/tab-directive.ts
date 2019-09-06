import { Directive, AfterViewInit, OnDestroy, Optional,HostListener, ElementRef } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material';


@Directive({ selector: '[tab-directive]' })
export class TabDirective{
  observable: any;
  constructor(@Optional() private autoTrigger: MatAutocompleteTrigger, private el:ElementRef) { }

  @HostListener('keydown.tab', ['$event.target']) onBlur()
  {
    if (this.autoTrigger.activeOption) {
        this.autoTrigger.writeValue(this.autoTrigger.activeOption.value)
      }
  }

  @HostListener('keydown.shift.tab', ['$event.target'])onBlurBack()
  {
    if (this.autoTrigger.activeOption) {
        this.autoTrigger.writeValue(this.autoTrigger.activeOption.value)
      }
  }
  
}