import { Injectable } from '@angular/core';
import { StudyModule } from './study-module/study-module';
import { MODULES } from './study-module/mock-study-modules';
import { PrestatieIndicatoren } from './prestatie-indicatoren/prestatie-indicatoren';
import { INDICATORS } from './prestatie-indicatoren/mock-presentatie-indicatoren';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  private modulesUrl = 'api/modules';
  private indicatorsUrl = 'api/indicators';

  constructor(
    private http: HttpClient) { }

  //getStudyModules(): Observable<StudyModule[]> {
  //  return of(MODULES);
  //}

  getStudyModules(): Observable<StudyModule[]> {
    return this.http.get<StudyModule[]>(this.modulesUrl).pipe(catchError(this.handleError('getStudyModules', [])));
  }

  //getIndicators(): Observable<PrestatieIndicatoren> {
  //  return of(INDICATORS);
  //}

  getIndicators(): Observable<PrestatieIndicatoren[]> {
    return this.http.get<PrestatieIndicatoren[]>(this.indicatorsUrl).pipe(catchError(this.handleError('getIndicators', [])));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
