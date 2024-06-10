import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { DlgMensajeComponent } from 'src/app/dialogs/dlg-mensaje/dlg-mensaje.component';
import { DlgEsperaComponent } from 'src/app/dialogs/dlg-espera/dlg-espera.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mailUsuario: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Validar correo y contraseña
    if (this.mailUsuario === 'contador@gmail.com' && this.password === '123456') {
      console.log('Inicio de sesión exitoso');
      // Redirigir al componente de facturación
      this.router.navigate(['./facturación/generar-comprobante']);
    } else {
      console.error('Inicio de sesión fallido: correo o contraseña incorrectos');
      // Manejar inicio de sesión fallido
    }
  }
}




// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   mailUsuario: string = '';
//   password: string = '';

//   constructor(private authService: AuthService,
//               private router: Router,
//               private loginService: LoginService,
//               public dialog: MatDialog
//   ) { }

//   login() {
//     // Validación de campos
//     if (!this.mailUsuario.trim() || !this.password.trim()) {
//       this.msgInformativo("Ingrese Usuario y Contraseña");
//       return;
//     }

//     // Abrir dialogo de espera
//     let dialogRef = this.dialog.open(DlgEsperaComponent, {
//       width: 'auto',
//       height: 'auto',
//       disableClose: true
//     });

//     // Intentar iniciar sesión con el servicio de inicio de sesión
//     this.loginService.login(this.mailUsuario, this.password).subscribe(response => {
//       dialogRef.close();
//       if (response.status === "success") {
//         // Verificar si el correo y la contraseña coinciden con el usuario contador
//         if (this.mailUsuario === 'contador@gmail.com' && this.password === '123456') {
//           // Redirigir al usuario a la ruta de facturación
//           this.router.navigate(['/facturación']);
//         } else {
//           // Redirigir al usuario a la ruta predeterminada
//           this.router.navigate(['/']);
//         }
//       } else {
//         this.msgInformativo(response.message);
//       }
//     }, error => {
//       dialogRef.close();
//       console.error('Error en el inicio de sesión:', error);
//       this.msgInformativo("Error en el inicio de sesión. Por favor, inténtalo de nuevo más tarde.");
//     });
//   }

  // Función para mostrar mensajes informativos
  // msgInformativo(msg: string) {
  //   let dialogRef = this.dialog.open(DlgMensajeComponent, {
  //     width: 'auto',
  //     height: 'auto',
  //     disableClose: true,
  //     data: {
  //       msg: msg
  //     }
  //   });
  //   return;
  // }
// }
