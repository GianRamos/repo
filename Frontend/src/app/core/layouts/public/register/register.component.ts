import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) { }
  registerUser() {
    // Aquí va el código para registrar al usuario 👈
    /*
    Swal.fire({
      title: '<span style="color:#1B376F; font-size: 20px;">¡Bienvenido a GestiPyme!</span>',
      html: '<span style="color: #1B376F; font-size: 14px; font-weight: 500;">Te hemos enviado un correo para validar tu cuenta. Por favor, verifica tu bandeja de entrada y sigue las instrucciones.</span>',
      icon: 'success',
      confirmButtonText: 'Entendido',
      confirmButtonColor:'#0f72a1'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
      }
  });*/
  }






}
