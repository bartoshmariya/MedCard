import { Component, OnInit } from '@angular/core';
import { Consultation } from '../model/consultation.model';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {

  constructor(private consultationService: ConsultationService ) { }

  consultation: Consultation = {
    patient: '',
    diagnosis: '',
    recommendation: '',
    department: '',
    doctor: ''
  }

  ngOnInit(): void {

  }
  onConsultCreate(consults: Consultation): void {
    console.log(consults);
    this.consultationService.postConsultation(this.consultation)
    .subscribe(
      (res) => console.log(res)
    );
  }
}
