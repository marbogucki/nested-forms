import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PhoneData} from '../../services/phones.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() phoneConfig: PhoneData;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const { id, name } = this.phoneConfig;
    const group = this.fb.group({id, name});
    this.phoneConfig.config.forEach(field => {
      const control = this.fb.control(field.value, this.bindValidations(field.validations || []));
      group.addControl(field.name, control);

      if (field.nested) {
        group.addControl('nested', this.addNestedGroup(group, field));
      }
    });
    return group;
  }

  addNestedGroup(group, field) {
    return this.fb.group({
      nested: this.fb.array(field.nested)
    });
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        if (valid.name === 'pattern') {
          validList.push(Validators.pattern(valid.validator));
        } else {
          validList.push(Validators[valid.validator]);
        }
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
