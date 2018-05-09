import { Injectable } from '@angular/core';
import { StudyModule } from './study-module/study-module';
import { MODULES } from './study-module/mock-study-modules';
import { PrestatieIndicatoren } from './prestatie-indicatoren/prestatie-indicatoren';
import { INDICATORS } from './prestatie-indicatoren/mock-presentatie-indicatoren';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor() { }

  getStudyModules(): Observable<StudyModule[]> {
    return of(MODULES);
  }

  getIndicators(): Observable<PrestatieIndicatoren> {
    return of(INDICATORS);
  }

}
