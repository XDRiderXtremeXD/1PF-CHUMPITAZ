import { AbstractControl, ValidationErrors } from "@angular/forms";

export function stringValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value !== null && typeof value !== 'string')
    return { notAString: true };
  if (/\d/.test(value))
    return { notAStringNumber: true }
  return null;
}
