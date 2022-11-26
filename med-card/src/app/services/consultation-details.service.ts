import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Consultation } from '../model/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationDetailsService {

  url = "http://127.0.0.1:5000/med-card/api/consultations"
  consultation?: Consultation;

  constructor(private http: HttpClient) { }

  update(consultation: Consultation) {
    this.consultation = consultation;
  }
  /*
  deleteConsultation(consultation: Consultation): Observable<Consultation[]> {
    const index = CONSULTATIONS.findIndex(c => c.id == consultation.id);
    CONSULTATIONS.splice(index, 1);
    return of(CONSULTATIONS);
  }*/
}
