import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    StudyModuleComponent,
    PrestatieIndicatorenComponent,
    DetailPrestatieIndicatorenComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
