import { Injectable } from '@angular/core';
import { StudyModule } from './study-module/study-module';
import { PrestatieIndicatoren } from './prestatie-indicatoren/prestatie-indicatoren';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DataService {

  private modulesUrl = 'api/modulesT';
  private indicatorsUrl = 'api/indicatorsT';
  private learningActivitiesUrl = 'api/learningActivitiesT';

  private modulesObservable: Observable<any[]>;
  private indicatorObservable: Observable<any[]>;
  private learningActivityObservable: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) { }


  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }


  getStudyModules(): Observable<StudyModule[]> {
    return this.http.get<StudyModule[]>(this.modulesUrl).pipe(catchError(this.handleError('getStudyModules', [])));
  }
  
  /*
  //Works (Firebase)
  getStudyModules(): Observable<StudyModule[]> {
    return this.modulesObservable = this.getData('/MODULES');
  }
  */

  
  getIndicators(): Observable<PrestatieIndicatoren[]> {
    return this.http.get<PrestatieIndicatoren[]>(this.indicatorsUrl).pipe(catchError(this.handleError('getIndicators', [])));
  }
  
  getLearningActivities(): Observable<PrestatieIndicatoren[]> {
    return this.http.get<any>(this.learningActivitiesUrl).pipe(catchError(this.handleError('getLearningActivities', [])));
  }

  /*
  //Works (Firebase)
  getIndicators(): Observable<PrestatieIndicatoren[]> {
    return this.indicatorObservable = this.getData('/ACHIEVEMENTINDICATORS');
  }
  */


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
