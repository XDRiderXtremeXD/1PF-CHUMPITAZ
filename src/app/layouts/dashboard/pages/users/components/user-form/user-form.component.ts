import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { StringErrores, stringValidator } from '../../../../../../utils/FuncionesValidatorsErrores';
import { DialogAlertsComponent } from '../dialog-alerts/dialog-alerts.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder,public dialog: MatDialog) {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, stringValidator]),
      lastName: this.fb.control('', [Validators.required, stringValidator]),
      email: this.fb.control('', [Validators.required, Validators.email])
    })
  }

  OnSubmit(): void {
    if (this.userForm.valid) {
      this.userSubmitted.emit(this.userForm.value);
      this.userForm.reset();
      // this.markControlsAsUntouched();
    }
    else{
      this.Alerta(`No se acepto el formulario por errores en los datos`,'0ms', '0ms');
    }
  }

  Alerta(mensaje: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAlertsComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
    data: { mensaje }
  });
  }
  // markControlsAsUntouched() {
  //   Object.values(this.userForm.controls).forEach(control => {
  //     control.markAsUntouched();
  //   });
  // }

  getErrors(formControlName: string): string | null | undefined {
    const errores = this.userForm.get(formControlName)?.errors;
    return StringErrores(errores);
  }
}
