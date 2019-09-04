import {Component} from '@angular/core';
import {FormField} from '../../../services/phones.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.css']
})
export class FormDateComponent {
  field: FormField;
  group: FormGroup;
}
