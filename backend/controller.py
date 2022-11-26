from models import db
from models import Consultation


class Controller:
    def add_consult(self, data):
        patient, diagnosis, recommendation, department, doctor = data["patient"], data["diagnosis"], \
                                                                       data["recommendation"], data["department"], data[
                                                                           "doctor"]
        consult = Consultation.query.filter_by(
            patient=patient,
            recommendation=recommendation,
            doctor=doctor
        )
        if consult is None:
            consult = Consultation(
                patient=str(patient),
                diagnosis=str(diagnosis),
                recommendation=str(recommendation),
                department=str(department),
                doctor=str(doctor)
            )
        db.session.add(consult)
        db.session.commit()
        return consult

    def get_all_consults(self):
        consults = Consultation.query.order_by(Consultation.date).all()
        return consults

    def get_consult_by_id(self, pk):
        consult = Consultation.query.filter(Consultation.id == pk).one()
        return consult
