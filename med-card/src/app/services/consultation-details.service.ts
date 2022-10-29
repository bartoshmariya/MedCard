import { Injectable } from '@angular/core';
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
}
