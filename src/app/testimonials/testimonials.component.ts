import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  constructor() { }

  ngOnInit(): void {
    $('#carouselExampleControls').carousel();
  }
  testimonials = [
    { name: 'Alice', comment: 'Super site!' },
    { name: 'Bob', comment: 'Facile à utiliser.' },
  ];
  currentIndex = 0;

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
