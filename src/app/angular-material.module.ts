import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatButtonModule],
    exports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatButtonModule]
})

export class AngularMaterialModule { }