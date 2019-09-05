import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FancyService {

  constructor(private http: HttpClient) { }

  getFancy() {
    return this.http.get('http://localhost:3000/fancy');
  }
}

export interface FancyDevice {
  name?: string;
  type?: string;
  parameters?: FancyParameters[];
}

export interface FancyParameters {
  param?: FancyDeviceParam;
}

export interface FancyDeviceParam {
  name?: string;
  description?: string;
  field_type?: 'string' | 'select';
  value?: string;
  child_params?: any[];
}
