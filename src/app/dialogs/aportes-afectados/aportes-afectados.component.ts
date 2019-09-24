import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AporteAfectado } from 'src/app/models/aporte-afectado';

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
  aportesAfectados: AporteAfectado[];
  displayedColumns = ['position','nroAporte', 'fechaAporte', 'opcion', 'sbota', 'valorAporte', 'saldoAporte', 'saldoRendimientos', 'liberaCntge', 'rfteEstimadaCapital', 'comiRetiroAnticipado', 'valorDisponible', 'saldoRetencion', 'valorEgreso', 'valorTotalEgreso', 'feteFuenteEstimada', 'costosOperacion', 'rendimientosARetirar', 'reteFuenteCapital', 'reteFuenteAPracticar', 'contingenteAPracticar', 'comiRetAntiA'];
  constructor(public dialogRef: MatDialogRef<AportesAfectadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.aportesAfectados = this.data['aportesAfectados'];
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    getTotal(column:string){
      return this.aportesAfectados.map(t => t[column]).reduce((acc, value) => acc + value, 0);
    }

}
