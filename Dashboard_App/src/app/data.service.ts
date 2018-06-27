import { Injectable } from '@angular/core';
import { StudyModule } from './study-module/study-module';
import { PrestatieIndicatoren } from './prestatie-indicatoren/prestatie-indicatoren';
import { LearningActivity } from './learning-activity';

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
  private activityObservable: Observable<any[]>;

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

  getActivities(course: string): Observable<LearningActivity[]> {
    return this.activityObservable = this.getData('/LEARNINGACTIVITIES/'+course);
  }

  newActivity(course: string, activity: LearningActivity): void {

  }

  pushTest(msg: string) {
    const items = this.db.list('test');
    console.log(items);
    items.push(msg).then((item) => {
      console.log(item.key);
    });
  }

  pushTest2(value) {
    const items = this.db.list('test');
    console.log(items);
    items.push(value).then((item) => {
      console.log(item.key);
    });
  }

  newLearningActivity(activity, module) {
    const path = "LEARNINGACTIVITIES/" + module;
    const items = this.db.list(path);
    console.log(items);
    items.push(activity).then((item) => {
      console.log(item.key);
    });
  }

  editLearningActivity(activity, id, module) {
    this.db.database.ref("LEARNINGACTIVITIES/" + module + "/" + id).set(
      activity
    );
  }

  writeUserData(userId, name, email, role) {
    this.db.database.ref('users/' + userId).set({
      username: name,
      email: email,
      role: role
    });
  }

  
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
