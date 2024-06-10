import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Tabla {
  fechaEmision: Date;
  Estado: string;
  Serie: string;
  numeroComprobante: string;
  Cliente: string;
  importeTotal: string;
  Acciones: string;
}

const ELEMENT_DATA: Tabla[] = [
  {
    fechaEmision: new Date(),
    Estado: 'ACTIVO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ANULADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'RECHAZADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ACTIVO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ANULADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'RECHAZADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'RECHAZADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ACTIVO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ANULADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'RECHAZADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ACTIVO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'ANULADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  {
    fechaEmision: new Date(),
    Estado: 'RECHAZADO',
    Serie: 'F001',
    numeroComprobante: '1234567',
    Cliente: 'EMPRESA RUC: 123456789',
    importeTotal: 'S/. 90',
    Acciones: 'ICONOS'
  },
  // Resto de los datos...
];

@Component({
  selector: 'app-editar-comprobante',
  templateUrl: './editar-comprobante.component.html',
  styleUrls: ['./editar-comprobante.component.css']
})
export class EditarComprobanteComponent implements AfterViewInit {
  displayedColumns: string[] = ['Fecha de Emisión', 'Estado', 'Serie', 'Nº Comprobante', 'Cliente', 'Importe total', 'Acciones'];
  dataSource = new MatTableDataSource<Tabla>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getEstadoColor(estado: string):string{
    switch (estado) {
      case 'ACTIVO':
        return 'ACTIVO';
      case 'ANULADO':
        return 'ANULADO';
      case 'RECHAZADO':
        return 'RECHAZADO';
      default:
        return '';
    }
  }

  ver(element: any) {
    console.log('Ver:', element);
  }

  imprimir(element: any) {
    console.log('Imprimir:', element);
  }

  editar(element: any) {
    console.log('Editar:', element);
  }

  eliminar(element: any) {
    console.log('Eliminar:', element);
  }
}
