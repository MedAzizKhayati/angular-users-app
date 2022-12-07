import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    public imageObservable: Observable<string> = new Observable();
    constructor() {
        this.imageObservable = this.periodicChangeImage();
    }

    periodicChangeImage() {
        const imageObservable = new Observable<string>(observer => {
            let index = 0;
            setInterval(() => {
                observer.next(`https://picsum.photos/200/300?random=${index++}`);
            }, 1000);
        });
        return imageObservable;
    }

}