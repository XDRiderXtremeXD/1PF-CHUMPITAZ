import { AbstractControl, ValidationErrors } from "@angular/forms";

export function stringValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value !== null && typeof value !== 'string')
    return { notAString: true };
  if (!/^[a-zA-Z]+$/.test(value))
    return { containsNonLetters: true }
  return null;
}

export function StringErrores(errores: any) {
  if (errores?.['required'])
    return "Dato requerido";
  if (errores?.['containsNonLetters'] || errores?.['notAString'])
    return "Debe ser solo letras";
  if (errores?.['email'])
    return "Debe ser formato email";
  return "Error en el formato";
}
