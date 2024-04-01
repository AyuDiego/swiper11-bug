import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
 
 
// const SHARED_MODULES = [];

@NgModule({
    exports: [CommonModule, CarouselComponent   ],
    imports: [
        CommonModule,
          CarouselComponent, 
    ] ,
    declarations: [CarouselComponent],
})
export class SharedModule {}
