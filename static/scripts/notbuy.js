var playerStatusRef = firebase.database().ref("CurrentPlayer")
playerStatusRef.once("value", function(snapshot){
    var playerStatus = snapshot.val()
    var ldrValRef = firebase.database().ref("AtTheDestination")
    ldrValRef.on("value", function(snapshot){
        var ldrVal = snapshot.val()
        if (playerStatus != checkPlayer) {
            document.getElementById("commandzone").innerHTML += ""
        }
    
        if (ldrVal == true && Number(checkPlayer) == playerStatus) {
            let btnSell = document.createElement("button")
            btnSell.id = "btnSell"
            btnSell.innerHTML = "Do Nothing"
            
            if (btnSell.onclick = function() {
                firebase.database().ref().update({
                    Buy: 1
                })
                btnBuy.style.visibility = 'hidden'
                btnSell.style.visibility = 'hidden'
                firebase.database().ref().update({
                    AtTheDestination: false
                })
            })
            document.body.appendChild(btnSell)
        }
    })
})