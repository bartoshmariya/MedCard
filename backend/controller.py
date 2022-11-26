from models import db
from models import Consultation
from datetime import datetime, date, time
import json

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
        consults = Consultation.query.order_by(Consultation.date).all()
        return consults


