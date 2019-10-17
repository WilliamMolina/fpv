model = {
      'nroAporte': "332",
      'fechaAporte': "new Date()",
      'opcion': '1',
      'sbota': '2',
      'valorAporte': 2000000,
      'saldoAporte': 2000900,
      'saldoRendimientos': 1423.12,
      'liberaCntge': 'NO',
      'rfteEstimadaCapital': 0,
      'comiRetiroAnticipado': 0,
      'valorDisponible': 0,
      'saldoRetencion': 0,
      'valorEgreso': 2000000,
      'valorTotalEgreso': 2000000,
      'feteFuenteEstimada': 0,
      'costosOperacion': 900,
      'rendimientosARetirar': 1423.12,
      'reteFuenteCapital': 0,
      'reteFuenteAPracticar': 0,
      'contingenteAPracticar': 0,
      'comiRetAntiA': 0
    }

template = "<ng-container matColumnDef=\"{}\"><th mat-header-cell *matHeaderCellDef>{}</th>    <td mat-cell *matCellDef=\"let element\"> {{element.{}}}</td></ng-container>"

for key in model:
    print(template.format(key, key, key))

print('displayedColumns = ',[key for  key in model])
