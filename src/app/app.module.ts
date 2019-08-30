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

@NgModule({
  declarations: [
    AppComponent,
    NestedFormComponent,
    DynamicFormComponent,
    InputComponent,
    DynamicFieldDirective,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
