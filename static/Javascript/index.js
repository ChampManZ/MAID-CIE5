// var pinHolder = [];

// function randomPin() {
//     var random = Math.floor(100000 + Math.random() * 900000);
//     pinHolder.push(parseInt(random));

//     window.alert(random);

//     console.log(pinHolder);
//     console.log(typeof(random));
//     console.log(pinHolder[pinHolder.length - 1]);
// }

// function toLobby() {
//     // var formPIN = document.forms["pinForm"]["pinInput"].value;

//     // console.log(formPIN);

//     // if (formPIN == pinHolder[-1]) {
//     //     window.location.replace("http://127.0.0.1:5000/lobby");
//     // } else if (formPIN == "") {
//     //     alert("No PIN has enter");
//     // } else if (formPIN != pinHolder[-1]) {
//     //     alert("Wrong PIN");
//     // }

//     var enterPIN = parseInt(document.getElementById("pinText").value);

//     if (enterPIN === pinHolder[pinHolder.length - 1]) {
//         alert("Sucessfully enter lobby.");
//         window.location.href = "lobby";
//         return true;
//     }
//     else {
//         alert("Wrong PIN or no PIN has enter")
//         return false;
//     }
//     console.log(enterPIN);
// }

// function inputChange() {
//     var content = document.getElementById("pinText").value;
//     return content.length < 6;
// }

import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAXvbeBd_pDv4kZvicg57QqhKbvMuijD6w",
    authDomain: "monopoly-6e4c6.firebaseapp.com",
    databaseURL: "https://monopoly-6e4c6-default-rtdb.firebaseio.com",
    projectId: "monopoly-6e4c6",
    storageBucket: "monopoly-6e4c6.appspot.com",
    messagingSenderId: "252823670936",
    appId: "1:252823670936:web:7358c055c5e265f7a540ed",
    measurementId: "G-HW7K20PBTV"
})

function joinLobby() {
    var join = document.getElementById("join");

    join.addEventListener("click", function() {
        window.location.href = "lobby";
    })
}