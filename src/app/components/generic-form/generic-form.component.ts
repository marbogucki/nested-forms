import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

export type FieldTypes = SimpleField | Select | ComplexField | ArrayField;

export interface Field {
  type: string;
  title: string;
  name: string;
}

export interface SimpleField extends Field {
  type: 'simple-field';
  required?: boolean;
}

export interface Select extends Field {
  type: 'select';
  options: {key: string | number; value: string }[]
}

export interface ComplexField  extends Field {
  type: 'complex-field';
  children: FieldTypes[];
}

export interface ArrayField extends Field {
  type: 'array-field';
  elementType: FieldTypes;
}

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  @Input()
  formConfig: Field;

  @Input()
  form: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

  getFormControlByName(controlName: string): AbstractControl {
    const fg = this.form as FormGroup;
    return fg.get(controlName);
  }

  getFormArray() {
    return this.form as FormArray;
  }
}
