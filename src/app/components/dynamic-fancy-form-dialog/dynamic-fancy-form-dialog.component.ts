import {Component, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PhoneData} from '../../services/phones.service';
import {FancyDevice} from '../../services/fancy.service';
import {DynamicFancyFormComponent} from '../dynamic-fancy-form/dynamic-fancy-form.component';

@Component({
  selector: 'app-dynamic-fancy-form-dialog',
  templateUrl: './dynamic-fancy-form-dialog.component.html',
  styleUrls: ['./dynamic-fancy-form-dialog.component.css']
})
export class DynamicFancyFormDialogComponent {
  @ViewChild(DynamicFancyFormComponent) dynamicFancyFormComponent: DynamicFancyFormComponent;
  @Output() saveDataToEmit: EventEmitter<PhoneData> = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public formData: FormData
  ) {
  }
}

export interface FormData {
  title: string;
  fancy: FancyDevice;
}
