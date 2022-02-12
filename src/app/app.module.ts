import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { NotificationComponent } from './notification/notification.component';
import { ProgressComponent } from './progress/progress.component';
import { ImagesComponent } from './rows/images/images.component';
import { RowsComponent } from './rows/rows.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    QuestionComponent,
    ScoreComponent,
    NotificationComponent,
    ProgressComponent,
    ImagesComponent,
    RowsComponent,
  ],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrophy);
  }
}
