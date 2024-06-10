import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddItemModalComponent } from 'src/app/dialogs/add-item-modal/add-item-modal.component';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements AfterViewInit {
  asyncTabs: Observable<ExampleTab[]>;
  selectedTabIndex: number = 0;

  dataSource = new MatTableDataSource([
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 5, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 2', categoria: 'Categoría 2', stock: 100, precioUnitario: 'S/. 429.00', fecha: new Date() },
    { codigo: 'S7dFS41', producto: 'Producto 1', categoria: 'Categoría 1', stock: 2, precioUnitario: 'S/. 429.00', fecha: new Date() },
  ]);

  displayedColumns: string[] = ['Código', 'Producto', 'Categoría', 'Stock', 'Precio unitario', 'Fecha', 'Opciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {

    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Todos', content: 'Content 1' },
          { label: 'Vendidos', content: 'Content 2' },
          { label: 'Sin stock', content: 'Content 3' },
        ]);
      }, 1000);
    });

    // Configurar el filtro personalizado
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();

      const codigoMatch = data.codigo.toLowerCase().includes(transformedFilter);
      const productoMatch = data.producto.toLowerCase().includes(transformedFilter);
      const categoriaMatch = data.categoria.toLowerCase().includes(transformedFilter);
      const precioMatch = data.precioUnitario.toLowerCase().includes(transformedFilter);
      const fechaMatch = data.fecha.toLocaleDateString().toLowerCase().includes(transformedFilter);

      return codigoMatch || productoMatch || categoriaMatch || precioMatch || fechaMatch;
    };
  }

  openAddItemModal() {
    const dialogRef = this.dialog.open(AddItemModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nuevo producto:', result);
        // Aquí puedes agregar la lógica para añadir el nuevo producto a tu tabla o base de datos
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  onTabChanged(event: MatTabChangeEvent) {
    this.selectedTabIndex = event.index;
    console.log(`Tab cambiado a: ${event.index}`);
  }

  editar(element: any) {
    console.log('Editar:', element);
  }

  eliminar(element: any) {
    console.log('Eliminar:', element);
  }

  // createPopupWindow(content: string, width = 900, height = 600) {
  //   const left = (window.innerWidth / 2) - (width / 2);
  //   const top = (window.innerHeight / 2) - (height / 2);

  //   // Crear un objeto Blob con el contenido HTML
  //   const blob = new Blob([content], { type: 'text/html' });

  //   // Crear una URL para el objeto Blob
  //   const url = URL.createObjectURL(blob);

  //   const popupWin = window.open('', `width=${width},height=${height},left=${left},top=${top}`);

  //   if (popupWin) {
  //     popupWin.document.open();
  //     popupWin.document.write(content);
  //     popupWin.document.close();
  //   } else {
  //     console.error('No se pudo crear la ventana emergente');
  //   }

  //   return popupWin;
  // }

  // printTable() {
  //   console.log('Iniciando la función printTable');

  //   const printContent = document.getElementById('sectionToPrint')?.innerHTML;
  //   console.log('Contenido a imprimir:', printContent);

  //   if (printContent) {
  //     console.log('Contenido de impresión encontrado');

  //     const originalPageSize = this.dataSource.paginator?.pageSize || 5;
  //     const originalPageIndex = this.dataSource.paginator?.pageIndex || 0;

  //     // Mostrar todos los elementos antes de imprimir
  //     this.dataSource.paginator = null;

  //     const popupContent = `
  //       <html>
  //         <head>
  //           <title>Imprimir Tabla</title>
  //           <style>
  //             table {
  //               width: 100%;
  //               border-collapse: collapse;
  //             }
  //             th, td {
  //               border: 1px solid black;
  //               padding: 8px;
  //               text-align: center;
  //             }
  //             th {
  //               background-color: #f2f2f2;
  //             }
  //           </style>
  //         </head>
  //         <body onload="window.print();window.close()">
  //           ${printContent}
  //         </body>
  //       </html>
  //     `;

  //     const popupWin = this.createPopupWindow(popupContent);
  //     if (popupWin) {
  //       console.log('Ventana emergente creada:', popupWin);
  //       console.log('Contenido escrito en la ventana emergente');
  //       console.log('Documento de la ventana emergente cerrado');
  //     }

  //     setTimeout(() => {
  //       this.dataSource.paginator = this.paginator;
  //       this.paginator.pageSize = originalPageSize;
  //       this.paginator.pageIndex = originalPageIndex;
  //       console.log('Paginador restaurado a su configuración original');
  //     }, 1000);
  //   } else {
  //     console.error('No se encontró contenido para imprimir');
  //   }
  // }
  printTable() {
    const printContent = document.getElementById('sectionToPrint')?.innerHTML;
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload();
    } else {
      console.error('No se encontró contenido para imprimir');
    }
  }

  }

