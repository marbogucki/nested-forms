import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {FieldConfig} from '../dynamic-form/field-config.types';
import {Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

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

  constructor(private http: HttpClient) { }

  getPhones() {
    return this.http.get('http://localhost:3000/phones');
  }
}

export interface Phone {
  id: number;
  name: string;
}
