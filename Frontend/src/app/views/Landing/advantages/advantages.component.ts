import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent {

  constructor(private router: Router) { }

  redirectToRegister() {
    this.router.navigate(['/registrarse']);
  }

  slides = [
    {image: '../../../assets/images/advantages/CentralizacionMesa.svg', 
      text: 'Centraliza tu manejo empresarial en un click, más organización, menos estrés, todo en un lugar.', 
      indicator: 'Centralización de gestión',
      icon: '../../../assets/images/advantages/iconA1.svg'},

    {image: '../../../assets/images/advantages/Centralizar gestion.svg', 
      text: 'Automatizamos tus tareas diarias para que puedas enfocarte en lo que realmente importa: tu crecimiento.', 
      indicator: 'Automatización de procesos',
      icon: '../../../assets/images/advantages/iconA2.svg'},

    {image: '../../../assets/images/advantages/automatizacion.svg', 
      text: 'Acelera tus procesos, reduce costos y mejora la eficiencia para transformar la forma en que trabajas', 
      indicator: 'Eficiencia operativa',
      icon: '../../../assets/images/advantages/iconA3.svg'},

    {image: '../../../assets/images/advantages/Atencion al cliente.svg', 
      text: 'Te ofrecemos soporte personalizado y adaptado a tus necesidades, disponible cuando más lo necesitas.', 
      indicator: 'Soporte personalizado',
      icon: '../../../assets/images/advantages/iconA4.svg'},
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }


}
