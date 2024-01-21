import { AbstractControl, ValidationErrors } from '@angular/forms';

export function stringValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value === "")
    return null;

  if (value !== null && typeof value !== 'string') {
    return { notAString: true };
  }
  // Modificado el regex para permitir letras y espacios
  if (!/^[a-zA-Z\s]+$/.test(value)) {
    return { containsNonLetters: true };
  }
  return null;
}

export function stringNumber(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value === "")
    return null;

  if (value !== null && typeof value !== 'string') {
    return { notAString: true };
  }

  // Modificado el regex para aceptar solo números y un símbolo "+" en el primer carácter
  if (!/^\+?[0-9]+$/.test(value)) {
    return { containsNonNumbers: true };
  }

  return null;
}

export function StringErrores(errores: any) {
  if (errores?.['required'])
    return "Dato requerido";
  if (errores?.['containsNonLetters'] || errores?.['notAString'])
    return "Debe ser solo letras";
  if (errores?.['containsNonNumbers'])
    return "(+) Debe tener solo numeros";
  if (errores?.['email'])
    return "Debe ser formato email";
  if (errores?.['min']) {
    console.log(errores);
    return `Debe tener minimo ${errores.min.min} carateres`;
  }

  return "Error en el formato";
}
