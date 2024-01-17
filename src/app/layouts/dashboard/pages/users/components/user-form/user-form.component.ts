import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringValidator } from '../../../../../../utils/ValidatorsPersonalizados';


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
    else {
      /*let msgErrores="";
      for (let clave in this.userForm.controls) {
        if (this.userForm.controls.hasOwnProperty(clave)) {
          if (this.userForm.controls[clave].errors != null)
            msgErrores+=(clave)+" , ";
        }
      }*/
      alert("Formulario no enviado");
    }


  }
}
