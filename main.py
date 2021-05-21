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
testValue = db.child("DiceRoll").get()

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

@app.route('/redPlayer', methods=["GET", "POST"])
def redPlayer():
    DiceRollStatus = db.child("DiceRoll").get()
    DiceRollVar = DiceRollStatus.val()

    money = db.child("Players/P0/Money").get()
    moneyVal = money.val()
    # if request.method == "GET":
    #     if DiceRollVar == 0:
    #         moneyVal -= 100
    return render_template("redPlayer.html", DiceRollVar=DiceRollVar, moneyVal=moneyVal)

@app.route('/greenPlayer', methods=["GET", "POST"])
def greenPlayer():
    DiceRollStatus = db.child("DiceRoll").get()
    DiceRollVar = DiceRollStatus.val()

    money = db.child("Players/P1/Money").get()
    moneyVal = money.val()
    # if request.method == "GET":
    #     if DiceRollVar == 0:
    #         moneyVal += 500
    return render_template("greenPlayer.html", moneyVal=moneyVal, DiceRollVar=DiceRollVar)

@app.route('/bluePlayer', methods=["GET", "POST"])
def bluePlayer():
    DiceRollStatus = db.child("DiceRoll").get()
    DiceRollVar = DiceRollStatus.val()

    money = db.child("Players/P2/Money").get()
    moneyVal = money.val()
    # if request.method == "GET":
    #     if DiceRollVar == 0:
    #         moneyVal += 100
    return render_template("bluePlayer.html", moneyVal=moneyVal, DiceRollVar=DiceRollVar)

@app.route('/babyBluePlayer', methods=["GET", "POST"])
def babyBluePlayer():
    DiceRollStatus = db.child("DiceRoll").get()
    DiceRollVar = DiceRollStatus.val()

    money = db.child("Players/P3/Money").get()
    moneyVal = money.val()
    # if request.method == "GET":
    #     if DiceRollVar == 0:
    #         moneyVal += 1000
    return render_template("babyBluePlayer.html", moneyVal=moneyVal, DiceRollVar=DiceRollVar)

@app.route('/test', methods=["GET", "POST"])
def tester():
    if request.method == "GET":
        if testValue.val() == "3":
            stringTest = "Mr.Ashan really love you"
            return render_template('test.html', AshanTest=stringTest)

if __name__ == "__main__":
    app.run(debug=True)