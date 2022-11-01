from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


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
