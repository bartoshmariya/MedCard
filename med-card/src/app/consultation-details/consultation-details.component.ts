import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Consultation } from '../model/consultation.model';
import { ConsultationDetailsService } from '../services/consultation-details.service';

@Component({
  selector: 'app-consultation-details',
  templateUrl: './consultation-details.component.html',
  styleUrls: ['./consultation-details.component.scss']
})
export class ConsultationDetailsComponent implements OnInit {

  constructor(public consultDetailService: ConsultationDetailsService) { }

  ngOnInit(): void {
    console.log(`on init: ${this.consultDetailService.consultation?.patient}`)
  }

}
