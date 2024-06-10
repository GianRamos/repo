import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { TopbuttonComponent } from './topbutton/topbutton.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { WhatsappUPComponent } from './whatsapp-up/whatsapp-up.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactButtonComponent,
    TopbuttonComponent,
    WhatsappComponent,
    WhatsappUPComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactButtonComponent,
    TopbuttonComponent,
    WhatsappComponent,
    AngularMaterialModule,
    WhatsappUPComponent,
  ]
})
export class SharedModule { }
