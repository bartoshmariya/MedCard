import { Injectable } from '@angular/core';
import { Consultation } from '../model/consultation.model';
import { CONSULTATIONS } from '../mock-consultations';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor() { }

  getConsultations(): Observable<Consultation[]> {
    const consultations = of(CONSULTATIONS);
    return consultations;
  }
}
