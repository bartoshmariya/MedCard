import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
