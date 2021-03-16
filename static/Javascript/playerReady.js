var initalMoney = 1000000
var containerContext =  document.getElementById("containerID");
var nodeText = document.createTextNode(String(initalMoney));

function playerReady() {
    containerContext.appendChild(nodeText);
}