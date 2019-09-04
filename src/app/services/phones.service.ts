import { Injectable } from '@angular/core';
import {Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  regConfig = [
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

export interface PhoneData {
  id: number;
  name: string;
  config: any[];
}

export interface FormField {
  label?: string;
  name?: string;
  inputType?: string;
  value?: string;
  validations?: Validator[];
  type?: string;
  options?: string;
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
