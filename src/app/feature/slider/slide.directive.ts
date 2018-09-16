import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSlide]'
})
export class SlideDirective {

  constructor( 
    public templateRef: TemplateRef<any>,
  ) { }
}
