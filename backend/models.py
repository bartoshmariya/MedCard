from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime

from marshmallow import Schema, fields

db = SQLAlchemy()
ma = Marshmallow()


class Consultation(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     date = db.Column(db.DateTime, default=datetime.now())
     patient = db.Column(db.String(150), nullable=False)
     diagnosis = db.Column(db.String(250), nullable=False)
     recommendation = db.Column(db.Text)
     department = db.Column(db.String(100), nullable=False)
     doctor = db.Column(db.String(150), nullable=False)

     def __repr__(self):
          return 'Consultation %r' % self.id


class ConsultationSchema(Schema):
     id = fields.Int(dump_only=True)
     date = fields.DateTime()
     patient = fields.Str()
     diagnosis = fields.Str()
     recommendation = fields.Str()
     department = fields.Str()
     doctor = fields.Str()


consult_schema = ConsultationSchema()
consults_schema = ConsultationSchema(many=True)