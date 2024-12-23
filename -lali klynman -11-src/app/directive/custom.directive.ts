import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private el: ElementRef) {    
    }
    @Input() colorHighlight: string ='';
    @HostListener('mouseenter') OnMouseEnter=() => {
      this.Highlieght(this.colorHighlight || 'red')
    }
    @HostListener('mouseleave') OnMouseLeave=() => {
      this.Highlieght('');
    }
    private Highlieght(color: string) {
      this.el.nativeElement.style.backgroundColor = color ;
    }
   

}
