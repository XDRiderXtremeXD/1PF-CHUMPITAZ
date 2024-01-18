import { Pipe, PipeTransform } from '@angular/core';

export interface UserPipe {
  firstName: string,
  lastName: string,
}

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: UserPipe, mode?: 'uppercase' | 'lowercase' | 'capitalcase', ...args: unknown[]): unknown {
    let result = value.lastName + ' ' + value.firstName;
    //console.log(args);

    if (mode === "uppercase")
      return result.toUpperCase();
    if (mode === "lowercase")
      return result.toLowerCase();

    //CAPITALIZAR
    if (mode === "capitalcase") {
      const divisionesFirstName = value.firstName.split(" ");
      const divisionesLastName = value.lastName.split(" ");
      result = " ";
      divisionesLastName.forEach(element => {
        result += (element.charAt(0).toUpperCase() + element.slice(1) + " ");
      });
      divisionesFirstName.forEach(element => {
        result += (element.charAt(0).toUpperCase() + element.slice(1) + " ");
      });
    }
    //////
    return result;
  }

}
