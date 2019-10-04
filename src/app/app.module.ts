import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFancyFormComponent} from './components/dynamic-fancy-form/dynamic-fancy-form.component';
import {DynamicFancyFormDialogComponent} from './components/dynamic-fancy-form-dialog/dynamic-fancy-form-dialog.component';
import {DynamicFancyFormFieldDirective} from './directives/dynamic-fancy-form-field.directive';
import {FormFancyInputComponent} from './components/fancy-form/form-fancy-input/form-fancy-input.component';
import {FormFancySelectComponent} from './components/fancy-form/form-fancy-select/form-fancy-select.component';
import { FormFancyPasswordComponent } from './components/fancy-form/form-fancy-password/form-fancy-password.component';
import {FormInputWithoutGroupComponent} from './components/fancy-form/form-input-without-group/form-input-without-group';

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    DynamicFancyFormDialogComponent,
    DynamicFancyFormComponent,
    DynamicFancyFormFieldDirective,
    FormFancyInputComponent,
    FormFancySelectComponent,
    FormFancyPasswordComponent,
    FormInputWithoutGroupComponent
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
    DynamicFancyFormDialogComponent,
    FormFancyInputComponent,
    FormFancySelectComponent,
    FormFancyPasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
