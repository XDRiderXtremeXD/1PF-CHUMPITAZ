import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringErrores, stringNumber, stringValidator } from '../../../../../../utils/FuncionesValidatorsErrores';
import { DialogAlertsComponent } from '../dialog-alerts/dialog-alerts.component';
import { AlertaService } from '../dialog-alerts/dialog-alerts-service.service';

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
    private fb: FormBuilder,
    public dialog: MatDialog,
    private alertaService: AlertaService) {
    this.userFormEdit = this.fb.group({
      firstName: this.fb.control('', [stringValidator]),
      lastName: this.fb.control('', [stringValidator]),
      phone: this.fb.control('', [stringNumber, Validators.min(6)]),
      role: this.fb.control(''),
    })
  }

  EditStudent(): void {
    if (this.userFormEdit.valid) {
      if (this.isFormDirty(this.userFormEdit)) {
        this.editStudent.emit(this.userFormEdit.value);
        this.dialogRef.close(); // Cierra el diálogo después de emitir el evento
      } else {
        this.alertaService.Alerta("No se realizaron cambios en el formulario.",'warning', '0ms', '0ms');
      }
    }
    else
      this.alertaService.Alerta("Error en los datos ingresados, verifique los errores",'warning', '0ms', '0ms');
  }

  getErrors(formControlName: string): string | null | undefined {
    const errores = this.userFormEdit.get(formControlName)?.errors;
    return StringErrores(errores);
  }

  private isFormDirty(formGroup: FormGroup): boolean {
    return Object.keys(formGroup.controls).some(controlName => formGroup.get(controlName)?.dirty);
  }

}
