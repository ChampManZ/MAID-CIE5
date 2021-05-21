var moneyRef = firebase.database().ref("Players/P1/Money")
            moneyRef.on("value", function(snapshot) {
                var moneyData = snapshot.val()
                console.log(moneyData)
            })