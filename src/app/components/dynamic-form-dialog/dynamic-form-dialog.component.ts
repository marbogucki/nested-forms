import {Component, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PhoneData} from '../../services/phones.service';
import {DynamicFormComponent} from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-dynamic-form-dialog',
  templateUrl: './dynamic-form-dialog.component.html',
  styleUrls: ['./dynamic-form-dialog.component.css']
})
export class DynamicFormDialogComponent {
  @ViewChild(DynamicFormComponent) dynamicFormComponent: DynamicFormComponent;
  @Output() saveDataToEmit: EventEmitter<PhoneData> = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public formData: FormData
  ) {}
}

export interface FormData {
  title: string;
  phone: PhoneData;
}
