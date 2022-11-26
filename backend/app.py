from flask import Flask, render_template, request, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from marshmallow import ValidationError
from sqlalchemy.exc import NoResultFound

from models import db, ma, consults_schema, consult_schema
from controller import Controller

app = Flask(__name__)
app.config.from_object('config')

db.init_app(app)
ma.init_app(app)

migrate = Migrate(app, db)

with app.app_context():
    db.create_all()
control = Controller()

CORS(app)

@app.route("/")
def root():
    return "<p>Hello, World!</p>"


@app.route('/med-card/api/consultations', methods=['GET'])
def get_all_consults():
    consults = control.get_all_consults()
    result = consults_schema.dump(consults)
    return result


@app.route('/med-card/api/consultations/<int:pk>', methods=['GET'])
def get_consult(pk):
    try:
        consult = control.get_consult_by_id(pk)
    except NoResultFound:
        return {"message": "Consultation could not be found."}, 400

    result = consult_schema.dump(consult)
    return result


@app.route('/med-card/api/consultations/', methods=['POST'])
def new_consult():
    json_data = request.get_json()
    if not json_data:
        return {"data": "No input data provided"}, 400
    try:
        data = consult_schema.load(json_data)
    except ValidationError as err:
        return err.messages, 422
    consult = control.add_consult(data)
    result = consult_schema.dump(
        control.get_consult_by_id(consult.id)
    )
    return result


if __name__ == "__main__":
    app.run(debug=True)
