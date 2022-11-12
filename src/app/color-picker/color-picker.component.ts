import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent implements OnInit {
  DEFAULT_COLOR = '#212121';
  color = this.DEFAULT_COLOR;
  constructor() { }

  ngOnInit(): void {
  }

  resetColor() {
    this.color = this.DEFAULT_COLOR;
  }

}
