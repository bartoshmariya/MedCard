export class Consultation {
  private patient: string;
  public id: number;
  public diagnosis: string;
  public recommendation: string;
  public department: string;
  public doctor: string;
  public dateСonclusion: Date;

  constructor(id:number,
              patient: string,
              diagnosis: string,
              recommendation: string,
              department: string,
              doctor: string, dateСonclusion: Date) {
      this.id = id;
      this.diagnosis = diagnosis;
      this.patient = patient;
      this.recommendation = recommendation;
      this.department = department;
      this.doctor = doctor;
      this.dateСonclusion = dateСonclusion;

  }

  getPatient(): string {
    return this.patient;
  }
  getDiagnosisAndRecommendation(): string {
    return `${this.diagnosis} ${this.recommendation}`;
  }
  getDoctorAndDepartment(): string {
    return `${this.doctor} ${this.department}`;
  }

  getDateConclusion(): string {
    return `${this.dateСonclusion}`;
  }
}

