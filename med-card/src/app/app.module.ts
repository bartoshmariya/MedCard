import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';
import { HomeComponent } from './home/home.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationDetailsComponent,
    HomeComponent,
    ConsultationComponent,
    AddConsultationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
