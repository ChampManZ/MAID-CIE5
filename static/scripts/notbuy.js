var playerStatusRef = firebase.database().ref("CurrentPlayer")
let btnSell = document.createElement("button")
btnSell.id = "btnSell"

playerStatusRef.once("value", function(snapshot){
    var playerStatus = snapshot.val()
    if (playerStatus != checkPlayer) {
        document.getElementById("commandzone").innerHTML += ""
    }

    if (testValue == 1 && Number(checkPlayer) == playerStatus) {
        btnSell.innerHTML = "Do Nothing"
        
        if (btnSell.onclick = function() {
            firebase.database().ref().update({
                Buy: 1
            })
            btnBuy.style.visibility = 'hidden'
            btnSell.style.visibility = 'hidden'
        })
        document.body.appendChild(btnSell)
    }
    
})