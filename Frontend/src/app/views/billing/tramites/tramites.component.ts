import { Component } from '@angular/core';

type OptionKeys = "TRÁMITES PROTOCOLARES" | "TRÁMITES EXTRA PROTOCOLARES";

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent {
  fileSelectedPay: File | null = null;

  removeFile() {
    this.fileSelectedPay = null;
  }

  options: OptionKeys[] = ["TRÁMITES PROTOCOLARES", "TRÁMITES EXTRA PROTOCOLARES"];
  selectedOption: OptionKeys | null = null;
  selectedSubOption: string | null = null;

  subOptions: { [key in OptionKeys]: string[] } = {
    "TRÁMITES PROTOCOLARES": [
      "Aumento o reducción de capital",
      "Poder por escritura pública",
      "Transferencia de acciones",
      "Nombramiento de gerentes",
      "Disolución o Liquidación de la empresa",
      "Constitución de garantía hipotecaria",
      "Acta de junta general de accionistas",
      "Acta"
    ],
    "TRÁMITES EXTRA PROTOCOLARES": [
      "Carta express multidistrito",
      "Legalización de copia",
      "Poder fuera de registro",
      "Legalizaciones",
      "Legalización de Libro",
      "Legalización de firma/jurídica/apoderado",
      "Legalización de firma/natural",
      "Legalización de copa certificada",
      "Carta notarial por distrito"
    ]
  };
  onSelect(event: Event) {
    if (event.target) {
      const value = (event.target as HTMLSelectElement).value;
      this.selectedOption = value ? (value as OptionKeys): null;
      this.selectedSubOption = null;
    }
  }
}
