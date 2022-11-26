from flask import Flask, render_template, request, redirect, jsonify
from flask_migrate import Migrate
from models import db, ma, Consultation, consults_schema, consult_schema
from controller import Controller
import json

app = Flask(__name__)
app.config.from_object('config')

db.init_app(app)
ma.init_app(app)

migrate = Migrate(app, db)

with app.app_context():
    db.create_all()
control = Controller()


@app.route("/")
def root():
    return "<p>Hello, World!</p>"


@app.route("/add", methods=["POST", "GET"])
def add():
    if request.method == "POST":
        # date = request.form['date']
        patient = request.form['patient']
        diagnosis = request.form['diagnosis']
        recommendation = request.form['recommendation']
        department = request.form['department']
        doctor = request.form['doctor']

        control.add_consult(patient, diagnosis, recommendation, department, doctor)

        # consult = Consultation(date=date, diagnosis=diagnosis, recommendation=recommendation, department=department,
        #                    doctor=doctor)
        # db.session.add(consult)
        # db.session.commit()
        return redirect("/all-consultations")
        # return "При добавлении возникла ошибка"
    else:
        return render_template('root.html')


@app.route('/med-card/api/consultations',  methods=['GET'])
def get_all_consults():
    consults = Consultation.query.all()
    result = consults_schema.dump(consults)
    return jsonify({'consults': result})

@app.route("/all-consultations")
def all_consultations():
    consults = control.get_all_consults()
    return render_template('consults.html', consults=consults)


if __name__ == "__main__":
    app.run(debug=True)
