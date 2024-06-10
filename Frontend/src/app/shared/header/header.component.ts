import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd,Event as NavigationEvent, ActivatedRoute } from '@angular/router';
import { TitleService } from './../../services/title.service';
import { filter, map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title!: string;
  isLandingPage: boolean = true;
  hidden = false;
  avatarUrl: string = '../../../assets/images/avatar.svg';
  avatarColor: string = '#3f51b5';


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    private titleService: TitleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    console.log('Header Component: ngOnInit()');

    const landingRoutes = [
      '/',
      '/home',
      '/quiénes-somos',
      '/nuestros-servicios',
      '/nuestros-servicios/constitucion-empresa',
      '/nuestros-servicios/asesor%C3%ADa',
      '/nuestros-servicios/servicio-contable',
      '/nuestros-servicios/servicio-de-facturaci%C3%B3n',
      '/nuestros-servicios/tr%C3%A1mites-legales',
      '/crear-empresa',
      '/contacto',
      '/iniciar-sesi%C3%B3n',
      '/registrarse',
      '/recuperar-contrase%C3%B1a',
      '/libro-de-reclamaciones',
      '/politica-de-privacidad',
      '/politica-de-cookies',
      '/t%C3%A9rminos-y-condiciones',
      '/protecci%C3%B3n-de-datos-personales'
    ];

    console.log('Header Component: Landing Routes', landingRoutes);

    console.log('Header Component: Calling handleInitialTitle()');
    this.handleInitialTitle();

    this.router.events.pipe(
      filter((event: NavigationEvent): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while(route.firstChild){
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      const title = data['title'];
      console.log('Header Component: Title from Route Data:', title);
      if(title){
        this.titleService.changeTitle(title);
        console.log('Header Component: Title sent to Title Service');
      }else{
        console.log('Header Component: No title in Route Data');
      }
      console.log('Header Component: Current URL:', this.router.url);
      this.isLandingPage = landingRoutes.includes(this.router.url);
      console.log('Header Component: Is Landing Page:', this.isLandingPage);
    });

    this.titleService.currentTitle.subscribe(title => {
      this.title = title;
      console.log('Header Component: Title from TitleService:', title);
    });
  }

  handleInitialTitle():void {
    console.log('Header Component: handleInitialTitle()');

    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const initialTitle = route.snapshot.data['title'];
    console.log('Header Component: Initial Title from Snapshot Data:', initialTitle);

    if (initialTitle) {
      this.titleService.changeTitle(initialTitle);
      console.log('Header Component: Initial Title sent to Title Service');
    } else {
      const parentTitle = this.activatedRoute.snapshot.data['title'];
      console.log('Header Component: Parent Title from Snapshot Data:', parentTitle);

      if (parentTitle) {
        this.titleService.changeTitle(parentTitle);
        console.log('Header Component: Parent Title sent to Title Service');
      }
    }
  }

  logout(): void {
    // this.authService.removeToken();
    // this.isLoggedIn = false;
    // this.router.navigate(['/home']);
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;

          const maxWidth = 80; // Máxima anchura que deseas para la imagen
          const maxHeight = 80; // Máxima altura que deseas para la imagen
          let width = img.width;
          let height = img.height;

          // Calcular las nuevas dimensiones mientras se mantiene la relación de aspecto
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round(height * maxWidth / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round(width * maxHeight / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Obtener la imagen redimensionada como una URL de datos
          this.avatarUrl = canvas.toDataURL('image/png');
        };
      };
      reader.readAsDataURL(file);
    }
}
}
