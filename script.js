// SKAPA ARRAY MED ANVÄNDARUPPGIFTER

let userArr = ["janne", "gabrielle"];
let passArr = ["test", "mittlosen"];

// SÄTT EVENTLISTENER PÅ LOGGA IN-KNAPP

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

// UPPDATERA MENY + INNEHÅLL BEROENDE PÅ OM INLOGG STÄMMER

//----- Meny 1 (ej inloggad) - visa inloggningsformulär

//----- Meny 2 (inloggad) - visa knapp för att logga ut

//----- Innehållsvy 1 (ej inloggad) - välkomstsida för ej inloggade

//----- Innehållsvy 2 (inloggad) - välkomstsida för inloggad besökare

//----- Innehållsvy 3 (felaktig inloggning) - visa felmeddelande
