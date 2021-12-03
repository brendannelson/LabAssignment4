import { Component, OnInit } from '@angular/core';

interface ISimilarProduct {
  id?: number;
  image_url: string;
  description: string;
}

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  similarProducts: Array<ISimilarProduct> = [];
  constructor() { }

  ngOnInit() {
    this.similarProducts = [
      {
        image_url: 'assets/img/thumbs/116010.jpg',
        description: 'Artist Holding a Thistle'
      },
      {
        image_url: 'assets/img/thumbs/120010.jpg',
        description: 'Artist Painting #2'
      },
      {
        image_url: 'assets/img/thumbs/107010.jpg',
        description: 'Artist Painting #3'
      },
      {
        image_url: 'assets/img/thumbs/106020.jpg',
        description: 'Artist Painting #4'
      }
    ];
  }

}
