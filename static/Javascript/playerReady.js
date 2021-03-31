var initalMoney = 1000000
var containerContext =  document.getElementById("containerID");
var nodeText = document.createTextNode("Money" + "=" + String(initalMoney));
var readyDiv = document.getElementById("readyDiv");

function playerReady() {
    containerContext.appendChild(nodeText);
    readyDiv.parentNode.removeChild(readyDiv);
}