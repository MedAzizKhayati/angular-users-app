import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { ColorsService } from './colors.service';

@Directive({
  selector: '[rainbowColor]'
})
export class RainbowColorDirective {
  @Input('rainbowColor') isActive = false;
  @HostBinding('style.color') color = '';
  @HostBinding('style.backgroundColor') bg = '';

  constructor(private colorService: ColorsService) { }

  @HostListener('keyup') onMouseEnter() {
    if (this.isActive) {
      [this.color, this.bg] = this.colorService.getColorAndBgColor(4.5);
    }
  }

  ngDoCheck() {
    if (!this.isActive) {
      this.color = '';
      this.bg = '';
    }
  }
  
}
