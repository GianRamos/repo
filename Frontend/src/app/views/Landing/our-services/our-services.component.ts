import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {

  openModal(modalId: string) {
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal(modalId: string) {
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    }
  }  

  constructor(private router: Router) { }

  redirectToCrearEmpresa() {
    this.router.navigate(['/crear-empresa']);
  }
  
}

