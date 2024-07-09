import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  images: string[] = [
    '../../assets/img/boat1.jpg',
    '../../assets/img/boat2.jpg',
    '../../assets/img/boat.jpg'
  ];
  currentImageIndex: number = 0;
  currentImage: string = this.images[0];

  ngOnInit(): void {
    this.changeImage();
  }

  changeImage(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 5000); 
  }
}
