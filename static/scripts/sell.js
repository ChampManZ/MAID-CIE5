var testValue = 1 //ค่า LDR detect
var checkPlayer = document.getElementById("forHidden").textContent

    if (testValue == 1) {
        let btnSell = document.createElement("button")
        btnSell.innerHTML = "Sell"
        if (btnSell.onclick = function() {
            var sellRef = firebase.database().ref("TeeDinTest/RakaSell")
            sellRef.once("value", function(sellSnapshot){
                var sellData = sellSnapshot.val()
                var playerMoneySellRef = firebase.database().ref("Players/" + String(checkPlayer) + "/Money")
                playerMoneySellRef.once("value", function(playerSnapshot){
                    var playerData = playerSnapshot.val()
                    var finalMoney = playerData + sellData
                    console.log("Player: ", playerData, "Sell: ", sellData, "= ", playerData + sellData)
                    firebase.database().ref("Players/" + String(checkPlayer)).update({
                        Money: finalMoney
                    })
                })
            })
        })

        // let btnNope = document.createElement("button")
        // btnNope.innerHTML = "Do Nothing"

        // document.body.appendChild(btnBuy)
        document.body.appendChild(btnSell)
        // document.body.appendChild(btnNope)
    }