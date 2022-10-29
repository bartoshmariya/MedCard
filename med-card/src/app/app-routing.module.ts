import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'consultation',
        component: ConsultationComponent
      }
    ]
  },
  { path: '**', component: AppComponent  }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
