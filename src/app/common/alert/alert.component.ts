import { Component, OnInit, Inject } from '@angular/core';
import { AlertType } from '../models/alert-type';
import { AlertData } from '../models/alert-data';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: AlertData
  ) { }

  ngOnInit() {
  }

  getAlertIcon() {
    switch (this.data.alertType) {
      case AlertType.INFO: return 'info';
      case AlertType.WARNING: return 'warning';
      case AlertType.ERROR: return 'error';
    }
  }
}
