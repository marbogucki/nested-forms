import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FancyDeviceParam} from '../../../services/fancy.service';

@Component({
  selector: 'app-form-fancy-select',
  templateUrl: './form-fancy-select.component.html',
  styleUrls: ['./form-fancy-select.component.css']
})
export class FormFancySelectComponent {
  @Input() field: FancyDeviceParam;
  @Input() group: FormGroup;
}
