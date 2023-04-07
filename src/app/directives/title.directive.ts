import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("text-2xl");
    this.el.nativeElement.classList.add("font-Shabnam_B");
    this.el.nativeElement.classList.add("m-0");
    this.el.nativeElement.classList.add("transition-all");
    this.el.nativeElement.classList.add("text-gray-800");
    this.el.nativeElement.classList.add("dark:text-gray-100");

  }
}
