import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Pago {
  numero: number;
  cliente: string;
  comprobante: string;
  descripcion: string;
  id: string;
  importe: string;
  estado: string;
  fecha: string;
}


const ELEMENT_DATA: Pago[] = [
  { numero: 1, cliente: 'María Alarcón', comprobante: '123456789', 
    descripcion: 'Asesoría', id: 'SDF87AS41D', importe: 'S/. 429.00', 
    estado: 'PAGADO', fecha: '20 May 2024', 
  },
  { numero: 2, cliente: 'Sarah Quispe', comprobante: '123456789', 
    descripcion: 'Asesoría', id: 'SDF87AS41D', importe: 'S/. 429.00', 
    estado: 'SIN PAGAR', fecha: '20 May 2024', 
  },
  { numero: 3, cliente: 'Jorge Montes', comprobante: '123456789', 
    descripcion: 'Asesoría', id: 'SDF87AS41D', importe: 'S/. 429.00', 
    estado: 'SIN PAGAR', fecha: '20 May 2024', 
  },
  { numero: 4, cliente: 'Mary Jane', comprobante: '123456789', 
    descripcion: 'Asesoría', id: 'SDF87AS41D', importe: 'S/. 429.00', 
    estado: 'PAGADO', fecha: '20 May 2024', 
  },
  { numero: 5, cliente: 'Peter Caceres', comprobante: '123456789', 
    descripcion: 'Asesoría', id: 'SDF87AS41D', importe: 'S/. 429.00', 
    estado: 'REVOCADO', fecha: '20 May 2024', 
  },
];


@Component({
  selector: 'app-links-de-pago',
  templateUrl: './links-de-pago.component.html',
  styleUrls: ['./links-de-pago.component.css']
})
export class LinksDePagoComponent {

  estados = ['Pagado', 'Sin pagar', 'Revocado'];
  displayedColumns: string[] = ['numero', 'cliente', 'comprobante', 'descripcion', 'id', 'importe', 'estado', 'fecha'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(estado: string) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
