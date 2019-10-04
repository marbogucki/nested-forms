import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FancyDevice, FancyService} from './services/fancy.service';
import {DynamicFancyFormDialogComponent} from './components/dynamic-fancy-form-dialog/dynamic-fancy-form-dialog.component';
import { getFormConfig } from './form-config.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fancy: FancyDevice;
  formConfig = getFormConfig();
  constructor(
    private fancyService: FancyService,
    public formDialog: MatDialog
  ) {}

  ngOnInit() {
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
}
