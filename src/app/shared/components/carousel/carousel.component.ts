import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import function to register Swiper custom elements
import { Swiper, SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../directives';
import { SwiperContainer } from 'swiper/element'; 

@Component({
  selector: 'web-carousel',
  standalone: true,
  templateUrl: './web-carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [CommonModule, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class') className = 'p-0';
  @ViewChild('swiperRef', { static: false })
  swiperRef!: ElementRef<SwiperContainer>;

  @ViewChildren('imgRef') imgRefs!: QueryList<ElementRef>;
  @Input()
  sliderCards: Partial<any[]> = [];

  config: SwiperOptions = {
    injectStylesUrls: ['assets/styles/styles.css'],
    slidesPerView: 'auto',
    spaceBetween: 24,
    slidesPerGroup: 1,
    centeredSlides: true,
    grabCursor: true, 
    mousewheel: {
      forceToAxis: true,
    },
    init: false,
    roundLengths: true,
    parallax: { enabled: true },
    breakpoints: {
      320: { slidesPerView: 'auto', spaceBetween: 24 },
      500: { slidesPerView: 'auto', spaceBetween: 24 },
      640: { slidesPerView: 'auto', spaceBetween: 24 },
      768: { slidesPerView: 'auto', spaceBetween: 24 },
      1024: { slidesPerView: 'auto', spaceBetween: 24 },
      1699: { slidesPerView: 'auto', spaceBetween: 24 },
      2560: { slidesPerView: 'auto', spaceBetween: 24 },
    },
    zoom: true,
    initialSlide: 0,
    normalizeSlideIndex: true,
    resistanceRatio: 0,
    resistance: false,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    freeMode: {
      enabled: true,
      momentum: false,
      momentumBounce:false,  
      sticky: true
    },
    navigation: true
     
  };

  isHideContent: boolean[] = [false];
  constructor() {}

  ngOnInit(): void {
    this.isHideContent = this.sliderCards.map(() => true);

    this.configSwiper();
  }

  configSwiper() {
    let progressBar: HTMLElement | null = null;
    let observer: MutationObserver | null = null;
    Object.assign(this.config, {
      injectStylesUrls: ['assets/styles/swiper/swiper.css'],
      pagination: {
        type: 'progressbar',
        horizontalClass: 'swiper-pagination-horizontal-bottom'
      },
      on: {
        init: (swiper: Swiper) => {
          progressBar = swiper.el.querySelector('.swiper-pagination-progressbar-fill') as HTMLElement;
           if (swiper.activeIndex === 0 && progressBar) {
             progressBar.style.transform = 'translate3d(0px, 0px, 0px) scaleX(0) scaleY(1)';
          }
  
        },
        slideChange: (swiper: Swiper) => {
          if (progressBar) {
            if (swiper.activeIndex === 0) {
              progressBar.style.transform = 'translate3d(0px, 0px, 0px) scaleX(0) scaleY(1)'; 
            }  
          }
   
          observer = new MutationObserver(() => {
            if (swiper.activeIndex === 0 && progressBar) {
              progressBar.style.transform = 'translate3d(0px, 0px, 0px) scaleX(0) scaleY(1)';
              // Disconnect the MutationObserver after performing the transformation
              if (observer) {
                observer.disconnect();
                observer = null;
              }
            }
          });
   
          const paginationEl = swiper.pagination.el;
          if (paginationEl) {
            observer.observe(paginationEl, { childList: true, attributes: true, subtree: true });
          }
          
        }, 
        destroy: () => {
          if (observer) {
            observer.disconnect();
            observer = null;
          }
        }
      }, 
  
    });
    
 
    

  
  }

  ngAfterViewInit(): void { 

    Object.assign(this.swiperRef.nativeElement, this.config);

    this.swiperRef.nativeElement.initialize();

  }
  onPaginationRender(event: Event) {
    console.log('🚀 ~ CarouselComponent ~ onPaginationRender ~ event', event);
  }
  onImgMouseover(index: number): void {
    this.isHideContent[index] = false;
  }

  onImgMouseout(index: number): void {
    this.isHideContent[index] = true;
  }
  ngOnDestroy(): void {}
}
