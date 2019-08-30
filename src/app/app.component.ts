import {Component, ViewChild} from '@angular/core';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {FieldConfig} from './dynamic-form/field-config.types';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: 'input', label: '', inputType: 'text', name: 'passwordMin', value: '1',
      info: 'Minimalna długość hasła',
      description: 'Ilość znaków 1-16',
      validations: [
        { name: 'required', validator: Validators.required, message: 'Field Required' }
      ]
    },
    {
      type: 'input', label: '', inputType: 'text', name: 'specialSignsMin', value: '0', validations: [],
      info: 'Minimalna ilość znaków specjalnych',
      description: 'Ilość znaków: 1-4 lub 0 dla braku'
    },
    {
      type: 'button', label: 'Dodaj element', inputType: 'button', name: '', value: '', validations: [],
      info: 'Maksymalna długość obowiązywania hasła',
      description: 'Ilość dni: 1 - 730',
      nested: [
        { type: 'input', label: 'add number 1', inputType: 'number', name: '', value: '', validations: [] },
        { type: 'input', label: 'add number 2', inputType: 'number', name: '', value: '', validations: [] }
      ]
    }
  ];
}
