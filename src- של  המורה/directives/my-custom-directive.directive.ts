import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myCustomDirective]',
  standalone: true
})
export class MyCustomDirectiveDirective {
  @Input() myCustomDirective = '';

  // @Input() defaultColor = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.myCustomDirective);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
