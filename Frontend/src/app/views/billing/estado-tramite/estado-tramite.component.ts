import { Component,  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Trámite {
  numero: number;
  producto: string;
  estado: string;
  fecha: string;
  cliente: string;
  medioDePago: string;
}

const ELEMENT_DATA: Trámite[] = [
  { numero: 1, producto: 'Transferencia vehicular', 
    estado: 'PENDIENTE', fecha: '20 May 2024', 
    cliente: 'María Alarcón', medioDePago: 'Efectivo' },
  { numero: 2, producto: 'Permiso de viaje', 
    estado: 'EN PROCESO', fecha: '20 May 2024', 
    cliente: 'María Alarcón', medioDePago: 'Tarjetas' },
  { numero: 3, producto: 'Sucesión', 
    estado: 'EN PROCESO', fecha: '20 May 2024', 
    cliente: 'María Alarcón', medioDePago: 'Transferencia' },
  { numero: 4, producto: 'Donación', 
    estado: 'EN PROCESO', fecha: '20 May 2024', 
    cliente: 'María Alarcón', medioDePago: 'Billeteras' },
  { numero: 5, producto: 'Constitución EIRL', 
    estado: 'ATENDIDO', fecha: '20 May 2024', 
    cliente: 'María Alarcón', medioDePago: 'Link de pago' }
];

@Component({
  selector: 'app-estado-tramite',
  templateUrl: './estado-tramite.component.html',
  styleUrls: ['./estado-tramite.component.css']
})
export class EstadoTramiteComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'producto', 'estado', 'fecha', 'cliente', 'medioDePago', 'verDetalle'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  estados = ['Todos', 'En Proceso', 'Atendido'];
  estadoSeleccionado = 'Todos';
  selectedSolicitud: any = null;
  editModalVisible = false;

  fileSelected: File | null = null;
  removeFile() {
    this.fileSelected = null;
  }
  constructor() { }

  ngOnInit() {
    this.filtrarPorEstado();
  }

  cambiarEstado(estado: string) {
    this.estadoSeleccionado = estado;
    this.filtrarPorEstado();
  }

  filtrarPorEstado() {
    if (this.estadoSeleccionado === 'Todos') {
      this.dataSource.data = ELEMENT_DATA;
    } else {
      const estadoNormalizado = this.estadoSeleccionado.toUpperCase();
      this.dataSource.data = ELEMENT_DATA.filter(tramite => tramite.estado.toUpperCase() === estadoNormalizado);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEstadoColor(estado: string):string{
    switch (estado) {
      case 'ATENDIDO':
        return 'estado-atendido';
      case 'EN PROCESO':
        return 'estado-en-proceso';
      case 'PENDIENTE':
        return 'estado-pendiente';
      default:
        return '';
    }
  }

  /*verDetalle(element: Trámite): void {
    console.log('Ver detalle', element);
  }*/

  verDetalle(element: any) {
    this.selectedSolicitud = element;
  }
  cerrarDetalle() {
    this.selectedSolicitud = null; 
  }
  openEditModal(): void {
    this.editModalVisible = true;
  }

  closeEditModal(): void {
    this.editModalVisible = false;
  }

  saveChanges(): void {
    // Aquí puedes agregar la lógica para guardar los cambios
    console.log('Cambios guardados:', this.selectedSolicitud);
    this.closeEditModal();
  }
}