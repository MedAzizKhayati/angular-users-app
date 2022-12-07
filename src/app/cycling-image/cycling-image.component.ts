import { Component, OnInit } from '@angular/core';
import { ImageService } from "./image.service";
@Component({
  selector: 'app-cycling-image',
  templateUrl: './cycling-image.component.html',
})
export class CyclingImageComponent implements OnInit {

  imageUrl = "https://picsum.photos/200/300"
  constructor(
    private readonly imageService: ImageService,
  ) {
    this.imageService.imageObservable.subscribe(imageUrl => {
      this.imageUrl = imageUrl;
    });
  }

  ngOnInit(): void {
  }

  

}
