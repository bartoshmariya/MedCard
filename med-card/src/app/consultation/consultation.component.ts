import { Component, OnInit } from '@angular/core';
import { Consultation } from '../model/consultation.model';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  
  testConsultations: Consultation[] = [
    new Consultation(
      1, "Иванов Иван", "Болен болезнью 1",
      "Пить больше чая",
      "Терапевтическое отделение",
      "Терапевт Терапевтов",
      new Date(
        Date.now()
      )
    ),
    new Consultation(
      2, "Иванов Петр", "Ковид",
      "Пить больше чая и воды",
      "Терапевтическое отделение",
      "Терапевт Терапевтович",
      new Date(
        Date.now()-1
      )
    )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
