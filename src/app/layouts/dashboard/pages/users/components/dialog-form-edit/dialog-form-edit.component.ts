import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringValidator } from '../../../../../../utils/ValidatorsPersonalizados';

@Component({
  selector: 'app-dialog-form-edit',
  templateUrl: './dialog-form-edit.component.html',
  styleUrl: './dialog-form-edit.component.scss'
})
export class DialogEditStudent {
  @Output()
  editStudent = new EventEmitter();

  userFormEdit: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogEditStudent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: Student },
    private fb: FormBuilder) {
    this.userFormEdit = this.fb.group({
      firstName: this.fb.control('', [Validators.required, stringValidator]),
      lastName: this.fb.control('', [Validators.required, stringValidator]),
    })
  }

  EditStudent(): void {
    if (this.userFormEdit.valid) {
      this.editStudent.emit(this.userFormEdit.value);
      this.dialogRef.close(); // Cierra el diálogo después de emitir el evento
    }
    else
      alert("Error:El nombre y apellido deben ser letras");
  }


}
