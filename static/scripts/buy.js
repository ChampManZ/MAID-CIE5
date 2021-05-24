var testValue = 1 //ค่า LDR detect
var checkPlayer = document.getElementById("forHidden").textContent
var diceFont = document.getElementById("diceValue")
var playerRefVar = document.getElementById("firebaseHidden").textContent
var blockValue = document.getElementById("blockValue").textContent

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

        console.log(typeof(document.getElementById(destinationPlayer).getAttribute('value')), "Aunne")

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

        console.log(destinationPlayer)

        var redRef = firebase.database().ref("Players/P1/Destination")
        redRef.on("value", function(snapshot){
            var redDestVal = snapshot.val()
            var greenRef = firebase.database().ref("Players/P2/Destination")
            greenRef.on("value", function(snapshot){
                var greenDestVal = snapshot.val()
                var blueRef = firebase.database().ref("Players/P3/Destination")
                blueRef.on("value", function(snapshot){
                    var blueDestVal = snapshot.val()
                    var babyBlueRef = firebase.database().ref("Players/P4/Destination")
                    babyBlueRef.on("value", function(snapshot){
                        var babyBlueDestVal = snapshot.val()

                        if (redDestVal == parseInt(document.getElementById(redDestVal).getAttribute('value'))) {
                            // var mySpan = document.createElement("span")
                            // mySpan.className = "mySpan"
                            // document.getElementById(destinationPlayer).innerHTML += mySpan
                            // console.log("This is a span")
                            
                            document.getElementById("mySpan" + redDestVal).style.display = "block"
                            console.log("Red is ", redDestVal)
                            console.log(greenDestVal)
                        }
                
                        if (greenDestVal == parseInt(document.getElementById(greenDestVal).getAttribute('value'))) {
                            document.getElementById("greenmySpan" + greenDestVal).style.display = "block"
                            console.log("Green is ", greenDestVal)
                        }

                        if (blueDestVal == parseInt(document.getElementById(blueDestVal).getAttribute('value'))) {
                            document.getElementById("bluemySpan" + blueDestVal).style.display = "block"
                        }

                        if (babyBlueDestVal == parseInt(document.getElementById(babyBlueDestVal).getAttribute("value"))) {
                            document.getElementById("babybluemySpan" + babyBlueDestVal).style.display = "block"
                        }

                    })
                })
            })
        })

        if (ldrVal == true && Number(checkPlayer) == playerStatus) {
            var buttonDiv = document.getElementById("zzz")
            let btnBuy = document.createElement("button")
            btnBuy.innerHTML = "Buy"
            btnBuy.className = "btnCommand"
            buttonDiv.appendChild(btnBuy)
            //เดียว innerHTML ให้ไป fetch ข้อมูล block มาใส้
            // setTimeout(function(){
            //     var reloadDamnRef = firebase.database().ref()
            //     reloadDamnRef.once("value", function(snapshot){
            //         var reloadVal = snapshot.val()

            //         if (reloadVal == 1) {
            //             firebase.database().ref).update({
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

                var landpriceRef = firebase.database().ref("Blocks/" + destinationPlayer + "/LandPrice")
                landpriceRef.once("value", function(snapshot){
                    var landpriceVal = snapshot.val()
                    var tollRef = firebase.database().ref("Blocks/" + destinationPlayer + "/Toll")
                    tollRef.once("value", function(snapshot){
                        if (destinationPlayer == 0) {
                            document.getElementById("commandzone").innerHTML += "<h3> Calm down, game is nearly start!"
                        } else {
                        var tollVal = snapshot.val()
                        document.getElementById("commandzone").innerHTML += "<h3> Landprice" + ": $" + landpriceVal
                        document.getElementById("commandzone").innerHTML += "<h3> Toll Value: $" + tollVal
                        }
                    })
                })
    

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
    
            console.log('hello')
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