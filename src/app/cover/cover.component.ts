import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'opt-cover',
//   templateUrl: './cover.component.html',
//   styleUrls: ['./cover.component.scss']
// })
export class OptCoverComponent implements OnInit {

  BACKGROUND_IMAGES = [
    'assets/img/bg-1.jpeg',
    'assets/img/bg-2.jpeg',
    'assets/img/bg-3.jpeg',
    'assets/img/bg-4.jpeg',
    'assets/img/bg-5.jpeg',
    'assets/img/bg-6.jpeg',
    'assets/img/bg-7.jpeg',
    'assets/img/bg-8.jpeg'
  ];
  backgroundImage: string;

  ngOnInit() {
    const indexImage = Math.floor(Math.random() * this.BACKGROUND_IMAGES.length);
    this.backgroundImage = this.BACKGROUND_IMAGES[indexImage];
  }

}
