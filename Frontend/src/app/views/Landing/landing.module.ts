import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { MatButtonModule } from '@angular/material/button';
import { BenefitsComponent } from './benefits/benefits.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServiceplansComponent } from './serviceplans/serviceplans.component';
import { BusinessbannerComponent } from './businessbanner/businessbanner.component';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { SomosComponent } from './somos/somos.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { InfoConstitucionEmpresaComponent } from './nuestros-servicios/info-constitucion-empresa/info-constitucion-empresa.component';
import { InfoTramitesLegalesComponent } from './nuestros-servicios/info-tramites-legales/info-tramites-legales.component';
import { InfoFacturacionComponent } from './nuestros-servicios/info-facturacion/info-facturacion.component';
import { InfoContableComponent } from './nuestros-servicios/info-contable/info-contable.component';
import { InfoAsesoriasComponent } from './nuestros-servicios/info-asesorias/info-asesorias.component';


@NgModule({
  declarations: [
    CarouselComponent,
    AdvantagesComponent,
    BenefitsComponent,
    OurServicesComponent,
    ServiceplansComponent,
    BusinessbannerComponent,
    HomeComponent,
    ContactoComponent,
    SomosComponent,
    NuestrosServiciosComponent,
    InfoConstitucionEmpresaComponent,
    InfoTramitesLegalesComponent,
    InfoFacturacionComponent,
    InfoContableComponent,
    InfoAsesoriasComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
    RouterModule,
  ],

  exports: [
    CarouselComponent,
    AdvantagesComponent,
    BenefitsComponent,
    OurServicesComponent,
    ServiceplansComponent,
    BusinessbannerComponent,
    ContactoComponent,
    NuestrosServiciosComponent,
    InfoConstitucionEmpresaComponent,
    InfoTramitesLegalesComponent,
    InfoFacturacionComponent,
    InfoContableComponent,
    InfoAsesoriasComponent,
  ]
})
export class LandingModule { }
