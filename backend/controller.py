from models import db
from models import Consultation


class Controller:
    def add_consult(self, patient, diagnosis, recommendation, department, doctor):
        consult = Consultation(patient=str(patient),
                               diagnosis=str(diagnosis),
                               recommendation=str(recommendation),
                               department=str(department),
                               doctor=str(doctor))
        db.session.add(consult)
        db.session.commit()

    def get_all_consults(self):
        consults = Consultation.query.order_by(Consultation.date.desc()).all()
        return consults

    def get_consult_by_id(self, id):
        consult = Consultation.query.get(id)
        return consult

    def delete_consult_by_id(self, id):
        consult = Consultation.query.get_or_404(id)

        db.session.delete(consult)
        db.session.commit()

    def update_consult_by_id(self, id, patient, diagnosis, recommendation, department, doctor):
        consult = Consultation.query.get_or_404(id)

        consult.patient = patient
        consult.diagnosis = diagnosis
        consult.recommendation = recommendation
        consult.department = department
        consult.doctor = doctor

        db.session.commit()
