import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent {

  redirectToContactForm() {
    window.open('https://forms.monday.com/forms/9ea4de42d402215661fd615d046454f0?r=use1', '_blank');
  }

}
