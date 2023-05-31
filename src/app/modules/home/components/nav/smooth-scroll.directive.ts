import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input('appSmoothScroll') targetElementId!: string;

  constructor(private _el: ElementRef) { }

  @HostListener('click') onClick() {
    this.smoothScroll();
  }

  private smoothScroll() {
    const targetEl = document.getElementById(this.targetElementId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
