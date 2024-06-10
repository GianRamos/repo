import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './layouts/public/login/login.component';
import { RegisterComponent } from './layouts/public/register/register.component';
import { PasswordRecoveryComponent } from './layouts/public/password-recovery/password-recovery.component';
import { RouterModule } from '@angular/router';
import { PoliticasDePrivacidadComponent } from './components/politicas-de-privacidad/politicas-de-privacidad.component';
import { LibroDeReclamacionesComponent } from './components/libro-de-reclamaciones/libro-de-reclamaciones.component';
import { SharedModule } from '../shared/shared.module';
import { PoliticaDeCookiesComponent } from './components/politica-de-cookies/politica-de-cookies.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { ProteccionDeDatosPersonalesComponent } from './components/proteccion-de-datos-personales/proteccion-de-datos-personales.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    LibroDeReclamacionesComponent,
    PoliticaDeCookiesComponent,
    TerminosYCondicionesComponent,
    ProteccionDeDatosPersonalesComponent,
    PoliticasDePrivacidadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
})
export class CoreModule { }
