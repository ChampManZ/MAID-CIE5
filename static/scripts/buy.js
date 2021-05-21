var testValue = 1 //ค่า LDR detect
var checkPlayer = document.getElementById("forHidden").textContent

    if (testValue == 1) {
        //เดียว innerHTML ให้ไป fetch ข้อมูล block มาใส้
        document.getElementById("commandzone").innerHTML += "<h3>You are now landed on เว้นไว้ก่อนค่อยดึง: "

        let btnBuy = document.createElement("button")
        btnBuy.innerHTML = "Buy"
        if (btnBuy.onclick = function() {
            //ไปดึงค่า Firebase มา +- เอา
            var buySellRef = firebase.database().ref("TeeDinTest/RakaBuy")
            buySellRef.once("value", function(buySnapshot) {
                var buySellData = buySnapshot.val()
                var playerMoneyBuyRef = firebase.database().ref("Players/" + String(checkPlayer) + "/Money")
                playerMoneyBuyRef.once("value", function(playerSnapshot) {
                    var playerData = playerSnapshot.val()
                    var finalMoney = playerData - buySellData
                    console.log("Player: ", playerData, "Buy: ", buySellData, "= ", playerData - buySellData)
                    firebase.database().ref("Players/" + String(checkPlayer)).update({
                        Money: finalMoney
                    })
                })
            })
        })

        // let btnNope = document.createElement("button")
        // btnNope.innerHTML = "Do Nothing"

        document.body.appendChild(btnBuy)
        // document.body.appendChild(btnNope)
    }