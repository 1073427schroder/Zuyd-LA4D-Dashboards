import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class FeedbackResolver implements Resolve<Observable<any>> {

  id = '';

  constructor() { }

  setId(id: string) {
    this.id = id;
  }

  clearId() {
    this.id = '';
  }

  resolve() {
    let fId = this.id;
    this.clearId();
    return Observable.of(fId);
  }

}
