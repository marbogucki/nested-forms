import { Component } from '@angular/core';
import {FormField} from '../../../services/phones.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent {
  field: FormField;
  group: FormGroup;
}
