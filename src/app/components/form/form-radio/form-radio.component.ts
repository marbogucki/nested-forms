import { Component } from '@angular/core';
import {FormField} from '../../../services/phones.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent {
  field: FormField;
  group: FormGroup;
}
