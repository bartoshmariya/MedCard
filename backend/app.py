from flask import Flask, render_template, request, redirect
from flask_migrate import Migrate
from models import db
from controller import Controller

app = Flask(__name__)
app.config.from_object('config')

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()
control = Controller()


@app.route("/")
def root():
    return render_template('index.html')


@app.route("/create-consultation", methods=["POST", "GET"])
def add():
    if request.method == "POST":
        patient = request.form['patient']
        diagnosis = request.form['diagnosis']
        recommendation = request.form['recommendation']
        department = request.form['department']
        doctor = request.form['doctor']

        control.add_consult(patient, diagnosis, recommendation, department, doctor)

        return redirect("/consultations")
    else:
        return render_template('create-consult.html')


@app.route("/consultations")
def all_consultations():
    consults = control.get_all_consults()
    return render_template('consults.html', consults=consults)


@app.route("/consultations/<int:id>")
def consultation_id(id):
    consult = control.get_consult_by_id(id)
    return render_template('consultation.html', consult=consult)


@app.route("/consultations/<int:id>/delete")
def consultation_delete(id):
    control.delete_consult_by_id(id)
    return redirect('/consultations')


@app.route("/consultations/<int:id>/update", methods=["POST", "GET"])
def consultation_update(id):
    consult = control.get_consult_by_id(id)

    if request.method == "POST":
        patient = request.form['patient']
        diagnosis = request.form['diagnosis']
        recommendation = request.form['recommendation']
        department = request.form['department']
        doctor = request.form['doctor']

        control.update_consult_by_id(id, patient, diagnosis, recommendation, department, doctor)
        return redirect("/consultations")
    else:
        return render_template('update-consultation.html', consult=consult)


if __name__ == "__main__":
    app.run(debug=True)
