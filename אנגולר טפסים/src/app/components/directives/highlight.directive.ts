import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective { 
   constructor(private el: ElementRef) {} 
   @Input() color:string = "";
   @HostListener('mouseenter') onMouseEnter() { 
   this.highlight(this.color); 
   } 
   
   @HostListener('mouseleave') onMouseLeave() { 
   this.highlight(''); 
   } 
   
   private highlight(color: string) { 
   this.el.nativeElement.style.backgroundColor = color; 
   } 
}
