import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isAdministrativeOpen = false;
  isFacturacionOpen: boolean = false;
  isSidenavInverted: boolean = false;
  isTramitesOpen = false;

  toggleFacturacion() {
    this.isFacturacionOpen = !this.isFacturacionOpen;
  }
  toggleSidenav() {
    this.isSidenavInverted = !this.isSidenavInverted;
  }

  toggleTramites() {
    this.isTramitesOpen = !this.isTramitesOpen;
  }

  toggleMenu() {
    this.isAdministrativeOpen = !this.isAdministrativeOpen;
  }


}
