/* Angular material */
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormComponent} from './form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabDirective} from './tab-directive';
import {NavigationDirective} from './navigation-directive';
import { HttpClientModule } from '@angular/common/http';
import {NavigationElement} from './navigation';
import { AportesAfectadosComponent } from './dialogs/aportes-afectados/aportes-afectados.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabDirective,
    NavigationDirective,
    FormComponent,
    AportesAfectadosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NavigationElement],
  entryComponents: [AportesAfectadosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
