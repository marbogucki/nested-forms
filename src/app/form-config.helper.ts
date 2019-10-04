import { Field, ComplexField } from './components/generic-form/generic-form.component';

export function getFormConfig(): Field {
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
      }
    ]
  };
  return form;
}
