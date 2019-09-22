import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsubjectComponent } from './admin-profile/addsubject/addsubject.component';
import { EditsubjectComponent } from './admin-profile/editsubject/editsubject.component';
import { AddquestionComponent } from './admin-profile/addquestion/addquestion.component';
import { EditquestionComponent } from './admin-profile/editquestion/editquestion.component';
import { ViewquestionComponent } from './admin-profile/viewquestion/viewquestion.component';
import { ViewsubjectComponent } from './admin-profile/viewsubject/viewsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsubjectComponent,
    EditsubjectComponent,
    AddquestionComponent,
    EditquestionComponent,
    ViewquestionComponent,
    ViewsubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
