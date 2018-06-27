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

const appRoutes: Routes = [
  { path: 'teacher', component: NewLearningActivityFormComponent, resolve: { data: UserResolver } },
  { path: 'student', component: LeerActiviteitenComponent, resolve: { data: UserResolver } },
  { path: 'edit', component: EditActivityFormComponent, resolve: { data: UserResolver } },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
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
    EditActivityFormComponent
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
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
