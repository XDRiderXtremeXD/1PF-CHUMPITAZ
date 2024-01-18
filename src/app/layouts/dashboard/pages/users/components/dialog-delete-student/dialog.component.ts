import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogDeleteStudent {

  @Output()
  userDelete = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DialogDeleteStudent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: Student }) { }

  DeleteUser(): void {
    this.userDelete.emit();
    this.dialogRef.close(); // Cierra el diálogo después de emitir el evento
  }
}
