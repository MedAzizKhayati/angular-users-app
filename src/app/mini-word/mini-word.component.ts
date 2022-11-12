import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
})
export class MiniWordComponent implements OnInit {
  style = {
    fontSizeTs: 24,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: '24px',
  }
  isRainbowActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.style.fontSize = this.style.fontSizeTs + 'px';
  }
}
