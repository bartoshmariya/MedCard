import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';
import { HomeComponent } from './home/home.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationDetailsComponent,
    HomeComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
