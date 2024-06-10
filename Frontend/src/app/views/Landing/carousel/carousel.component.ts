import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    { image: '../../../assets/images/slider/slide1.svg', 
      textOne: 'Constituye\n tu empresa \nal toque', 
      textTwo: 'Obtén tu RUC 20 desde \nS/429' },
    { image: '../../../assets/images/slider/slide2.svg', 
      textOne: 'Lleva tu contabilidad \nsin esfuerzo', 
      textTwo: 'Planes contables desde S/250 al mes' },
    { image: '../../../assets/images/slider/slide3.svg', 
      textOne: 'Gestiona tu facturación\n y cobros fácilmente', 
      textTwo: 'Desde S/99 al mes' },
    { image: '../../../assets/images/slider/slide4.svg', 
      textOne: 'Todo lo que tu negocio\n necesita', 
      textTwo: 'En un solo paquete' },
  ];

  currentSlideIndex = 0;
  slideChangeInterval: any;

  ngOnInit() {
    this.startSlideInterval();
  }

  ngOnDestroy() {
    this.stopSlideInterval();
  }

  startSlideInterval() {
    this.slideChangeInterval = setInterval(() => {
      this.goToSlide((this.currentSlideIndex + 1) % this.slides.length);
    }, 5000); 
  }

  stopSlideInterval() {
    clearInterval(this.slideChangeInterval);
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  onIndicatorClick(index: number) {
    this.stopSlideInterval(); // Detiene cuando el usuario hace clic en un indicador
    this.goToSlide(index);
    this.startSlideInterval(); // Reinicia el intervalo después de que el usuario selecciona una diapositiva
  }

}
