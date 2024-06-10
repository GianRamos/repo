import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdministrativeComponent } from './administrative.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { BillingModule } from '../billing/billing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
StaffComponent,
InventoryComponent,
AdministrativeComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    BillingModule,
    RouterModule,
  ]
})
export class AdministrativeModule {}

