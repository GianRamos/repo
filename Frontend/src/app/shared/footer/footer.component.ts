import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  activeAccordion: string | null = null;

  toggleAccordion(panel: string): void {
    this.activeAccordion = this.activeAccordion === panel ? null : panel;
  }
}
