var joinButton1 = document.getElementById("join1");
var joinButton2 = document.getElementById("join2");
var joinButton3 = document.getElementById("join3");
var joinButton4 = document.getElementById("join4");

function joinPlayer1() {
    joinButton1.addEventListener("click", function() {
        window.location.href = "redPlayer";
    })
}

function joinPlayer2() {
    joinButton2.addEventListener("click", function() {
        window.location.href = "greenPlayer";
    })
}

function joinPlayer3() {
    joinButton3.addEventListener("click", function() {
        window.location.href = "bluePlayer";
    })
}

function joinPlayer4() {
    joinButton4.addEventListener("click", function() {
        window.location.href = "babyBluePlayer";
    })
}