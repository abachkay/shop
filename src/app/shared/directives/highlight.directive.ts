import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class')
  attrClass: string;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.attrClass = 'cart-item-selected';
  }
  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.attrClass = '';
  }
}
