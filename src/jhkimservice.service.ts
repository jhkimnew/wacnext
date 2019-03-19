import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JhkimserviceService {
  private _result: string;

  constructor() { }

  callMe(value: string) {
    this._result = 'Bearer ' + value;
    return this._result;
  }

  get result() {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }
}
