import { CUSTOM_ELEMENTS_SCHEMA, Component, HostBinding } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule, CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  @HostBinding('class') className = 'flex-container padding-top-82 py-32 bg-web-primary-700';
  @HostBinding('id') id = 'carousel';
  constructor() { }

  imageUrls: string[] = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
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