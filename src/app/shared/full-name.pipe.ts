import { Pipe, PipeTransform } from '@angular/core';

export interface UserPipe {
  firstName: string,
  lastName: string,
}

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: UserPipe, mode?: 'uppercase' | 'lowercase', ...args: unknown[]): unknown {
    const result = value.lastName + ' ' + value.firstName;
    console.log(args);

    if (mode === "uppercase")
      return result.toUpperCase();
    if (mode === "lowercase")
      return result.toLowerCase();

    return result;
  }

}
