import { Directive, Renderer2, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickHighlight]'
})
export class ClickHighlightDirective {
  @Input('appClickHighlight') fontSize: number;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.render.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
    this.render.setStyle(this.el.nativeElement, 'border', '1px solid red');
    this.render.setStyle(this.el.nativeElement, 'font-style', 'italic');
  }
}
