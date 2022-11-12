import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value || value.trim() === '')
      return '/assets/default_image.jpg';

    return value;
  }

}
