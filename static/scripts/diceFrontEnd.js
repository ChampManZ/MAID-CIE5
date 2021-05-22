var diceWaiting = document.getElementById("diceValue")

var diceRollRef = firebase.database().ref("DiceRoll")
diceRollRef.once("value", function(child){
    var diceRollValue = child.val()

    playerStatusRef.once("value", function(snapshot){
        var playerStatus = snapshot.val()
        if (parseInt(diceRollValue) == 0 && parseInt(checkPlayer) == parseInt(playerStatus)) {
            diceFont.innerHTML = "Roll the dice!"

            if (diceRollValue != 0) {
                diceFont.innerHTML = "You Roll: " + diceRollValue + "!"
            }
        }
    })
})