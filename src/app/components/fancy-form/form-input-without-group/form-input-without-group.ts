import {Component, Input} from '@angular/core';
import {Form, FormGroup} from '@angular/forms';
import {FancyDeviceParam} from '../../../services/fancy.service';

@Component({
  selector: 'app-form-input-without-group',
  templateUrl: './form-input-without-group.html',
})
export class FormInputWithoutGroupComponent {
  @Input() field: FancyDeviceParam;
  @Input() group;
  @Input() arrayName;
}
