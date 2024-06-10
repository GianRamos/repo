import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {
  addItemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddItemModalComponent>
  ) {
    this.addItemForm = this.fb.group({
      producto: ['', Validators.required],
      codigo: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  onAdd() {
    if (this.addItemForm.valid) {
      this.dialogRef.close(this.addItemForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
