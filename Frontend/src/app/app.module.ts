import { NgModule } from '@angular/core';
// import { NG_VALUE_ACCESSOR } from '@angular/forms';
// import { forwardRef } from '@angular/core';
// import { MyInputField } from './my-input-field';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
// import { MatTableExporterModule } from 'mat-table-exporter';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './views/Landing/landing.module';
import { BillingModule } from './views/billing/billing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { DlgMensajeComponent } from './dialogs/dlg-mensaje/dlg-mensaje.component';
import { DlgEsperaComponent } from './dialogs/dlg-espera/dlg-espera.component';

import {
  MatPaginatorIntl,
} from '@angular/material/paginator';
import es from '@angular/common/locales/es'; // idioma
import { CustomMatPaginatorIntl } from './utils/custom-mat-paginator-intl';
import { CreateCompanyModule } from './views/create-company/create-company.module';
import { FileValueAccessorDirective } from './directives/file-value-accessor.directive';
import { AdministrativeModule } from './views/administrative/administrative.module';
import { AddItemModalComponent } from './dialogs/add-item-modal/add-item-modal.component';

registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    DlgMensajeComponent,
    DlgEsperaComponent,
    FileValueAccessorDirective,
    AddItemModalComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LandingModule,
    BrowserAnimationsModule,
    CreateCompanyModule,
    AdministrativeModule,
    CoreModule,
    HttpClientModule,
    RouterModule,
    BillingModule,
  ],
  providers: [

    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    // {
      // provide: NG_VALUE_ACCESSOR,
      // useExisting: forwardRef(() => MyInputField),
      // multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
