import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormFancyInputComponent} from '../components/fancy-form/form-fancy-input/form-fancy-input.component';
import {FancyDeviceParam} from '../services/fancy.service';
import {FormFancySelectComponent} from '../components/fancy-form/form-fancy-select/form-fancy-select.component';
import {FormFancyPasswordComponent} from '../components/fancy-form/form-fancy-password/form-fancy-password.component';

@Directive({
  selector: '[appDynamicFancyFormField]'
})
export class DynamicFancyFormFieldDirective implements OnInit {
  @Input() field: FancyDeviceParam;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = components[this.field.field_type];
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainerRef.createComponent(factory);
    console.log(this.field);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}

const components = {
  string: FormFancyInputComponent,
  select: FormFancySelectComponent,
  password: FormFancyPasswordComponent
};
