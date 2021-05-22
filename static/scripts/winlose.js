var winloseDiv = document.getElementById("winlose")
var messageWrap = document.getElementById("messageWWW")

var playerBankruptRef = firebase.database().ref("Players/" + playerRefVar + "/Bankrupt")
playerBankruptRef.once("value", function(snapshot){
    var bankruptValue = snapshot.val()
    
    if (bankruptValue == 1) {
        winloseDiv.innerHTML += "You Lose!"
    }
})

var winnerRef = firebase.database().ref("Winner")
winnerRef.once("value", function(snapshot){
    var winnerVal = snapshot.val()

    if (winnerVal == 1) {
        winloseDiv.innerHTML += "Player Red is the Winner!"
        messageWrap.remove();
        document.getElementById("commandzone").remove();
        document.getElementById("btnSell").remove();
    }

    if (winnerVal == 2) {
        winloseDiv.innerHTML += "Player Green is the Winner!"
        messageWrap.remove();
        document.getElementById("commandzone").remove();
        document.getElementById("btnSell").remove();
    }

    if (winnerVal == 3) {
        winloseDiv.innerHTML += "Player Blue is the Winner!"
        messageWrap.remove();
        document.getElementById("commandzone").remove();
        document.getElementById("btnSell").remove();
    }

    if (winnerVal == 4) {
        winloseDiv.innerHTML += "Player Baby Blue is the Winner!"
        messageWrap.remove();
        document.getElementById("commandzone").remove();
        document.getElementById("btnSell").remove();
    }
})