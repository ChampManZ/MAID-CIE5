var testValue = 1 //ค่า LDR detect
var checkPlayer = document.getElementById("forHidden").textContent

    if (testValue == 1) {
        //เดียว innerHTML ให้ไป fetch ข้อมูล block มาใส้
        document.getElementById("commandzone").innerHTML += "<h3>You are now landed on เว้นไว้ก่อนค่อยดึง: "

        let btnBuy = document.createElement("button")
        btnBuy.innerHTML = "Buy"
        if (btnBuy.onclick = function() {
            //ไปดึงค่า Firebase มา +- เอา
            firebase.database().ref("Players/" + String(checkPlayer)).update({
                Money: 10000
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