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
    if request.method == "GET":
        ledTestValue = db.child("TestLED").get()
        ledStatus = ledTestValue.val()
    
        diceChildValue = db.child("DiceRoll").get()
        diceValue = diceChildValue.val()
        initialMoney = 1000000

        # Test Backend to Frontend by pulling data from Firebase
        
        if ledStatus == "OFF":
            initialMoney -= 1000
            print("LED OFF") #For debug
            ledStatus = db.child("TestLED").get().val()
            print(ledStatus)
            return render_template("redPlayer.html", initialMoney=initialMoney, diceValue=diceValue)
        elif ledStatus == "ON":
            initialMoney += 1000
            print("LED ON")
            ledStatus = db.child("TestLED").get().val()
            print()
            return render_template("redPlayer.html", initialMoney=initialMoney, diceValue=diceValue)

    return render_template("redPlayer.html", initialMoney=initialMoney, diceValue=diceValue)

@app.route('/greenPlayer', methods=["GET", "POST"])
def greenPlayer():
    if request.method == "GET":
        diceChildValue = db.child("DiceRoll").get()
        diceValue = diceChildValue.val()
        initialMoney = 1000000
        return render_template("greenPlayer.html", initialMoney=initialMoney, diceValue=diceValue)

@app.route('/bluePlayer', methods=["GET", "POST"])
def bluePlayer():
    if request.method == "GET":
        diceChildValue = db.child("DiceRoll").get()
        diceValue = diceChildValue.val()
        initialMoney = 1000000
        return render_template("bluePlayer.html", initialMoney=initialMoney, diceValue=diceValue)

@app.route('/babyBluePlayer', methods=["GET", "POST"])
def babyBluePlayer():
    if request.method == "GET":
        diceChildValue = db.child("DiceRoll").get()
        diceValue = diceChildValue.val()
        initialMoney = 1000000
        return render_template("babyBluePlayer.html", initialMoney=initialMoney, diceValue=diceValue)

@app.route('/test', methods=["GET", "POST"])
def tester():
    if request.method == "GET":
        if testValue.val() == "3":
            stringTest = "Mr.Ashan really love you"
            return render_template('test.html', AshanTest=stringTest)

if __name__ == "__main__":
    app.run(debug=True)