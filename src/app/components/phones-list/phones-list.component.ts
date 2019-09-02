import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Phone} from '../../services/phones.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent {

  @Input() phones: Phone[];
  @Output() phoneDataToEdit: EventEmitter<Phone> = new EventEmitter<Phone>();

  constructor() { }

  openDialogEditPhone(phone: Phone) {
    this.phoneDataToEdit.emit(phone);
  }
}
