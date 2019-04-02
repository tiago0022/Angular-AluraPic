import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];
  // Dúvida: Object, any, ou tanto faz?

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err.message)
      );

  }

}
