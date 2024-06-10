import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCompanyComponent } from './create-company/create-company.component';

@NgModule({
  declarations: [
CreateCompanyComponent,

  ],
  imports: [
    CommonModule,
    MatStepperModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],

  exports: [
    CreateCompanyComponent
  ]
})
export class CreateCompanyModule { }
