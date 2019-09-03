import {Component, OnInit, ViewChild} from '@angular/core';
import {PhoneData, PhonesService} from './services/phones.service';
import {MatDialog} from '@angular/material';
import {DynamicFormDialogComponent} from './components/dynamic-form-dialog/dynamic-form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  phones: PhoneData[];

  constructor(
    private phonesService: PhonesService,
    public formDialog: MatDialog
  ) {}

  ngOnInit() {
    this.phonesService.getPhones()
      .subscribe((itemsPhones: PhoneData[]) => this.phones = itemsPhones);
  }

  openDialogEditPhone(phone: PhoneData) {
    const dialogRef = this.formDialog.open(DynamicFormDialogComponent, {
      width: '80vh',
      data: {
        title: 'Android Managed Configuration',
        phone
      },
      panelClass: 'custom-form-dialog'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed', result);
    });
  }
}
