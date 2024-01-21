import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alerts',
  templateUrl: './dialog-alerts.component.html',
  styleUrl: './dialog-alerts.component.scss'
})
export class DialogAlertsComponent {
  constructor(public dialogRef: MatDialogRef<DialogAlertsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string,icon:string }) { }

    getIconName(icon: string): string {
      switch (icon) {
        case 'success':
          return 'check_circle'; // Nombre del ícono de éxito
        case 'warning':
          return 'warning'; // Nombre del ícono de advertencia
        case 'nothing':
          return 'info'; // Nombre del ícono de información (puedes cambiarlo)
        default:
          return '';
      }
    }
}


