import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("text-gray-400");
    this.el.nativeElement.classList.add("border");
    this.el.nativeElement.classList.add("hover:bg-main");
    this.el.nativeElement.classList.add("hover:text-white");
    this.el.nativeElement.classList.add("hover:border-main");
    this.el.nativeElement.classList.add("flex");
    this.el.nativeElement.classList.add("rounded");
    this.el.nativeElement.classList.add("transition-all");
    this.el.nativeElement.classList.add("py-1");
    this.el.nativeElement.classList.add("px-4");
    this.el.nativeElement.classList.add("items-center");
  }
}
