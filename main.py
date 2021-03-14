from flask import Flask, render_template, request, url_for, redirect, session, jsonify, send_file
import pyrebase

config = {
    "apiKey": "AIzaSyAXvbeBd_pDv4kZvicg57QqhKbvMuijD6w",
    "authDomain": "monopoly-6e4c6.firebaseapp.com",
    "databaseURL": "https://monopoly-6e4c6-default-rtdb.firebaseio.com",
    "projectId": "monopoly-6e4c6",
    "storageBucket": "monopoly-6e4c6.appspot.com",
    "messagingSenderId": "252823670936",
    "appId": "1:252823670936:web:7358c055c5e265f7a540ed",
    "measurementId": "G-HW7K20PBTV"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
test = db.child("Demo").get()

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def index():
    #return str(test.val()) This is comnand to retrieve Firebase value.
    # if request.method == "POST":
    #     pinID =
    return render_template("index.html")

@app.route('/lobby', methods=["GET", "POST"])
def lobby():
    return render_template("lobby.html")

if __name__ == "__main__":
    app.run(debug=True)