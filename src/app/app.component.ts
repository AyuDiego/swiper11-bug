import { CUSTOM_ELEMENTS_SCHEMA, Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  @HostBinding('class') className = 'flex-container padding-top-82 py-32 bg-web-primary-700';
  @HostBinding('id') id = 'carousel';
  constructor() {}

  imageUrls: string[] = [
    location.origin + '/assets/img/carousel/carousel/0.webp',
    location.origin + '/assets/img/carousel/carousel/1.webp',
    location.origin + '/assets/img/carousel/carousel/0.webp',
    location.origin + '/assets/img/carousel/carousel/0.webp',
    location.origin + '/assets/img/carousel/carousel/1.webp',
    location.origin + '/assets/img/carousel/carousel/0.webp',
    location.origin + '/assets/img/carousel/carousel/1.webp',
    location.origin + '/assets/img/carousel/carousel/0.webp',
    location.origin + '/assets/img/carousel/carousel/1.webp',
  ];
  source = this.imageUrls;
  
  ngAfterViewInit() { 
  
  }
  
  ngOnInit() {
    console.log('carouselComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('carouselComponent ngOnInit');
  }
}