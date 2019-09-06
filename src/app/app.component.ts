import {Component, OnInit, ViewChild} from '@angular/core';
import {PhoneData, PhonesService} from './services/phones.service';
import {MatDialog} from '@angular/material';
import {DynamicFormDialogComponent} from './components/dynamic-form-dialog/dynamic-form-dialog.component';
import {FancyDevice, FancyService} from './services/fancy.service';
import {DynamicFancyFormDialogComponent} from './components/dynamic-fancy-form-dialog/dynamic-fancy-form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  phones: PhoneData[];
  fancy: FancyDevice;

  constructor(
    private phonesService: PhonesService,
    private fancyService: FancyService,
    public formDialog: MatDialog
  ) {}

  ngOnInit() {
    this.phonesService.getPhones()
      .subscribe((itemsPhones: PhoneData[]) => this.phones = itemsPhones);

    this.fancyService.getFancy()
      .subscribe((fancyItem: FancyDevice) => {
        this.fancy = fancyItem;
      });
  }

  openDialogEditFancy(fancy: FancyDevice) {
    const dialogRef = this.formDialog.open(DynamicFancyFormDialogComponent, {
      width: '80vh',
      data: {
        title: 'Fancy Managed Configuration',
        fancy
      },
      panelClass: 'custom-form-dialog'
    });

    dialogRef.afterClosed().subscribe();
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
