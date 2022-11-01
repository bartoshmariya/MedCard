import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CONSULTATIONS } from '../mock-consultations';
import { Consultation } from '../model/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationDetailsService {

  consultation?: Consultation;

  constructor() { }

  update(consultation: Consultation) {
    this.consultation = consultation;
  }
  deleteConsultation(consultation: Consultation): Observable<Consultation[]> {
    const index = CONSULTATIONS.findIndex(c => c.id == consultation.id);
    CONSULTATIONS.splice(index, 1);
    return of(CONSULTATIONS);
  }
}
