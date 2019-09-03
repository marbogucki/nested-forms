import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PhoneData} from '../../services/phones.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent {

  @Input() phones: PhoneData[];
  @Output() phoneDataToEdit: EventEmitter<PhoneData> = new EventEmitter<PhoneData>();

  constructor() { }

  openDialogEditPhone(phone: PhoneData) {
    this.phoneDataToEdit.emit(phone);
  }
}
