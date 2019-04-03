import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuerry: string) {
        descriptionQuerry = descriptionQuerry
            .trim()
            .toLowerCase();

        if (descriptionQuerry) {
            return photos.filter(photo =>
                photo.description.trim().toLowerCase().includes(descriptionQuerry)
            );
        } else {
            return photos;
        }
    }

}
