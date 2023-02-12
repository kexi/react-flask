from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["POST"])
def hello_world():
  name = request.json.get("name")
  return {"greeting": "Hello! {}".format(name)}


app.run(host="react-flask-backend.onrender.com", port=8000)
