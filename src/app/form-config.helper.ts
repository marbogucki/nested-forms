import { Field, ComplexField, FieldTypes } from './components/generic-form/generic-form.component';
import { AbstractControl, FormGroup, FormControl, FormArray } from '@angular/forms';

export function buildForm(field: FieldTypes, value: any): AbstractControl {
  let result: AbstractControl;
  switch (field.type) {
    case 'complex-field': {
      const fieldConfig = field.children.reduce((acc, current) => {
        acc[current.name] = buildForm(current, value[current.name]);
        return acc;
      }, {});
      result = new FormGroup(fieldConfig);
      break;
    }
    case 'simple-field':
      result = new FormControl();
      break;
    case 'select':
      result = new FormControl();
      break;
    case 'array-field':
      const arr = value as any[];
      result = new FormArray(
        arr.map(x => buildForm(field.elementType, x))
      );
      break;
    default:
      throw new Error(`Unsupported type`);
  }
  return result;
}

export function getFormConfig(): FieldTypes {
  const form: ComplexField = {
    type: 'complex-field',
    name: 'Root',
    title: 'Root',
    children: [{
        type: 'simple-field',
        title: 'Simple field 1',
        name: 'field1'
      }, {
        type: 'simple-field',
        title: 'Simple field2',
        name: 'field2'
      }, {
        type: 'select',
        title: 'Select',
        name: 'select',
        options: [{
          key: 'option1',
          value: 'Option 1'
        }, {
          key: 'option2',
          value: 'Option 2'
        }]
      }, {
        type: 'complex-field',
        title: 'Sub Form',
        name: 'subfield',
        children: [{
          type: 'simple-field',
          title: 'sub',
          name: 'subfield'
        }, {
          type: 'complex-field',
          title: 'Sub Sub form',
          name: 'subobject',
          children: [{
            type: 'simple-field',
            title: 'Sub Sub Field',
            name: 'field'
          }]
        }]
      }, {
        type: 'array-field',
        title: 'Array',
        name: 'array',
        elementType: {
          type: 'simple-field',
          title: 'Array Element',
          name: 'array-element'
        }
      }
    ]
  };
  return form;
}


export function createSample() {
  return {
    field1: 'Hello',
    field2: 'World',
    select: 'option2',
    subfield: {
      subfield: 'Important info',
      subobject: {
        field: 'Even more important info'
      }
    },
    array: [
      'element1', 'element2', 'element3'
    ]
  };
}
