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
  dataSource: Student[] = [];
  dataSourceRegister: Student[] = [
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
    {
      id: 3,
      firstName: 'Sakura',
      lastName: 'Haruno',
      email: 'sakura@mail.com',
    },
    {
      id: 4,
      firstName: 'Kakashi',
      lastName: 'Hatake',
      email: 'kakashi@mail.com',
    },
    {
      id: 5,
      firstName: 'Hinata',
      lastName: 'Hyuga',
      email: 'hinata@mail.com',
    },
    {
      id: 6,
      firstName: 'Shikamaru',
      lastName: 'Nara',
      email: 'shikamaru@mail.com',
    },
    {
      id: 7,
      firstName: 'Ino',
      lastName: 'Yamanaka',
      email: 'ino@mail.com',
    },
    {
      id: 8,
      firstName: 'Choji',
      lastName: 'Akimichi',
      email: 'choji@mail.com',
    },
    {
      id: 9,
      firstName: 'Neji',
      lastName: 'Hyuga',
      email: 'neji@mail.com',
    },
    {
      id: 10,
      firstName: 'Rock',
      lastName: 'Lee',
      email: 'rock@mail.com',
    },
    {
      id: 11,
      firstName: 'Tenten',
      lastName: 'Tenten',
      email: 'tenten@mail.com',
    },
    {
      id: 12,
      firstName: 'Kiba',
      lastName: 'Inuzuka',
      email: 'kiba@mail.com',
    },
    {
      id: 13,
      firstName: 'Hinata',
      lastName: 'Kurenai',
      email: 'kurenai@mail.com',
    },
    {
      id: 14,
      firstName: 'Gaara',
      lastName: 'Gaara',
      email: 'gaara@mail.com',
    },
    {
      id: 15,
      firstName: 'Temari',
      lastName: 'Temari',
      email: 'temari@mail.com',
    },
    {
      id: 16,
      firstName: 'Kankuro',
      lastName: 'Kankuro',
      email: 'kankuro@mail.com',
    },
    {
      id: 17,
      firstName: 'Jiraiya',
      lastName: 'Jiraiya',
      email: 'jiraiya@mail.com',
    },
  ];

  onUserSubmitted(ev: Student): void {
    if (!this.dataSourceRegister.some((element) => element.email === ev.email)) {
      this.dataSourceRegister = [...this.dataSourceRegister, { ...ev, id: new Date().getTime() }];
      this.dataSource = [...this.dataSourceRegister];
    }
    else
      alert("No se puede agregar un nuevo alumno con un email registrado");
  }

  EliminarAlumno(user: any): void {
    this.dataSourceRegister = this.dataSourceRegister.filter((userData) => userData.email !== user.email);
    this.dataSource = [...this.dataSourceRegister];
  }

  constructor(public dialog: MatDialog) {
    this.dataSource = [...this.dataSourceRegister];

  }

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
      const indice = this.dataSourceRegister.findIndex((userData) => userData.email === user.email);
      if (indice !== -1) {
        this.dataSourceRegister[indice].firstName = editStudent.firstName;
        this.dataSourceRegister[indice].lastName = editStudent.lastName;
        this.dataSource = [...this.dataSourceRegister];
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const search = filterValue.trim().toLowerCase();
    this.dataSource = this.dataSourceRegister.filter((student: Student) => {
      return (student.firstName.includes(search) ||
        student.lastName.includes(search) ||
        student.email.includes(search))
    });
  }

}
