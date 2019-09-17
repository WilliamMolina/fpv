import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule],
    exports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatTableModule]
})

export class AngularMaterialModule { }