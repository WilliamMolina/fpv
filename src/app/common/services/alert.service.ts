import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';
import { AlertData } from '../models/alert-data';
import { AlertType } from '../models/alert-type';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public dialog: MatDialog
  ) { }
  openInfoModal(message: string) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: new AlertData({
        title: 'INFO',
        content: message,
        closeButtonLabel: 'Aceptar',
        alertType: AlertType.INFO
      })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Closed >>> ', result);
    });
  }
  openWarningModal(message: string) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: new AlertData({
        title: 'INFO',
        content: message,
        closeButtonLabel: 'Cerrar',
        alertType: AlertType.WARNING
      })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Closed >>> ', result);
    });
   }
  openErrorModal(message: string) {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(AlertComponent, {
        width: '300px',
        data: new AlertData({
          title: 'ERROR',
          content: message,
          closeButtonLabel: 'Cerrar',
          alertType: AlertType.ERROR
        })
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('After Closed >>> ', result);
      });
    }
  }
}

