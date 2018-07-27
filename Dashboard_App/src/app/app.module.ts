import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { StudyModuleComponent } from './study-module/study-module.component';
import { PrestatieIndicatorenComponent } from './prestatie-indicatoren/prestatie-indicatoren.component';
import { DetailPrestatieIndicatorenComponent } from './detail-prestatie-indicatoren/detail-prestatie-indicatoren.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { EditActivityFormComponent } from './edit-activity-form/edit-activity-form.component';

import { DataService } from './data.service';

import { HttpClientModule } from '@angular/common/http';

//Test Server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LeerActiviteitenComponent } from './leer-activiteiten/leer-activiteiten.component';
import { NewLearningActivityFormComponent } from './new-learning-activity-form/new-learning-activity-form.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './auth/user.service';
import { UserResolver } from './auth/user.resolver';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StudentenLeerActiviteitenComponent } from './studenten-leer-activiteiten/studenten-leer-activiteiten.component';
import { FeedbackActivityFormComponent } from './feedback-activity-form/feedback-activity-form.component';
import { DatavisComponent } from './datavis/datavis.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { D3AxisDirective } from './d3-axis.directive';
import { AutoResizeDirective } from './auto-resize.directive';
import { BarChart2Component } from './shared/bar-chart2/bar-chart2.component';
import { BarChart3Component } from './bar-chart3/bar-chart3.component';
import { DocentenLandingPageComponent } from './docenten-landing-page/docenten-landing-page.component';
import { TeacherLandingPageComponent } from './teacher-landing-page/teacher-landing-page.component';
import { StudentLandingPageComponent } from './student-landing-page/student-landing-page.component';
import { TeacherNavbarComponent } from './teacher-navbar/teacher-navbar.component';
import { TeacherLearningActivitiesComponent } from './teacher-learning-activities/teacher-learning-activities.component';
import { TeacherVisualisationComponent } from './teacher-visualisation/teacher-visualisation.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentLearningActivitiesComponent } from './student-learning-activities/student-learning-activities.component';
import { StudentVisualisationComponent } from './student-visualisation/student-visualisation.component';

import { FeedbackResolver } from './feedback-resolver.service';
import { SelectModuleComponent } from './select-module/select-module.component';
import { SelectLearningActivitiesComponent } from './select-learning-activities/select-learning-activities.component';
import { DocentenVisualisatieComponent } from './docenten-visualisatie/docenten-visualisatie.component';
import { TeacherChangesComponent } from './teacher-changes/teacher-changes.component';

const appRoutes: Routes = [
  { path: 'teacher/learningactivities', component: TeacherLearningActivitiesComponent },
  { path: 'teacher/visualisation', component: TeacherVisualisationComponent },
  { path: 'teacher', component: TeacherLandingPageComponent, resolve: { data: UserResolver } },
  { path: 'student/learningactivities', component: StudentLearningActivitiesComponent },
  { path: 'student/visualisation', component: StudentVisualisationComponent },
  { path: 'student/feedback', component: FeedbackActivityFormComponent, resolve: { data: FeedbackResolver } },
  { path: 'student', component: StudentLandingPageComponent, resolve: { data: UserResolver } },
  { path: 'edit', component: EditActivityFormComponent, resolve: { data: UserResolver } },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudyModuleComponent,
    PrestatieIndicatorenComponent,
    DetailPrestatieIndicatorenComponent,
    NavbarComponent,
    LeerActiviteitenComponent,
    NewLearningActivityFormComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    EditActivityFormComponent,
    StudentenLeerActiviteitenComponent,
    FeedbackActivityFormComponent,
    DatavisComponent,
    BarChartComponent,
    D3AxisDirective,
    AutoResizeDirective,
    BarChart2Component,
    BarChart3Component,
    DocentenLandingPageComponent,
    TeacherLandingPageComponent,
    StudentLandingPageComponent,
    TeacherNavbarComponent,
    TeacherLearningActivitiesComponent,
    TeacherVisualisationComponent,
    StudentNavbarComponent,
    StudentLearningActivitiesComponent,
    StudentVisualisationComponent,
    SelectModuleComponent,
    SelectLearningActivitiesComponent,
    DocentenVisualisatieComponent,
    TeacherChangesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    CustomFormsModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard,
    UserService,
    UserResolver,
    FeedbackResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
