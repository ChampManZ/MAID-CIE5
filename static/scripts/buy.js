var testValue = 1 //ค่า LDR detect
var checkPlayer = document.getElementById("forHidden").textContent
var diceFont = document.getElementById("diceValue")
var playerRefVar = document.getElementById("firebaseHidden").textContent

var playerStatusRef = firebase.database().ref("CurrentPlayer")
playerStatusRef.on("value", function(snapshot) {
    var playerStatus = snapshot.val()

    // if (playerStatus != checkPlayer) {
    //     document.getElementById("commandzone").innerHTML += "<h3>Please wait"
    // }
    // console.log(testValue)
    // console.log(playerStatus)
    // console.log(checkPlayer)
    
    // console.log(typeof(testValue))
    // console.log(typeof(playerStatus))
    // console.log(typeof(checkPlayer))

    var destinationRef = firebase.database().ref("Players/" + playerRefVar + "/Destination")
    destinationRef.on("value", function(snapshot){
        var destinationPlayer = snapshot.val()

        if (Number(checkPlayer) != playerStatus) {
            if (playerStatus == 1) {
                diceFont.innerHTML = "Player Red is playing"
            }
            else if (playerStatus == 2) {
                diceFont.innerHTML = "Player Green is playing"
            } else if (playerStatus == 3) {
                diceFont.innerHTML = "Player Blue is playing"
            } else if (playerStatus == 4) {
                diceFont.innerHTML = "Player Baby Blue is playing"
            }
        }
    
        if (testValue == 1 && Number(checkPlayer) == playerStatus) {
            //เดียว innerHTML ให้ไป fetch ข้อมูล block มาใส้
            document.getElementById("commandzone").innerHTML += "<h3>You are now landed on " + destinationPlayer + ": "
    
            let btnBuy = document.createElement("button")
            btnBuy.innerHTML = "Buy"
            if (btnBuy.onclick = function() {
                firebase.database().ref().update({
                    Buy: 2                
                })
            })
    
            // let btnNope = document.createElement("button")
            // btnNope.innerHTML = "Do Nothing"
    
            document.body.appendChild(btnBuy)
            // document.body.appendChild(btnNope)
        }
    })

})