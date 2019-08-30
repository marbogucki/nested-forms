import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import uuid from 'uuid-v4';
import {userData} from './user-data';
import {Address, City, User} from './user.types';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  dataUsers: User = userData;
  usersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usersForm = this.fb.group({
      name: [''],
      cities: this.fb.array([])
    });
  }

  ngOnInit() {
    this.setCities();
  }

  saveForm() {
    console.log('save');
  }

  addCity() {
    const control = this.usersForm.controls.cities as FormArray;
    control.push(
      this.fb.group({
        id: uuid(),
        city: '',
        nested: this.fb.array([])
      })
    );
  }

  removeCity(cityItem) {
    const control = this.usersForm.controls.cities as FormArray;
    console.log(control);
    const indexCity = control.value.findIndex(item => item.id === cityItem.value.id);
    control.removeAt(indexCity);
  }

  addAddress(control) {
    control.push(
      this.fb.group({
        id: uuid(),
        address: ['']
      })
    );
  }

  removeAddress(address, test) {
    const indexAddress = address.controls.findIndex(item => item.value.id === test.id);
    address.removeAt(indexAddress);
  }

  private setCities() {
    const control = this.usersForm.controls.cities as FormArray;
    this.dataUsers.cities.forEach((cityItem: City) => {
      control.push(
        this.fb.group({
          id: uuid(),
          city: cityItem.city,
          nested: this.setAddress(cityItem)
        })
      );
    });
  }

  private setAddress(cityItem) {
    const arr = new FormArray([]);
    cityItem.nested.forEach((addressItem: Address) => {
      arr.push(
        this.fb.group({
          id: addressItem.id,
          address: addressItem.address
        })
      );
    });
    return arr;
  }
}
