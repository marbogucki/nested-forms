import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Phone} from '../../services/phones.service';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-dynamic-form-dialog',
  templateUrl: './dynamic-form-dialog.component.html',
  styleUrls: ['./dynamic-form-dialog.component.css']
})
export class DynamicFormDialogComponent {

  @ViewChild(FormDialogComponent) appFormDialog: FormDialogComponent;
  @Output() saveDataToEmit: EventEmitter<Phone> = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public phoneData
  ) { }
}
