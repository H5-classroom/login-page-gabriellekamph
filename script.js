// ARRAY MED SPARADE INLOGGNINGSUPPGIFTER

let userArr = ["janne", "gabrielle"];
let passArr = ["test", "mittlosen"];

// SPARA ANGIVNA INLOGGNINGSUPPGIFTERNA I LOCAL STORAGE

document.getElementById("loginBtn").addEventListener("click", storeIput);

function storeIput() {
    localStorage.setItem("username", userName.value);
    localStorage.setItem("password", passW.value);
}

// KONTROLLERA OM ANGIVNA INLOGGNINGSUPPGIFTER STÄMMER

document.getElementById("loginBtn").addEventListener("click", validateInput);

function validateInput() {

    let userName = document.getElementById("userName").value;
    let passW = document.getElementById("passW").value;
    let valid = false;

    for (let i=0; i <userArr.length; i++) {
        if ((userName == userArr[i]) && (passW == passArr[i])) {
            valid = true;
            break;
        }
    }

    if (valid) {
        console.log("HURRAAA");
        
    }
    else {
        console.log("NOOOO");

    }

}

// MENY + INNEHÅLLSSIDA FÖR EJ INLOGGAT LÄGE

document.getElementById("content").innerHTML = "<p> Välkommen till en simpel liten inloggningssida. <br /> Fyll i dina användaruppgifter uppe i högra hörnet för att logga in. </p>";

// FELMEDDELANDE VID FELAKTIGA INLOGGNINGSUPPGIFTER


// MENY + INNEHÅLLSSIDA FÖR INLOGGAT LÄGE


