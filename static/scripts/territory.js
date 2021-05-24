var infoDiv = document.getElementById("infomation")
var terry = firebase.database().ref("Players/" + playerRefVar + "/Territories")
terry.on("value", function(snapshot){
    var playerTerritoryValue = snapshot.val()
    console.log(Object.values(playerTerritoryValue).length)
    if (Object.values(playerTerritoryValue).length > 1) {
        infoDiv.innerHTML += "Your property: " + playerTerritoryValue
    } else if (Object.values(playerTerritoryValue).length == null) {
        infoDiv.innerHTML += "You doesn't own any property yet"
    }
})