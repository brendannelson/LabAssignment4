import { Component, OnInit } from '@angular/core';

interface IArtwork {
  id?:number;
  image_url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artworks: Array <IArtwork> = [];
  constructor() { }

  ngOnInit() {
    this.artworks = [
      {
        image_url: 'assets/img/thumbs/120010.jpg',
        title: 'Portrait of Eleanor of Toledo',
        description: `The Portrait of Eleanor of Toledo and Her Son is a painting by the Italian artist
        Agnolo di Cosimo, known as Bronzino, finished ca, 1545, One of his most famous works, it is housed
        in the Uffizi Gallery of Florence, Italy and is considered on of the preeminent exmaples of
        Mannerist portraiture.`
      },
      {
        image_url: 'assets/img/thumbs/116010.jpg',
        title: 'Portrait of the Artist',
        description: `Portrait of the Artist Holding a Thistle is an oil painting on parchment pasted on
        canvas by German artist Albrecht Durer, painted in 1493. It is the earliest of Durer's painted
        self-portraits and has been identified as one of the first self-portaits painted by a Northern
        artist.`
      },
      {
        image_url: 'assets/img/thumbs/106020.jpg',
        title: 'Girl with a Pearl Earring',
        description: `Girl with a Pearl Earring is one of Johannes Vermeer's masterworks and, as the
        name implies, uses a peral earring for a focal point. Today the painting is kept in the Mauristshuis
        gallery in The Hague. It is sometimes referred to as "the Mona Lisa of the North" or "the Dutch Mona
        Lisa".`
      }
    ],
  }

}
