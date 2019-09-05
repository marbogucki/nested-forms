import { Component } from '@angular/core';
import {FormField} from '../../../services/phones.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-slide-toggle',
  templateUrl: './form-slide-toggle.component.html',
  styleUrls: ['./form-slide-toggle.component.css']
})
export class FormSlideToggleComponent {
  field: FormField;
  group: FormGroup;
}
