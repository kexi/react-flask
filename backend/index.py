from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
  return "Hello"


app.run(host="localhost", port=8000)
