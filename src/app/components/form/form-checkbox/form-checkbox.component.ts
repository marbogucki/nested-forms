import { Component } from '@angular/core';
import { FormField } from '../../../services/phones.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent {
    field: FormField;
    group: FormGroup;
}
