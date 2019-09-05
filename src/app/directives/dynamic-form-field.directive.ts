import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../services/phones.service';
import {FormInputComponent} from '../components/form/form-input/form-input.component';
import {FormSelectComponent} from '../components/form/form-select/form-select.component';
import {FormRadioComponent} from '../components/form/form-radio/form-radio.component';
import {FormCheckboxComponent} from '../components/form/form-checkbox/form-checkbox.component';
import {FormDateComponent} from '../components/form/form-date/form-date.component';
import {FormSlideToggleComponent} from '../components/form/form-slide-toggle/form-slide-toggle.component';

@Directive({
  selector: '[appDynamicFormField]'
})
export class DynamicFormFieldDirective implements OnInit {
  @Input() field: FormField;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = components[this.field.type];
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainerRef.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}

const components = {
  input: FormInputComponent,
  string: FormInputComponent,
  select: FormSelectComponent,
  radiobutton: FormRadioComponent,
  checkbox: FormCheckboxComponent,
  date: FormDateComponent,
  slideToggle: FormSlideToggleComponent
};
