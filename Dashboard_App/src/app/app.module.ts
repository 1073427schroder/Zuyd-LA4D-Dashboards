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

import { DataService } from './data.service';

import { HttpClientModule } from '@angular/common/http';

//Test Server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


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
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
