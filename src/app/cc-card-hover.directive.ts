import { Directive, HostBinding, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

  @HostBinding('class.borderColor') private onHovering:boolean = false;
  @Input('appCcCardHover') config:any = {
    querySelector: '.card-text'
  }
  constructor(private el:ElementRef,public renderer:Renderer) {
    el.nativeElement.style.backgroundColor = 'red';
    renderer.setElementStyle(el.nativeElement, "backgroundColor", 'yellow');
   }

   @HostListener('mouseover') onMouseHover(){
     let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(punchlineEl, 'display', 'block');
    this.onHovering = true;
   }
   @HostListener('mouseout') onMouseOut(){
    let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
   this.renderer.setElementStyle(punchlineEl, 'display', 'none');
   this.onHovering = false;
  }
}
