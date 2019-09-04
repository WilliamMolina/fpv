import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule],
    exports: [MatAutocompleteModule,MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule]
})

export class AngularMaterialModule { }