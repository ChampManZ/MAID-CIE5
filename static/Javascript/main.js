var pinHolder = [];

function randomPin() {
    var random = Math.floor(100000 + Math.random() * 900000);
    pinHolder.push(parseInt(random));

    window.alert(random);

    console.log(pinHolder);
    console.log(typeof(random));
    console.log(pinHolder[pinHolder.length - 1]);
}

function toLobby() {
    // var formPIN = document.forms["pinForm"]["pinInput"].value;

    // console.log(formPIN);

    // if (formPIN == pinHolder[-1]) {
    //     window.location.replace("http://127.0.0.1:5000/lobby");
    // } else if (formPIN == "") {
    //     alert("No PIN has enter");
    // } else if (formPIN != pinHolder[-1]) {
    //     alert("Wrong PIN");
    // }

    var enterPIN = parseInt(document.getElementById("pinText").value);

    if (enterPIN === pinHolder[pinHolder.length - 1]) {
        alert("Sucessfully enter lobby.");
        window.location.href = "lobby";
        return true;
    }
    else {
        alert("Wrong PIN or no PIN has enter")
        return false;
    }
    console.log(enterPIN);
}

function inputChange() {
    var content = document.getElementById("pinText").value;
    return content.length < 6;
}

function test() {
    var test = document.getElementById("tester");

    test.addEventListener("click", function() {
        window.location.href = "lobby";
    })
}