import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alerts',
  templateUrl: './dialog-alerts.component.html',
  styleUrl: './dialog-alerts.component.scss'
})
export class DialogAlertsComponent {
  constructor(public dialogRef: MatDialogRef<DialogAlertsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }) { }
}


