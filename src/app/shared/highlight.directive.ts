import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
      @HostListener('mouseenter') onMouseOver() {
      this.backgroundColor = this.highLightColor
      }

      @HostListener('mouseleave') onMouseLeave() {
      this.backgroundColor = this.defaultColor
      }

      @HostBinding('style.backgroundColor') backgroundColor: string = ""

      @Input() defaultColor: string = "white"

      @Input('appHighlight') highLightColor: string = "yellow"

      constructor() { }

      ngOnInit() {
        this.backgroundColor = this.defaultColor
      }
}
