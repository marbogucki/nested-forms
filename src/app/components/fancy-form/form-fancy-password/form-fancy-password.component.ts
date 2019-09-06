import { Component } from '@angular/core';
import {FancyDeviceParam} from '../../../services/fancy.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-fancy-password',
  templateUrl: './form-fancy-password.component.html',
  styleUrls: ['./form-fancy-password.component.css']
})
export class FormFancyPasswordComponent {
  field: FancyDeviceParam;
  group: FormGroup;
}
