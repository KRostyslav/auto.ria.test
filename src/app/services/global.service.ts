import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {

  private _models = new BehaviorSubject([]);
  currentModels = this._models.asObservable();

  constructor() { }

  getModels() {
    return this._models.getValue();
  }

  setModels( value ) {
    this._models.next(value);
  }
}
