import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Changetext]'
})
export class ChangetextDirective {

  constructor(element:ElementRef) { 
element.nativeElement.innerText = "welcome to custom directive..!";
  }
}
