import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudyModuleComponent } from './study-module/study-module.component';
import { PrestatieIndicatorenComponent } from './prestatie-indicatoren/prestatie-indicatoren.component';
import { DetailPrestatieIndicatorenComponent } from './detail-prestatie-indicatoren/detail-prestatie-indicatoren.component';


@NgModule({
  declarations: [
    AppComponent,
    StudyModuleComponent,
    PrestatieIndicatorenComponent,
    DetailPrestatieIndicatorenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
