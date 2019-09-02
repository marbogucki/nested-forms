import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NestedFormComponent } from './nested-form/nested-form.component';
import {MaterialModule} from './material/material.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { InputComponent } from './dynamic-form/input/input.component';
import { DynamicFieldDirective } from './dynamic-form/directives/dynamic-field.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonComponent } from './dynamic-form/button/button.component';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { DynamicFormDialogComponent } from './components/dynamic-form-dialog/dynamic-form-dialog.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NestedFormComponent,
    DynamicFormComponent,
    InputComponent,
    DynamicFieldDirective,
    ButtonComponent,
    PhonesListComponent,
    DynamicFormDialogComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    DynamicFormDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
