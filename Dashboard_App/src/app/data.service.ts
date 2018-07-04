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
  private objectObservable: Observable<any>;

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

  getActivities(module: string): Observable<LearningActivity[]> {
    return this.activityObservable = this.getData('/LEARNINGACTIVITIES/'+module);
  }

  getListTest1() {
    return this.activityObservable = this.getData('/LEARNINGACTIVITIES/IOT1_01');
  }

  getObjectTest() {
    return this.db.object('/LEARNINGACTIVITIES/IOT1_01').valueChanges();
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
    const path = "LEARNINGACTIVITIES/" + module + '/';
    const items = this.db.list(path);
    console.log(items);


    // Get a key for a new Post.
    var newPostKey = this.db.database.ref().child(path).push().key;
    console.log("think it's the key:")
    console.log(newPostKey);
    activity['id'] = newPostKey;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates[path + newPostKey] = activity;

    return this.db.database.ref().update(updates);


    /*
    items.push(activity).then((item) => {
      console.log("actual key:")
      console.log(item.key);
    });
    */
  }

  removeLearningActivity(id, module) {
    this.db.database.ref("LEARNINGACTIVITIES/" + module + "/" + id).set(
      null
    );
  }

  editLearningActivity(activity, id, module) {
    this.db.database.ref("LEARNINGACTIVITIES/" + module + "/" + id).set(
      activity
    );
  }

  getFeedback(module: string, laId: string): Observable<any[]> {
    const path = '/FEEDBACK/' + module + '/' + laId;
    console.log(path);
    return this.getData(path);

  }

  saveFeedback(module: string, activityId: string, feedback) {
        const path = 'FEEDBACK/' + module + '/' + activityId +'/';
    const items = this.db.list(path);

    // Get a key for a new Post.
    var newPostKey = this.db.database.ref().child(path).push().key;
    feedback['id'] = newPostKey;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates[path + newPostKey] = feedback;

    return this.db.database.ref().update(updates);
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
