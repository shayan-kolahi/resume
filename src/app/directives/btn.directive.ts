import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("text-white");
    this.el.nativeElement.classList.add("text-lg");
    this.el.nativeElement.classList.add("bg-main");
    this.el.nativeElement.classList.add("rounded-full");
    this.el.nativeElement.classList.add("py-2");
    this.el.nativeElement.classList.add("px-6");
    this.el.nativeElement.classList.add("transition-all");
    this.el.nativeElement.classList.add("flex");
    this.el.nativeElement.classList.add("items-center");
    this.el.nativeElement.classList.add("hover:shadow");
    this.el.nativeElement.classList.add("hover:shadow-main");
  }
}
