import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../../../services/phones.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  field: FormField;
  group: FormGroup;
}
