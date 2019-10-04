import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PhoneData} from '../../services/phones.service';
import {FancyDevice} from '../../services/fancy.service';

@Component({
  selector: 'app-fancy-dynamic-form',
  templateUrl: './dynamic-fancy-form.component.html',
  styleUrls: ['./dynamic-fancy-form.component.css']
})
export class DynamicFancyFormComponent implements OnInit {

  @Input() fancyConfig: FancyDevice;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
    // this.form.disable();
  }

  createGroup() {
    const { name } = this.fancyConfig;
    const group = this.fb.group({name});
    this.fancyConfig.parameters.forEach(({ param }) => {
      const control = this.fb.control(param.value);
      group.addControl(param.field_name, control);
      this.createNestedArrayGroup(param, group);
    });
    return group;
  }

  createNestedArrayGroup(element, group) {
    if (element.child_params) {
      const arrayGroup = this.fb.array([]);
      element.child_params.forEach(({ param }) => {
        arrayGroup.push(this.fb.group({
          [param.field_name]: param.value
        }));
      });

      group.addControl('childParams', arrayGroup);
    }
  }


  // bindValidations(validations: any) {
  //   if (validations.length > 0) {
  //     const validList = [];
  //     validations.forEach(valid => {
  //       if (valid.name === 'pattern') {
  //         validList.push(Validators.pattern(valid.validator));
  //       } else {
  //         validList.push(Validators[valid.validator]);
  //       }
  //     });
  //     return Validators.compose(validList);
  //   }
  //   return null;
  // }
  //
  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     const control = formGroup.get(field);
  //     control.markAsTouched({ onlySelf: true });
  //   });
  // }

}
