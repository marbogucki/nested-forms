import {Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {Phone, PhonesService} from './services/phones.service';
import {MatDialog} from '@angular/material';
import {DynamicFormDialogComponent} from './components/dynamic-form-dialog/dynamic-form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  phones: Phone[];

  constructor(
    private phonesService: PhonesService,
    public formDialog: MatDialog
  ) {}

  ngOnInit() {
    this.phonesService.getPhones()
      .subscribe((itemsPhones: Phone[]) => this.phones = itemsPhones);
  }

  openDialogEditPhone(phone: Phone) {
    const dialogRef = this.formDialog.open(DynamicFormDialogComponent, {
      width: '80vh',
      data: phone
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed', result);
    });
  }
}
