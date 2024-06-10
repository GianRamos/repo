import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-topbutton',
  templateUrl: './topbutton.component.html',
  styleUrls: ['./topbutton.component.css']
})
export class TopbuttonComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listener para mostrar u ocultar el botón según la posición del scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('scrollToTopButton');
    if (button) {
      if (window.window.scrollY > 800) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }

}
