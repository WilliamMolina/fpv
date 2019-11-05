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
    MatGridListModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatButtonModule, MatDialogModule, MatCardModule, MatGridListModule, MatIconModule],
    exports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatButtonModule, MatDialogModule, MatCardModule, MatGridListModule, MatIconModule]
})

export class AngularMaterialModule { }