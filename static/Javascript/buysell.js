const { default: firebase } = require("firebase")

firebase.database().ref('Test').on('value', function(snapshot) {
    var testRefVal = snapshot.val()
})

function buySell() {
    if (testRefVal == 0) {
        console.log("Still 0")
    }
}