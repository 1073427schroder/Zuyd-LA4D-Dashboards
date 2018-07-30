import { Injectable } from '@angular/core';

@Injectable()
export class ChangesServiceService {

  constructor() { }

  module: string;
  laId: string;

  setInfo(module: string, laId: string) {
    this.module = module;
    this.laId = laId;


  }


}
