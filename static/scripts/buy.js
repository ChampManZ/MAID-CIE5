var testValue = 1 //ค่า LDR detect
let btnBuy = document.createElement("button")
var checkPlayer = document.getElementById("forHidden").textContent
var diceFont = document.getElementById("diceValue")
var playerRefVar = document.getElementById("firebaseHidden").textContent

var ldrValRef = firebase.database().ref("AtTheDestination")
ldrValRef.on("value", function(snapshot){
    var ldrVal = snapshot.val()
    var playerStatusRef = firebase.database().ref("CurrentPlayer")
    playerStatusRef.once("value", function(snapshot) {
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
    destinationRef.once("value", function(snapshot){
        var destinationPlayer = snapshot.val()

        if (Number(checkPlayer) != playerStatus) {
            if (playerStatus == 1) {
                diceFont.innerHTML = "Player Red is playing"
            }
            else if (playerStatus == 2) {
                diceFont.innerHTML = "Player Green is playing"
                console.log("Green's Theorem")
            } else if (playerStatus == 3) {
                diceFont.innerHTML = "Player Blue is playing"
            } else if (playerStatus == 4) {
                diceFont.innerHTML = "Player Baby Blue is playing"
            }
        }

        if (ldrVal == true && Number(checkPlayer) == playerStatus) {
            //เดียว innerHTML ให้ไป fetch ข้อมูล block มาใส้
            // setTimeout(function(){
            //     var reloadDamnRef = firebase.database().ref()
            //     reloadDamnRef.once("value", function(snapshot){
            //         var reloadVal = snapshot.val()

            //         if (reloadVal == 1) {
            //             firebase.database().ref().update({
            //                 reloadVal: 0
            //             })
            //             location.reload()
            //         }
            //     })
            //     console.log("FFFFFFF")
            // }, 5000)

            setTimeout(function() {
                if (window.location.hash != '#r') {
                    window.location.hash = 'r'
                    window.location.reload(1)
                    console.log("Fetch data")
                }
            }, 5000)

            // window.onload = function() {
            //     if(!window.location.hash) {
            //         window.location = window.location + '#loaded';
            //         window.location.reload();
            //     }
            // }

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

            document.getElementById("commandzone").innerHTML += "<h3>You are now landed on " + destinationPlayer + ": "

            if (destinationPlayer < 10) {
                var landpriceRef = firebase.database().ref("Blocks/0" + destinationPlayer + "/LandPrice")
                landpriceRef.once("value", function(snapshot){
                    var landpriceVal = snapshot.val()
                    document.getElementById("commandzone").innerHTML += "<h3> Landprice of " + destinationPlayer + ": $" + landpriceVal
                })
            } else if (destinationPlayer > 10) {
                var landpriceRef = firebase.database().ref("Blocks/" + destinationPlayer + "/LandPrice")
                landpriceRef.once("value", function(snapshot){
                    var landpriceVal = snapshot.val()
                    document.getElementById("commandzone").innerHTML += "<h3> Landprice of " + destinationPlayer + ": $" + landpriceVal
                })
            }
    
            btnBuy.innerHTML = "Buy"
            if (btnBuy.onclick = function() {
                firebase.database().ref().update({
                    Buy: 2                
                })
                btnBuy.style.visibility = 'hidden'
                btnSell.style.visibility = 'hidden'

                firebase.database().ref().update({
                    AtTheDestination: false
                })
            })
    
            // let btnNope = document.createElement("button")
            // btnNope.innerHTML = "Do Nothing"
    
            document.body.appendChild(btnBuy)
            // document.body.appendChild(btnNope)
        }
    })
})
})

function reloadPage() {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime()
    var now = Date.now()
    var tenSec = 10 * 1000
    var plusTenSec = currentDocumentTimestamp + tenSec
    if (now > plusTenSec) {
        location.reload();
    }
}