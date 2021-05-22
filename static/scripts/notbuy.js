var playerStatusRef = firebase.database().ref("CurrentPlayer")
playerStatusRef.on("value", function(snapshot){
    var playerStatus = snapshot.val()
    if (playerStatus != checkPlayer) {
        document.getElementById("commandzone").innerHTML += ""
    }

    if (testValue == 1 && Number(checkPlayer) == playerStatus) {
        let btnSell = document.createElement("button")
        btnSell.innerHTML = "Do Nothing"
        firebase.database().ref().update({
            Buy: 1
        })
        document.body.appendChild(btnSell)
    }
    
})