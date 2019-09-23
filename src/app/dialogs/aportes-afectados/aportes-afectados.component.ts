import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-aportes-afectados',
  templateUrl: './aportes-afectados.component.html',
  styleUrls: ['./aportes-afectados.component.css']
})
export class AportesAfectadosComponent {
  displayedColumns = ['position','nroAporte', 'fechaAporte', 'opcion', 'sbota', 'valorAporte', 'saldoAporte', 'saldoRendimientos', 'liberaCntge', 'rfteEstimadaCapital', 'comiRetiroAnticipado', 'valorDisponible', 'saldoRetencion', 'valorEgreso', 'valorTotalEgreso', 'feteFuenteEstimada', 'costosOperacion', 'rendimientosARetirar', 'reteFuenteCapital', 'reteFuenteAPracticar', 'contingenteAPracticar', 'comiRetAntiA'];
  constructor(public dialogRef: MatDialogRef<AportesAfectadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
