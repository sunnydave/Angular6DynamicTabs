import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTabDirective]'
})
export class TabDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
