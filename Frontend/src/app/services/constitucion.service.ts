import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ConstitucionService {

  constructor(private http: HttpClient) { }
  addConstitucion(myForm: any) {

    return this.http.post<any>(AppComponent._RUTA_BACK + "wsConstitucionEmpresa/?action=constitucion&info=add", myForm);
  }
}
