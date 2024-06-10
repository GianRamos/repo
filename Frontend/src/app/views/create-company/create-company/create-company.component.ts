import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DlgEsperaComponent } from 'src/app/dialogs/dlg-espera/dlg-espera.component';
import { DlgMensajeComponent } from 'src/app/dialogs/dlg-mensaje/dlg-mensaje.component';
import { ConstitucionService } from 'src/app/services/constitucion.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  currentStep = 1;
  backgroundImages: string[] = [
    '../../../assets/images/createCompany/1.svg', '../../../assets/images/createCompany/2.svg',
    '../../../assets/images/createCompany/3.svg', '../../../assets/images/createCompany/4.svg',
    '../../../assets/images/createCompany/step5.svg', '../../../assets/images/createCompany/step6.svg',
  ];

  stepForm!: FormGroup;
  isMobile: boolean = false;
  current_date: string = '';
  transactionNumber: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private constitucionService: ConstitucionService,
    public dialog: MatDialog
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }
  padWithZeros(number: number, length: number): string {
    return number.toString().padStart(length, '0');
  }
  generateTransactionNumber(): string {
    let transactionNumber = localStorage.getItem('transactionNumber');
    let currentNumber = transactionNumber !== null ? parseInt(transactionNumber) : 0;
    currentNumber += 1;
    // Guarda el nuevo número en el localStorage
    localStorage.setItem('transactionNumber', currentNumber.toString());
    return this.padWithZeros(currentNumber, 5);
  }

  ngOnInit() {
    this.stepForm = this.formBuilder.group({
      step1: this.formBuilder.group({
        company: ['', Validators.required],
        numsocios: ['']
      }),
      step2: this.formBuilder.group({
        capitalType: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(100)]]
      }),
      step3: this.formBuilder.group({
        name1: this.formBuilder.group({
          name: ['', Validators.required],
          abbreviation: ['']
        }),
        name2: this.formBuilder.group({
          name: ['', Validators.required],
          abbreviation: ['']
        }),
        name3: this.formBuilder.group({
          name: ['', Validators.required],
          abbreviation: ['']
        }),
        activities: ['', Validators.required]
      }),
      step4: this.formBuilder.group({
        location: ['', Validators.required],
        notaria: this.formBuilder.group({
          province: [''],
          /*district: [''],*/
        }),
        domicilio: this.formBuilder.group({
          /*province: [''],
          district: [''],*/
          address: ['']
        })
      }),
      step5: this.formBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        documentType: ['', Validators.required],
        documentNumber: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', Validators.required],
        terms: [false, Validators.requiredTrue]
      }),
      step6: this.formBuilder.group({
        paymentOption: ['', Validators.required],
        paymentMethod: ['', Validators.required],
        totalAmount: ['']
      }),
      fileSelectedPay: '',
      fileSelectName: ''
    });

    this.initMap();
    this.checkIfMobile();
    this.currentDate();

    /*---PARA EL MONTO TOTAL, DEL STEP 1 AL STEP 6--- */
    const rangos = [
      { min: 50, max: 10000, adicional: 0 },
      { min: 10001, max: 20000, adicional: 65 },
      { min: 20001, max: 50000, adicional: 155 },
      { min: 50001, max: 80000, adicional: 250 },
      { min: 80001, max: 100000, adicional: 315 },
      { min: 100001, max: 150000, adicional: 500 },
      { min: 150001, max: 200000, adicional: 650 },
    ];

    let totalBase = 429; // Monto base

    this.stepForm.get('step1.company')?.valueChanges.subscribe(company => {
      if (company === 'eirl') {
        totalBase = 429;
        this.stepForm.get('step6.totalAmount')?.setValue(totalBase);
      }
    });

    this.stepForm.get('step1.numsocios')?.valueChanges.subscribe(opcion => {
      let extraCost = 0;
      let opcionNumero = parseInt(opcion.replace('opcion', ''));
      if (opcionNumero > 2) {
        extraCost = (opcionNumero - 2) * 25;
      }
      totalBase = 429 + extraCost;
      this.stepForm.get('step6.totalAmount')?.setValue(totalBase);
    });

    //  valor del input ingresado en step 2
    this.stepForm.get('step2.amount')?.valueChanges.subscribe(monto => {
      // Buscar rango según el monto ingresado
      const rango = rangos.find(r => monto >= r.min && monto <= r.max);

      if (rango) {
        // Si se encontró un rango, calcular el total a pagar
        const total = totalBase + rango.adicional;
        this.stepForm.get('step6.totalAmount')?.setValue(total);
      }
    });

    this.transactionNumber = this.generateTransactionNumber();

  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 430;
  }

  //para label de opciones step1
  updateSelectClass(event: Event) {
    let target = event.target as HTMLSelectElement;
    if (target.value) {
      target.classList.add('has-value');
    } else {
      target.classList.remove('has-value');
    }
  }

  //step 2: opción APORTE MIXTO
  aporteMixto: boolean = false;
  mostrarModalWhatsapp: boolean = false;
  abrirModalWhatsapp() {
    this.openModal('mix-contribution-step6');
  }

  openWhatsApp() {
    const url = 'https://wa.me/51918795733?text=%C2%A1Hola!,%20%C2%A1deseo%20informaci%C3%B3n%20para%20la%20gesti%C3%B3n%20de%20mi%20negocio';
    window.open(url, '_blank');
  }

  selectedLocation: string = '';
  selectedOption: string = '';
  stepsStatus: boolean[] = [true, false, false, false, false, false];
  optionSelected: boolean = false;

  //Botones de Continuar y regresar
  nextStep() {
    if (this.currentStep < 6) {
      this.stepsStatus[this.currentStep - 1] = false;
      this.currentStep++;
      this.stepsStatus[this.currentStep - 1] = true; // Marcar el siguiente paso como activo
    }
  }

  previousStep() {
    // Verificar si se está en los subpasos de Notaria o Domicilio
    if (this.showNotariaOptions || this.showDomicilioOptions) {
      // Ocultar los subpasos y volver al inicio del Step 4
      this.goBackToStep4();
    } else {
      // Implementar la lógica para retroceder al paso anterior
      if (this.currentStep > 1) {
        this.stepsStatus[this.currentStep - 1] = false;
        this.currentStep--;
        this.stepsStatus[this.currentStep - 1] = true;
      }
    }
  }

  //Botón de regresar de los subpasos de Notaria y Domicilio
  goBackToStep4() {
    // Ocultar los subpasos de Notaria y Domicilio
    this.showNotariaOptions = false;
    this.showDomicilioOptions = false;

    // Reiniciar los validadores para las opciones de Notaria y Domicilio
    this.stepForm.get('step4.notaria.province')?.clearValidators();
    this.stepForm.get('step4.notaria.district')?.clearValidators();
    this.stepForm.get('step4.domicilio.province')?.clearValidators();
    this.stepForm.get('step4.domicilio.district')?.clearValidators();
    this.stepForm.get('step4.domicilio.address')?.clearValidators();

    // Actualizar la validez de los campos en el formulario
    this.stepForm.get('step4.notaria.province')?.updateValueAndValidity();
    this.stepForm.get('step4.notaria.district')?.updateValueAndValidity();
    this.stepForm.get('step4.domicilio.province')?.updateValueAndValidity();
    this.stepForm.get('step4.domicilio.district')?.updateValueAndValidity();
    this.stepForm.get('step4.domicilio.address')?.updateValueAndValidity();
  }

  //Abrir y cerrar el modal
  openModal(modalId: string) {
    if (this.isMobile && modalId === 'modal1') {
      modalId = 'modalMobile';
    }
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal(modalId: string) {
    let modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    }
  }

  //STEP 4 - Subpasos (En notaria, En tu domicilio)
  showNotariaOptions: boolean = false;
  showDomicilioOptions: boolean = false;
  showSubstep() {
    const location = this.stepForm.get('step4.location')?.value;
    console.log('Location:', location);
    if (location === 'notaria') {
      this.showNotariaOptions = true;
      this.showDomicilioOptions = false;
      // Validación a province y district
      this.stepForm.get('step4.notaria.province')?.setValidators(Validators.required);
      this.stepForm.get('step4.notaria.district')?.setValidators(Validators.required);
      //validación a province y district en domicilio
      this.stepForm.get('step4.domicilio.province')?.clearValidators();
      this.stepForm.get('step4.domicilio.district')?.clearValidators();
      this.stepForm.get('step4.domicilio.address')?.setValidators(Validators.required);

    } else if (location === 'domicilio') {
      this.showDomicilioOptions = true;
      this.showNotariaOptions = false;
      // Añade validación a province y district
      this.stepForm.get('step4.domicilio.province')?.setValidators(Validators.required);
      this.stepForm.get('step4.domicilio.district')?.setValidators(Validators.required);
      this.stepForm.get('step4.domicilio.address')?.setValidators(Validators.required);

      // Elimina validación de province y district en notaria si existe
      this.stepForm.get('step4.notaria.province')?.clearValidators();
      this.stepForm.get('step4.notaria.district')?.clearValidators();
    }
    // Actualiza la validación en el formulario
    this.stepForm.get('step4.notaria.province')?.updateValueAndValidity();
    this.stepForm.get('step4.notaria.district')?.updateValueAndValidity();
    this.stepForm.get('step4.domicilio.province')?.updateValueAndValidity();
    this.stepForm.get('step4.domicilio.district')?.updateValueAndValidity();
    this.stepForm.get('step4.domicilio.address')?.updateValueAndValidity();
  }

  //STEP 4 Mostrar mensaje de opciones Notaria y Domicilio
  showFirstBox: boolean = true;
  showSecondBox: boolean = false;

  toggleMessage(option: string) {
    if (option === 'notaria') {
      this.showFirstBox = true;
      this.showSecondBox = false;
    } else if (option === 'domicilio') {
      this.showSecondBox = true;
      this.showFirstBox = false;
    }
    this.checkOptionSelected();
  }

  //Verificar si se ha seleccionado alguna opción
  checkOptionSelected(): void {
    this.optionSelected = this.isOptionSelected();
  }

  // Verifica si alguna de las opciones está seleccionada
  isOptionSelected(): boolean {
    return this.selectedOption !== '';
  }

  // STEP 4 - NOTARIA
  selectedProvince: string = 'Selecciona tu provincia';
  selectedDistrict: string = 'Selecciona tu distrito';
  costoAdicional: number = 0;
  optionsProvince: string[] = ['Selecciona tu provincia', 'Lima metropolitana-Callao'];
  optionsDistrict: string[] = ['Selecciona tu distrito', 'Centro de Lima', 'El Agustino', 'San Miguel', 'Villa El Salvador'];
  notarias: { nombre: string, seleccionada: boolean, address: string }[] = [];

  provinciaSeleccionada(event: any) {
    const provincia = event.target.value;
    console.log('Provincia seleccionada:', provincia);
    this.selectedProvince = provincia;
    console.log('Selected Province:', this.selectedProvince);
    this.mostrarNotarias();
  }

  distritoSeleccionado(event: any) {
    const distrito = event.target?.value;
    console.log('Distrito seleccionado:', distrito);
    if (distrito) {
      this.selectedDistrict = distrito;
      this.actualizarMensajeCostoAdicional(distrito);
    } else {
      this.selectedDistrict = '';
      this.costoAdicional = 0;
    }
  }

  mostrarNotarias() {
    this.notarias = [
      {
        nombre: 'Notaria Ramos',
        seleccionada: false,
        address: 'Av. de la Marina 1443, San Miguel',
      }
      /*{ nombre: 'Notaria Lucia', seleccionada: false },
      { nombre: 'Notaria Mendez', seleccionada: false },
      { nombre: 'Notaria Rosa', seleccionada: false },
      { nombre: 'Notaria Zambrano', seleccionada: false },*/
    ];
  }

  actualizarMensajeCostoAdicional(distrito: string) {
    const costoAdicionalPorDistrito: { [key: string]: number } = {
      'Centro de Lima': 0,
      'El Agustino': 0,
      'Villa El Salvador': 0,
      'San Miguel': 40 // Costo adicional para San Miguel
    };
    // Actualizar el costo adicional en función del distrito seleccionado
    this.costoAdicional = costoAdicionalPorDistrito[distrito] || 0;
  }

  //STEP 6
  accountNumberBCP: string = '1934200706072';
  accountNumberOtherBanks: string = '0021934200706072';

  showVerificationInstructions: boolean = true;

  copyAccountNumberBCP() {
    navigator.clipboard.writeText(this.accountNumberBCP)
      .then(() => {
        console.log('Número de cuenta BCP copiado');
      })
      .catch(err => {
        console.error('Error al copiar número de cuenta BCP', err);
      });
  }

  copyAccountNumberOtherBanks() {
    navigator.clipboard.writeText(this.accountNumberOtherBanks)
      .then(() => {
        console.log('Número de cuenta copiado');
      })
      .catch(err => {
        console.error('Error al copiar número de cuenta', err);
      });
  }

  fileSelectedPay: File | null = null;
  //selección de archivo
  onFileSelected(event: any) {
    this.fileSelectedPay = event.target.files[0];
  }

  removeFile() {
    this.fileSelectedPay = null;
  }

  showDirectionInput: boolean = false;

  toggleDirectionInput() {
    this.showDirectionInput = !this.showDirectionInput;
  }

  //STEP 3
  fileSelectedDoc: File | null = null;
  errorMessage: string | null = null;

  onFileSelectedForDocumentation(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.fileSelectedDoc = file;
      console.log('Archivo PDF seleccionado:', file.name);
    } else {
      this.fileSelectedDoc = null;
      this.errorMessage = 'Por favor, seleccione un archivo .pdf';
      console.log('Por favor, seleccione un archivo PDF.');
    }
  }

  removeFileDoc() {
    this.fileSelectedDoc = null;
    this.errorMessage = null;
  }

  uploadFileDoc() {
    if (this.fileSelectedDoc) {
      console.log('Archivo subido: ', this.fileSelectedDoc.name);
      this.closeModal('modal-Razon-social');
    } else {
      console.log('No se seleccionó ningún archivo para subir');
    }
  }

  initMap(): void {
    // Inicializar el mapa
    const myLatlng = new google.maps.LatLng(-12.0796801, -77.078802); // Latitud y longitud
    const mapOptions = {
      zoom: 16,
      center: myLatlng,
      draggable: true
    };
  }

  //STEP 6 - DATE
  currentDate(): void {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    this.current_date = dd + '/' + mm + '/' + yyyy;
  }
  //generar número de trámite
  /*generateTransactionNumber(): string {
    let transactionNumber = Math.floor(Math.random() * 1000000);
    localStorage.setItem('transactionNumber', transactionNumber.toString());
    return transactionNumber.toString();
  }*/

  // Recupera el número de trámite del LocalStorage
  /*getTransactionNumber(): string {
    let transactionNumber = localStorage.getItem('transactionNumber');
    return transactionNumber !== null ? transactionNumber : '';
  }*/

  //Modal step 1 acordeón
  detailsClick(option: string) {
    const detailsElements = document.querySelectorAll('.container-typecompany-modal details');
    detailsElements.forEach((element: Element) => {
      const details = element as HTMLElement;
      if (details.getAttribute('id') !== option) {
        details.removeAttribute('open');
      }
    });
  }

  enviarPago() {
    var form = this.stepForm.getRawValue();
    //console.log(form);

    let dialogRef = this.dialog.open(DlgEsperaComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true
    });

    this.constitucionService.addConstitucion(form).subscribe(response => {
      if (response.estado === "success") {
        this.router.navigate(['/']);

        // this.openModal('modal-paymentsent');
        // this.msgInformativo("Enviado Correctamente");
      }
      dialogRef.close();
    }, error => {
      alert("Error interno");
      dialogRef.close();
    });
  }

  msgInformativo(msg: string) {
    let dialogRef = this.dialog.open(DlgMensajeComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true,
      data: {
        msg: msg
      }
    });
    return;
  }

}
