import { Component, OnInit } from '@angular/core';
import { CONSULTATIONS } from '../mock-consultations';
import { Consultation } from '../model/consultation.model';
import { ConsultationService } from '../services/consultation.service';
import { ConsultationDetailsService } from '../services/consultation-details.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  constructor(private consultService: ConsultationService, private consultDetailSerivce: ConsultationDetailsService) { }

  consultations: Consultation[] = [];

  selectedConsultation?: Consultation;

  ngOnInit(): void {
    this.getConsultations();
  }

  onUpdate(consultation: Consultation): void {
    this.selectedConsultation = consultation;
    this.consultDetailSerivce.update(this.selectedConsultation);
  }

  onDelete(consultation: Consultation): void {
    this.selectedConsultation = consultation;
    console.log(`on delete ${this.selectedConsultation.id}`)
  }

  getConsultations(): void {
    this.consultService.getConsultations()
    .subscribe(consults => this.consultations = consults);
  }

}
