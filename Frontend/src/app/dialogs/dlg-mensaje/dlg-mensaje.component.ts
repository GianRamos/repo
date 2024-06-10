import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface ResponseAlert {
  msg: string;
}

@Component({
  selector: 'app-dlg-mensaje',
  templateUrl: './dlg-mensaje.component.html',
  styleUrls: ['./dlg-mensaje.component.css']
})
export class DlgMensajeComponent {

  constructor(
    public dialogRef: MatDialogRef<DlgMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseAlert
  ) { }
  msg: string = "";
  ngOnInit(): void {
    this.msg = this.data.msg;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
