import { TitleService } from './../../../services/title.service';
import { Component, ViewChild,OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-generar-comprobante',
  templateUrl: './generar-comprobante.component.html',
  styleUrls: ['./generar-comprobante.component.css']
})
export class GenerarComprobanteComponent implements  OnInit {
  // @ViewChild('precio') precio!: ElementRef;
  public dataCaptured: boolean = false;

  isDisabled = false;
  numCodigo: string = '0000001';
  totalCost: number = 0;
  servicios: any[] = [];


  productoForm!: FormGroup;

  constructor(private fb: FormBuilder, private TitleService: TitleService, private route: ActivatedRoute) { }

  ngOnInit() {
    const title = this.route.snapshot.data['Generar'];
    this.TitleService.changeTitle(title);
    this.productoForm = this.fb.group({
      productos: this.fb.array([
        this.fb.group({
          codigo: [''],
          descripcion: [''],
          precio: [''],
          cantidad: [''],
          total: [''],
          servicio: [''],
          tipo: ['']
        })
      ])
    });
  }
  // ngAfterViewInit() {
  //   this.precio.nativeElement.addEventListener('input', (e: Event) => {
  //     let input = e.target as HTMLInputElement;
  //     if (!input.value.startsWith('S/.')) {
  //       input.value = 'S/. ' + input.value;
  //     }
  //   });
  // }
  get productos() {
    return this.productoForm.get('productos') as FormArray;
  }
  addProducto(producto:any) {
    const productoGroup = this.fb.group({
      codigo: [producto.codigo],
      descripcion: [producto.descripcion],
      precio: [producto.precio],
      cantidad: [producto.cantidad],
      total: [producto.total]
    });
    this.productos.push(productoGroup);
    console.log(this.productos.at(this.productos.length - 1).value, 'PRODUCTO')
  }
  deleteProducto(index:number) {
    this.productos.removeAt(index);
  }

  agregarNuevoServicio(): void {
    this.servicios.push({
      tipo: '',
      precio: '',
      cantidad: '',
      checkbox: false,
      descripcion: ''
    });
  }

  limpiarDatosInputs(): void {
    this.servicios = [];
  }

  eliminarServicio(index: number): void {
    this.servicios.splice(index, 1);
  }

  limpiarInputs() {
    const inputs = document.querySelectorAll('.contenedor_data_comprobante input');
    const selects = document.querySelectorAll('.contenedor_data_comprobante select');

    Array.from(inputs).forEach((input) => {
      let htmlInput = input as HTMLInputElement;
      htmlInput.value = '';
    });

    Array.from(selects).forEach((select) => {
      let htmlSelect = select as HTMLSelectElement;
      htmlSelect.selectedIndex = 0;
    });
  }

  capturarData() {
    const inputs = document.querySelectorAll('.section_3 input');
    const selects = document.querySelectorAll('.section_3 select');

    let data: Record<string, string> = {};

    Array.from(inputs).forEach((input) => {
      let htmlInput = input as HTMLInputElement;
      data[htmlInput.id] = htmlInput.value;
    });

    Array.from(selects).forEach((select) => {
      let htmlSelect = select as HTMLSelectElement;
      data[select.id] = htmlSelect.options[htmlSelect.selectedIndex].value;
    });
console.log(data, "114")

const allFieldsFilled = Object.values(data).every((value) => value !== '');

if (allFieldsFilled) {
  data['total'] = (Number(data['precio']) * Number(data['cantidad'])).toString();

  this.servicios.push(data);

  console.log(this.servicios, "122");
  this.dataCaptured = true;
  this.limpiarInputs()
} else {
  console.log('Todos los campos deben estar llenos');
}
return data;
      }
  moverDatos() {
    const checkboxes = document.querySelectorAll('.contenedor_data_comprobante input[type="checkbox"]:checked');

    Array.from(checkboxes).forEach((checkbox) => {
      const servicioDiv = checkbox.closest('.contenedor_data_comprobante');
      if (servicioDiv) {
        const servicio = servicioDiv.cloneNode(true);
        servicioDiv.remove();
        // Aquí puedes agregar el servicio clonado a donde desees
      }
    });
  }

  generarInputsDesdeCheckbox(): void {
    this.agregarNuevoServicio();
  }

  generarInputsDesdePlus(): void {
    this.agregarNuevoServicio();
  }

  calcularTotalCosto(): number {
    let subtotal = 0;
    this.servicios.forEach(servicio => {
      subtotal += parseFloat(servicio.precio) * parseFloat(servicio.cantidad);
    });
    const igv = subtotal * 0.18;
    const total = subtotal + igv;
    return total;
  }

  calcularSubtotal() {
    let subtotal = 0;
    for (let producto of this.servicios) {
        let total = Number(producto.total);
        subtotal += total;
    }
    return subtotal;
}

calcularIGV() {
    return this.calcularSubtotal() * 0.18;
}

calcularTotal() {
    return this.calcularSubtotal() + this.calcularIGV();
}

eliminarProducto(index: number) {
  this.servicios.splice(index, 1);
}

eliminarComprobante(){
  Swal.fire({
    showCloseButton: true,
    title: "¿Estás seguro de <strong>ELIMINAR</strong> el comprobante?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    iconColor: "#FFC100",
    showCancelButton: true,
    confirmButtonColor: "#0f72a1",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sí, eliminarlo",
    customClass: {
      title: 'custom-title'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        showCloseButton: true,
        title: "<strong>¡Eliminado!</strong>",
        html: "El <strong>comprobante</strong> ha sido eliminado.",
        icon: "success",
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#0f72a1',
        customClass: {
          title: 'custom-title'
        }
      });
      // Aquí puedes agregar la lógica para eliminar el comprobante
    }
  });
}

guardarComprobante(){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "El <strong>comprobante</strong> se guardó!",
    showConfirmButton: false,
    timer: 3000,
    width: '400px',
    heightAuto: false,
 } )
}
generarComprobante(){
  Swal.fire({
    position: "top-end",
    showConfirmButton: false,
    icon: "success",
    title: "Se generó el <b>comprobante!</b>",
    width: '400px',
    // html: "I will close in <b></b> milliseconds.",
    timer: 3000,
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}


// inicializarFormulario(): void {
//   this.formularioReclamos = this.formBuilder.group({
//     fecha:[this.obtenerFechaActual()],
//     codigo: ['000 000001-201X'],
//     nombre: ['', Validators.required],
//     apellido: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     telefono: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
//     tipoDocumento: ['', Validators.required],
//     numeroDocumento: ['', [Validators.required, Validators.pattern('[0-9]+')]],
//     departamento: ['', Validators.required],
//     provincia: ['', Validators.required],
//     distrito: ['', Validators.required],
//     direccion: ['', Validators.required],
//     nombreTutor: [''],
//     apellidoTutor: [''],
//     tipoDocumentoTutor: [''],
//     numeroDocumentoTutor: [''],
//     // identificacionBienContratado: [''],
//     descripcionBienContratado: ['', Validators.required],
//     tipoReclamacion: [''],
//     detalleReclamacion: ['', Validators.required],
//     pedidoReclamacion: ['', Validators.required],
//     file:[null],
//     autorizoNotificacionResultado: ['', Validators.required],
//     privacidad: ['', Validators.requiredTrue]
//   });
// }

// this.form = this.formBuilder.group({
//   productos: this.formBuilder.array([
//     this.formBuilder.group({
//       servicio: [''],
//       tipo: ['']
//     })
//   ])
// });
}


