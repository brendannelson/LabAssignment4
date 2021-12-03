import { Component, OnInit } from '@angular/core';

interface IArtistCard {
  id?: number;
  image_url: string;
  full_name: string;
  num_sales: number;
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Array<IArtistCard> = [];
  constructor() { }

  ngOnInit() {
    this.artists = [
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 90
      },
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 80
      }
    ];
  }

}
