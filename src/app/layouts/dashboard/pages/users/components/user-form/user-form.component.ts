import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { StringErrores, stringNumber, stringValidator } from '../../../../../../utils/FuncionesValidatorsErrores';
import { AlertaService } from '../dialog-alerts/dialog-alerts-service.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder, private alertaService: AlertaService) {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, stringValidator]),
      lastName: this.fb.control('', [Validators.required, stringValidator]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('', [Validators.required, Validators.min(6),stringNumber]),
      role: this.fb.control('', [Validators.required]),
    })
  }

  OnSubmit(): void {
    if (this.userForm.valid) {
      this.userSubmitted.emit(this.userForm.value);
      this.userForm.reset();
      // this.markControlsAsUntouched();
    }
    else {
      this.alertaService.Alerta(`No se acepto el formulario por errores en los datos`,'warning', '0ms', '0ms');
    }
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
