import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../services/phones.service';
import {FormInputComponent} from '../components/form/form-input/form-input.component';

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
  input: FormInputComponent
};
