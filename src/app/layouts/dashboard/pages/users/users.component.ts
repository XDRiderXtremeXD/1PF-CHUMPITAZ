import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Student } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteStudent } from './components/dialog-delete-student/dialog.component';
import { DialogEditStudent } from './components/dialog-form-edit/dialog-form-edit.component';
import studentsData from './studentsData.json';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogAlertsComponent } from './components/dialog-alerts/dialog-alerts.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'borrarAlumno', 'editarAlumno'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  onUserSubmitted(ev: Student): void {
    if (!this.dataSource.data.some((element) => element.email === ev.email)) {
      this.dataSource.data = [...this.dataSource.data, { ...ev, id: new Date().getTime() }];
      this.Alerta(`Usuario Agregado ${ev.firstName} ${ev.lastName}`,'0ms', '0ms');
    } else {
      this.Alerta(`No se puede agregar un nuevo alumno con un email registrado`,'0ms', '0ms');
    }
  }

  EliminarAlumno(user: Student): void {
    this.dataSource.data = this.dataSource.data.filter((userData) => userData.email !== user.email);
  }

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(studentsData);
  }

  ConfirmarEliminar(user: Student, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogDeleteStudent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { user }
    });

    dialogRef.componentInstance.userDelete.subscribe(() => {
      this.EliminarAlumno(user);
    });
  }

  Alerta(mensaje: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(DialogAlertsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { mensaje }
    });
  }

  EditarAlumno(user: Student): void {
    const dialogRef = this.dialog.open(DialogEditStudent, {
      data: { user }
    });

    dialogRef.componentInstance.editStudent.subscribe((editStudent: Student) => {
      const indice = this.dataSource.data.findIndex((userData) => userData.email === user.email);
      const array = [...this.dataSource.data];
      array[indice].firstName = editStudent.firstName;
      array[indice].lastName = editStudent.lastName;
      this.dataSource.data = [];
      this.dataSource.data = [...array];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
