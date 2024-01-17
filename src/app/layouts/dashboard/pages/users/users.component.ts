import { Component } from '@angular/core';
import { Student } from './models/index';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogDeleteStudent } from './components/dialog-delete-student/dialog.component';
import { DialogEditStudent } from './components/dialog-form-edit/dialog-form-edit.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'borrarAlumno', 'editarAlumno'];
  dataSource: Student[] = [
    {
      id: 1,
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naru@mail.com',
    },
    {
      id: 2,
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasuke@mail.com'
    },
  ];

  onUserSubmitted(ev: Student): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }

  EliminarAlumno(user: any): void {
    this.dataSource = this.dataSource.filter((userData) => userData.email !== user.email);
  }


  constructor(public dialog: MatDialog) { }

  ConfirmarEliminar(user: Student, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogDeleteStudent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { user }
    });

    dialogRef.componentInstance.userDelete.subscribe((deletedUser: Student) => {
      this.EliminarAlumno(deletedUser);
    });
  }

  EditarAlumno(user: Student) {
    const dialogRef = this.dialog.open(DialogEditStudent, {
      data: { user }
    });

    dialogRef.componentInstance.editStudent.subscribe((editStudent: Student) => {
      const indice = this.dataSource.findIndex((userData) => userData.email === user.email);
      if (indice !== -1) {
        this.dataSource[indice].firstName = editStudent.firstName;
        this.dataSource[indice].lastName = editStudent.lastName;
        this.dataSource = [...this.dataSource];
      }
    });
  }


}
