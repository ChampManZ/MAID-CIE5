var testValue = 1
var checkPlayer = document.getElementById("forHidden").textContent

    if (testValue == 1) {
        document.getElementById("commandzone").innerHTML += "<h3>You are now landed on เว้นไว้ก่อนค่อยดึง: "

        let btnBuy = document.createElement("button")
        btnBuy.innerHTML = "Buy"
        if (btnBuy.onclick = function() {
            //ไปดึงค่า Firebase มา +- เอา
            var moneyRef = firebase.database().ref("Players/" + String(checkPlayer) + "/Money")
            moneyRef.on("value", function(snapshot) {
                var moneyData = snapshot.val()
                console.log(moneyData)
            })
        })
        // let btnSell = document.createElement("button")
        // btnSell.innerHTML = "Sell"
        // let btnNope = document.createElement("button")
        // btnNope.innerHTML = "Do Nothing"

        document.body.appendChild(btnBuy)
        // document.body.appendChild(btnSell)
        // document.body.appendChild(btnNope)
    }

console.log(checkPlayer)