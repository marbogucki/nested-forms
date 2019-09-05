import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { DynamicFormDialogComponent } from './components/dynamic-form-dialog/dynamic-form-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { DynamicFormFieldDirective } from './directives/dynamic-form-field.directive';
import { FormSelectComponent } from './components/form/form-select/form-select.component';
import { FormRadioComponent } from './components/form/form-radio/form-radio.component';
import { FormCheckboxComponent } from './components/form/form-checkbox/form-checkbox.component';
import { FormDateComponent } from './components/form/form-date/form-date.component';
import { FormSlideToggleComponent } from './components/form/form-slide-toggle/form-slide-toggle.component';
import {DynamicFancyFormComponent} from './components/dynamic-fancy-form/dynamic-fancy-form.component';
import {DynamicFancyFormDialogComponent} from './components/dynamic-fancy-form-dialog/dynamic-fancy-form-dialog.component';
import {DynamicFancyFormFieldDirective} from './directives/dynamic-fancy-form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    DynamicFormDialogComponent,
    DynamicFormComponent,
    DynamicFancyFormDialogComponent,
    DynamicFancyFormComponent,
    DynamicFancyFormFieldDirective,
    FormInputComponent,
    DynamicFormFieldDirective,
    FormSelectComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormDateComponent,
    FormSlideToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DynamicFormDialogComponent,
    DynamicFancyFormDialogComponent,
    FormInputComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormDateComponent,
    FormSlideToggleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
