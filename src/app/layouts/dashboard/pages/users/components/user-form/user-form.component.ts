import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { StringErrores, stringValidator } from '../../../../../../utils/FuncionesValidatorsErrores';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
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
    }
    else
      alert("Formulario no enviado");
  }

  getErrors(formControlName: string): string | null | undefined {
    const errores = this.userForm.get(formControlName)?.errors;
    return StringErrores(errores);
  }
}
