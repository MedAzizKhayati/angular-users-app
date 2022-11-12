import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  getColorAndBgColor(minRatio: number){
    const color = this.getRandomColor();
    let bgColor = this.getRandomColor();
    while (this.contrast(color, bgColor) < minRatio) {
      bgColor = this.getRandomColor();
    }
    return [color, bgColor];
  }


  luminance(hex: string) {
    const [r, g, b] = this.hexToRgb(hex);
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ?
        v / 12.92 :
        Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  hexToRgb(hex: string) {
    var bigint = parseInt(hex.replace("#", ""), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
  }

  contrast(rgb1: string, rgb2: string) {
    var lum1 = this.luminance(rgb1);
    var lum2 = this.luminance(rgb2);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) /
      (darkest + 0.05);
  }
}
