import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertsComponent } from './dialog-alerts.component';

type AlertIcon = 'success' | 'warning' | 'nothing';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  constructor(private dialog: MatDialog) {}

  Alerta(mensaje: string,icon:AlertIcon, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAlertsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { mensaje,icon},
    });
  }
}
