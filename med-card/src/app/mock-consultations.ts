import { Consultation } from "./model/consultation.model";

export const CONSULTATIONS: Consultation[] = [
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
  ),
  new Consultation(
    3, "Петров Петр", "Ковид 2",
    "Пить больше чая и воды",
    "Терапевтическое отделение",
    "Терапевт Терапевтович",
    new Date(
      Date()
    )
  )
]


