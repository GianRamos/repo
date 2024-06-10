import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './views/create-company/create-company/create-company.component';
import { HomeComponent } from './views/Landing/home/home.component';
import { BillingComponent } from './views/billing/billing.component';
import { GenerarComprobanteComponent } from './views/billing/generar-comprobante/generar-comprobante.component';
import { EditarComprobanteComponent } from './views/billing/editar-comprobante/editar-comprobante.component';
import { GuiaRemisionComponent } from './views/billing/guia-remision/guia-remision.component';
import { ReporteComprobantesComponent } from './views/billing/reporte-comprobantes/reporte-comprobantes.component';
import { LoginComponent } from './core/layouts/public/login/login.component';
import { RegisterComponent } from './core/layouts/public/register/register.component';
import { TramitesComponent } from './views/billing/tramites/tramites.component';
import { PasswordRecoveryComponent } from './core/layouts/public/password-recovery/password-recovery.component';
import { ContactoComponent } from './views/Landing/contacto/contacto.component';
import { SomosComponent } from './views/Landing/somos/somos.component';
import { NuestrosServiciosComponent } from './views/Landing/nuestros-servicios/nuestros-servicios.component';
import { EstadoTramiteComponent } from './views/billing/estado-tramite/estado-tramite.component';

import { PoliticasDePrivacidadComponent } from './core/components/politicas-de-privacidad/politicas-de-privacidad.component';
import { InfoAsesoriasComponent } from './views/Landing/nuestros-servicios/info-asesorias/info-asesorias.component';
import { InfoConstitucionEmpresaComponent } from './views/Landing/nuestros-servicios/info-constitucion-empresa/info-constitucion-empresa.component';
import { InfoContableComponent } from './views/Landing/nuestros-servicios/info-contable/info-contable.component';
import { InfoFacturacionComponent } from './views/Landing/nuestros-servicios/info-facturacion/info-facturacion.component';
import { InfoTramitesLegalesComponent } from './views/Landing/nuestros-servicios/info-tramites-legales/info-tramites-legales.component';
import { LinksDePagoComponent } from './views/billing/links-de-pago/links-de-pago.component';
import { LibroDeReclamacionesComponent } from './core/components/libro-de-reclamaciones/libro-de-reclamaciones.component';
import { PoliticaDeCookiesComponent } from './core/components/politica-de-cookies/politica-de-cookies.component';
import { ProteccionDeDatosPersonalesComponent } from './core/components/proteccion-de-datos-personales/proteccion-de-datos-personales.component';
import { TerminosYCondicionesComponent } from './core/components/terminos-y-condiciones/terminos-y-condiciones.component';
import { AdministrativeComponent } from './views/administrative/administrative.component';
import { StaffComponent } from './views/administrative/staff/staff.component';
import { InventoryComponent } from './views/administrative/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'quiénes-somos',
    component: SomosComponent,
  },
  {
    path: 'nuestros-servicios',
    component: NuestrosServiciosComponent,
  },
  {
    path: 'nuestros-servicios/constitucion-empresa',
    component: InfoConstitucionEmpresaComponent,
  },
  {
    path: 'nuestros-servicios/asesoría',
    component: InfoAsesoriasComponent,
  },
  {
    path: 'nuestros-servicios/servicio-contable',
    component: InfoContableComponent,
  },
  {
    path: 'nuestros-servicios/servicio-de-facturación',
    component: InfoFacturacionComponent,
  },
  {
    path: 'nuestros-servicios/trámites-legales',
    component: InfoTramitesLegalesComponent,
  },
  {
    path: 'recuperar-contraseña',
    component: PasswordRecoveryComponent,
  },
  {
    path: 'iniciar-sesión',
    component: LoginComponent,
  },
  {
    path: 'registrarse',
    component: RegisterComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'crear-empresa',
    component: CreateCompanyComponent,
  },
  {
    path: 'libro-de-reclamaciones',
    component: LibroDeReclamacionesComponent,
  },
  {
    path: 'politica-de-privacidad',
    component: PoliticasDePrivacidadComponent,
  },
  {
    path: 'politica-de-cookies',
    component: PoliticaDeCookiesComponent,
  },
  {
    path: 'protección-de-datos-personales',
    component: ProteccionDeDatosPersonalesComponent,
  },
  {
    path: 'términos-y-condiciones',
    component: TerminosYCondicionesComponent,
  },
  {
    path: 'administración',
    component: AdministrativeComponent,
    data: { title:'Administración' },
    children: [
      {
        path: '',
        redirectTo: 'gestión-de-inventario',
        pathMatch: 'full',
        data: { title: 'Gestión de Inventario' },
      },
      {
        path: 'gestión-de-personal',
        component: StaffComponent,
        data: { title: 'Gestión de Personal' },
      },
      {
        path: 'gestión-de-inventario',
        component: InventoryComponent,
        data: { title: 'Gestión de Inventario' },
      },
    ]
  },
  {
    path: 'facturación',
    component: BillingComponent,
    data: { title: 'Facturación' },
    children: [
      {
        path: '',
        redirectTo: 'generar-comprobante',
        pathMatch: 'full',
        data: { title: 'Generar comprobante' },
      },
      {
        path: 'generar-comprobante',
        component: GenerarComprobanteComponent,
        data: { title: 'Generar comprobante' },
      },
      {
        path: 'trámites-en-línea',
        component: TramitesComponent,
        data: { title: 'Trámites en Línea' },
      },
      { 
        path: 'estado-tramite', 
        component: EstadoTramiteComponent,
        data: { title: 'Estado de trámite'}
      },

      {
        path: 'editar-comprobante',
        component: EditarComprobanteComponent,
        data: { title: 'Edición de comprobantes' },
      },
      {
        path: 'guía-remisión',
        component: GuiaRemisionComponent,
        data: { title: 'Guía de Remisión' },
      },
      {
        path: 'reporte-comprobantes',
        component: ReporteComprobantesComponent,
        data: { title: 'Reporte de comprobantes' },
      },
      {
        path: 'links-de-pago',
        component: LinksDePagoComponent,
        data: { title: 'Links de Pago' },
      },
    ],
  },
  {
    path: 'administración',
    component: AdministrativeComponent,
    data: { title: 'Administración' },
    children: [
      {
        path: '',
        redirectTo: 'gestión-de-inventario',
        pathMatch: 'full',
        data: { title: 'Gestión de Inventario' },
      },
      {
        path: 'gestión-de-inventario',
        component: InventoryComponent,
        data: { title: 'Gestión de Inventario' },
      },
      {
        path: 'gestión-de-personal',
        component: StaffComponent,
        data: { title: 'Gestión de Personal' },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
