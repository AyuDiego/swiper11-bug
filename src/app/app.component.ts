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
  @HostBinding('id') id = 'work';
  constructor() {}

  imageUrls: string[] = [
    'https://media.istockphoto.com/id/1350722246/es/foto/fondo-de-la-sala-de-servidores.jpg?s=1024x1024&w=is&k=20&c=LS7fSSqqvWINNjOVDwSS59k3Pefetw-SLHSNSxFg8p8=',
     'https://media.istockphoto.com/id/1356554393/es/foto/hombre-de-negocios-sosteniendo-icono-de-sonrisa-para-la-mejor-evaluaci%C3%B3n-concepto-de.jpg?s=1024x1024&w=is&k=20&c=8HceZALU5obr0fE2PNJvCrRFHqjfbqOeGXDYkBT09GY=',
     'https://media.istockphoto.com/id/1350722246/es/foto/fondo-de-la-sala-de-servidores.jpg?s=1024x1024&w=is&k=20&c=LS7fSSqqvWINNjOVDwSS59k3Pefetw-SLHSNSxFg8p8=',
     'https://media.istockphoto.com/id/1356554393/es/foto/hombre-de-negocios-sosteniendo-icono-de-sonrisa-para-la-mejor-evaluaci%C3%B3n-concepto-de.jpg?s=1024x1024&w=is&k=20&c=8HceZALU5obr0fE2PNJvCrRFHqjfbqOeGXDYkBT09GY=',
     'https://media.istockphoto.com/id/1350722246/es/foto/fondo-de-la-sala-de-servidores.jpg?s=1024x1024&w=is&k=20&c=LS7fSSqqvWINNjOVDwSS59k3Pefetw-SLHSNSxFg8p8=',
     'https://media.istockphoto.com/id/1356554393/es/foto/hombre-de-negocios-sosteniendo-icono-de-sonrisa-para-la-mejor-evaluaci%C3%B3n-concepto-de.jpg?s=1024x1024&w=is&k=20&c=8HceZALU5obr0fE2PNJvCrRFHqjfbqOeGXDYkBT09GY=',
     'https://media.istockphoto.com/id/1350722246/es/foto/fondo-de-la-sala-de-servidores.jpg?s=1024x1024&w=is&k=20&c=LS7fSSqqvWINNjOVDwSS59k3Pefetw-SLHSNSxFg8p8=',
     'https://media.istockphoto.com/id/1356554393/es/foto/hombre-de-negocios-sosteniendo-icono-de-sonrisa-para-la-mejor-evaluaci%C3%B3n-concepto-de.jpg?s=1024x1024&w=is&k=20&c=8HceZALU5obr0fE2PNJvCrRFHqjfbqOeGXDYkBT09GY=', 
  ];
  source = this.imageUrls;
  
  ngAfterViewInit() { 
  
  }
  
  ngOnInit() {
    console.log('WorkComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('WorkComponent ngOnInit');
  }
}