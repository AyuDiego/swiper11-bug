import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwiperDirective } from './directive/swiper.directive';
 
 
// const SHARED_MODULES = [];

@NgModule({
    exports: [CommonModule, CarouselComponent, SwiperDirective   ],
    imports: [
        CommonModule,
          CarouselComponent, SwiperDirective
    ],
})
export class SharedModule {}
