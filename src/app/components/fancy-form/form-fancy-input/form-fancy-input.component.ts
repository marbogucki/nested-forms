import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FancyDeviceParam} from '../../../services/fancy.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-fancy-input.component.html',
  styleUrls: ['./form-fancy-input.component.css']
})
export class FormFancyInputComponent {
  field: FancyDeviceParam;
  group: FormGroup;
}
