import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
// import { Table } from './table.interface';

export interface Table {
  fecha: Date;
  tipo: string;
  cliente: string;
  monto: number;
  medioDePago: string;
  tramite: string;
}

const ELEMENT_DATA: Table[] = [
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'FACTURA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Tarjeta',
    tramite: 'Tarjeta'
  },
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'NC',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Efectivo',
    tramite: 'Efectivo'
  },
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'FACTURA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Tarjeta',
    tramite: 'Tarjeta'
  },
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'NC',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Efectivo',
    tramite: 'Efectivo'
  },
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'NC',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Efectivo',
    tramite: 'Efectivo'
  },
  {
    fecha: new Date,
    tipo: 'FACTURA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Tarjeta',
    tramite: 'Tarjeta'
  },
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'NC',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Efectivo',
    tramite: 'Efectivo'
  },
  {
    fecha: new Date,
    tipo: 'BOLETA',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Transferencia',
    tramite: 'Transferencia'
  },
  {
    fecha: new Date,
    tipo: 'NC',
    cliente: 'Producto - 3600 ID: 1234567',
    monto: 90,
    medioDePago: 'Efectivo',
    tramite: 'Efectivo'
  },
];

@Component({
  selector: 'app-reporte-comprobantes',
  templateUrl: './reporte-comprobantes.component.html',
  styleUrls: ['./reporte-comprobantes.component.css']
})
export class ReporteComprobantesComponent implements AfterViewInit {
  displayedColumns: string[] = ['fecha', 'tipo', 'cliente', 'monto', 'medioDePago', 'tramite'];
  dataSource = new MatTableDataSource<Table>(ELEMENT_DATA);
  estados: string[] = ['BOLETA', 'FACTURA', 'NC'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getEstadoColor(estado: string):string{
    switch (estado) {
      case 'BOLETA':
        return 'BOLETA';
      case 'FACTURA':
        return 'FACTURA';
      case 'NC':
        return 'NC';
      default:
        return '';
    }
  }


}
