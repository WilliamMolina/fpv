import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatButtonModule, MatDialogModule, MatCardModule, MatGridListModule],
    exports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatButtonModule, MatDialogModule, MatCardModule, MatGridListModule]
})

export class AngularMaterialModule { }