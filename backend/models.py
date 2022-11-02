from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Consultation(db.Model):
    __tablename__ = 'consultations'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.now())
    patient = db.Column(db.String(150), nullable=False)
    # icd_id = db.Column(db.Integer, db.ForeignKey('icd.id'))
    diagnosis = db.Column(db.String(150), nullable=False)
    recommendation = db.Column(db.Text)
    department = db.Column(db.String(100), nullable=False)
    doctor = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return 'Consultation %r' % self.id


# class ICD(db.Model):
#     __tablename__ = 'icd'
#     id = db.Column(db.Integer, primary_key=True)
#     label = db.Column(db.String, nullable=False)
#     consults = db.relationship('Consultation', backref='icd')
#
#     def __repr__(self):
#         return 'ICD %r' % self.label
