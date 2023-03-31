import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("text-2xl");
    this.el.nativeElement.classList.add("font-Shabnam_B");
  }
}
