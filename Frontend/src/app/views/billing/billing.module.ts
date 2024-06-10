import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BillingComponent } from './billing.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GuiaRemisionComponent } from './guia-remision/guia-remision.component';
import { EditarComprobanteComponent } from './editar-comprobante/editar-comprobante.component';
import { ReporteComprobantesComponent } from './reporte-comprobantes/reporte-comprobantes.component';
import { GenerarComprobanteComponent } from './generar-comprobante/generar-comprobante.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/shared.module';
import { TramitesComponent } from './tramites/tramites.component';
import { LinksDePagoComponent } from './links-de-pago/links-de-pago.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './generar-comprobante/slider/slider.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EstadoTramiteComponent } from './estado-tramite/estado-tramite.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    SideNavComponent,
    BillingComponent,
    GuiaRemisionComponent,
    EditarComprobanteComponent,
    ReporteComprobantesComponent,
    GenerarComprobanteComponent,
    TramitesComponent,
    LinksDePagoComponent,
    SliderComponent,
    EstadoTramiteComponent,


  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    AngularMaterialModule,
  ],
  exports: [
  SideNavComponent,
  ]
})
export class BillingModule { }
