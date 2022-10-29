import { Component, OnInit } from '@angular/core';
import { CONSULTATIONS } from '../mock-consultations';
import { Consultation } from '../model/consultation.model';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  constructor() { }

  consultations = CONSULTATIONS;

  selectedConsultation?: Consultation;

  ngOnInit(): void {

  }

  onSelect(consultation: Consultation): void {
    this.selectedConsultation = consultation;
    console.log(this.selectedConsultation);
  }

  onDelete(consultation: Consultation): void {

  }

}
