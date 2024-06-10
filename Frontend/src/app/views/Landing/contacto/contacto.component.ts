import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: [
  '../../../../static/css/blocks_styl.css',
  '../../../../static/css/styles.css',
  '../../../../static/js/validationform/validationEngine.jquery.css'
]
})
export class ContactoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initMap();
    this.setupFormInputs();
    this.setupValidation();
  }

  sendForm(event: Event): void {
    event.preventDefault();
  
    //campos del formulario
    const nameInput = document.getElementById('form_name_contact') as HTMLInputElement;
    const phoneInput = document.getElementById('form_phone') as HTMLInputElement;
    const emailInput = document.getElementById('form_email') as HTMLInputElement;
    const areaSelect = document.getElementById('form_area') as HTMLSelectElement;
    const professionalSelect = document.getElementById('form_area') as HTMLSelectElement;
    const agreeTermsCheckbox = document.getElementById('company_privacity') as HTMLInputElement;
  
    // Verificación de campos
    if (!nameInput.value || !phoneInput.value || !emailInput.value || !areaSelect.value || !professionalSelect.value || !agreeTermsCheckbox.checked) {
      // mensaje de error
      Swal.fire({
        title: '<span style="color: #154C75; font-family: \'Plus Jakarta Sans\', sans-serif; font-weight: 800;">Error</span>',
        html: '<p style="color: #154C75; font-family: \'Plus Jakarta Sans\', sans-serif;">Por favor, llena todos los campos requeridos.</p>',
        icon: 'error',
        confirmButtonText: '<span style=" font-family: \'Plus Jakarta Sans\', sans-serif;">Entendido</span>',
        confirmButtonColor: '#0f72a1',
        customClass: {
          confirmButton: 'swal2-confirm'
        }
      });           
      return;
    }
  
    // envío del formulario
    Swal.fire({
      title: '<span style="color: #154C75; font-family: \'Plus Jakarta Sans\', sans-serif; font-weight: 800;">Reservaste una cita con nosotros</span>',
      html: '<p style="color: #154C75; font-family: \'Plus Jakarta Sans\', sans-serif;">Te contactaremos para confirmar la reservación.</p>',
      icon: 'success',
      confirmButtonText: '<span style="font-family: \'Plus Jakarta Sans\', sans-serif;">Entendido</span>',
      confirmButtonColor: '#0f72a1',
      customClass: {
        confirmButton: 'swal2-confirm'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
      }
    });
  }  

  setupFormInputs(): void {
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach((input: Element) => {
      input.addEventListener('blur', (event) => {
        const currentTarget = event.currentTarget as HTMLInputElement;
        if (currentTarget) {
          currentTarget.closest('.g5-item-input')?.classList.remove('inFocus');
        }
      });
  
      input.addEventListener('focus', (event) => {
        const currentTarget = event.currentTarget as HTMLInputElement;
        if (currentTarget) {
          currentTarget.closest('.g5-item-input')?.classList.add('inFocus');
          if (currentTarget.value.length >= 1) {
            currentTarget.nextElementSibling?.classList.add('fijar'); 
          } else {
            currentTarget.nextElementSibling?.classList.remove('fijar');
          }
        }
      });
  
      input.addEventListener('change', (event) => {
        const currentTarget = event.currentTarget as HTMLInputElement;
        if (currentTarget) { 
          if (currentTarget.value === '') {
            currentTarget.nextElementSibling?.classList.remove('fijar');
          } else {
            currentTarget.nextElementSibling?.classList.add('fijar');
          }
        }
      });
    });
  }

  setupValidation(): void {
    //solo letras
    const soloLettersInputs: HTMLInputElement[] = Array.from(document.querySelectorAll('.soloLetters'));
    soloLettersInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('keypress', (event) => {
        const key = event.key;
        const isLetter = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]$/.test(key);
        if (!isLetter) {
          event.preventDefault();
        }
      });
    });

    //solo números
    const soloNumberInputs: HTMLInputElement[] = Array.from(document.querySelectorAll('.soloNumber'));
    soloNumberInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('keypress', (event) => {
        const key = event.key;
        const isNumber = /^[0-9]$/.test(key);
        if (!isNumber) {
          event.preventDefault();
        }
      });
    });
  }

  initMap() : void {
    const myLatlng = new google.maps.LatLng(-12.0796801,-77.078802); // <- latitud y longitud
    const styles = [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      }
    ];

    const mapOptions =  {
      zoom: 16,
      center: myLatlng,
      styles: styles,
      draggable: true
    }
    const map = new google.maps.Map(document.getElementById('map_google'), mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      // icon: '../../static/img/marker-map.png'
    });
  }

}
