import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: string, clave: string): Observable<any> {
    const params = new HttpParams()
      .set('usuario', usuario + "")
      .set('password', clave + "")
      .set('key', clave + "123kyz")

      ;

    return this.http.post<any>(AppComponent._RUTA_BACK + "controlador/LoginController.php", params)
    .pipe(
      catchError(error => {
        // Manejar errores de la solicitud aquí
        console.error('Error en la solicitud de inicio de sesión:', error);
        throw error; // Propaga el error para que sea manejado por el componente
      })
    );
  }


    }
