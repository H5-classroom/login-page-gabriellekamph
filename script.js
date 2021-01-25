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

// UPPDATERA MENY + INNEHÅLL BEROENDE PÅ OM INLOGG STÄMMER

//----- Meny 1 (ej inloggad) - visa inloggningsformulär

//----- Meny 2 (inloggad) - visa knapp för att logga ut

//----- Innehållsvy 1 (ej inloggad) - välkomstsida för ej inloggade

//----- Innehållsvy 2 (inloggad) - välkomstsida för inloggad besökare

//----- Innehållsvy 3 (felaktig inloggning) - visa felmeddelande
