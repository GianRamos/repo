import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    { id: 'administrador', mailUsuario: 'administrador@gmail.com', password: '123456', rol: 'administrador' },
    { id: 'contador', mailUsuario: 'contador@gmail.com', password: '123456', rol: 'contador' },
    { id: 'gestipyme', mailUsuario: 'gestipyme@gmail.com', password: '123456', rol: 'gestipyme'}
  ];

  constructor() { }

  login(mailUsuario: string, password: string) {
    console.log(` ${mailUsuario} y ${password}`);
    const usuario = this.usuarios.find(usuario => usuario.mailUsuario === mailUsuario && usuario.password === password);
    if (usuario) {
      console.log('Usuario encontrado:', usuario);
      localStorage.setItem('currentUser', JSON.stringify(usuario));
      return true;
    } else {
      console.log('Usuario no encontrado');
      return false;
    }
  }
  

  logout() {
    localStorage.removeItem('currentUser');
  }
}
