// ARRAY MED SPARADE INLOGGNINGSUPPGIFTER

let userArr = ["janne", "gabrielle"];
let passArr = ["test", "mittlosen"];

// SPARA ANGIVNA INLOGGNINGSUPPGIFTERNA I LOCAL STORAGE



// MENY + INNEHÅLLSSIDA FÖR EJ INLOGGAT LÄGE

document.getElementById("content").innerHTML = "<p> Välkommen till en simpel liten inloggningssida. <br /> Fyll i dina användaruppgifter uppe i högra hörnet för att logga in. </p>";

// KONTROLLERA OM ANGIVNA INLOGGNINGSUPPGIFTER STÄMMER

document.getElementById("loginBtn").addEventListener("click", validateInput);

function validateInput() {

    let userName = document.getElementById("userName").value;
    let passW = document.getElementById("passW").value;
    let valid = false;

    for (let i=0; i <userArr.length; i++) {
        if ((userName == userArr[i]) && (passW == passArr[i])) {
            localStorage.setItem("username", userArr[i]);
            localStorage.setItem("password", passArr[i]);
            valid = true;
            break;
        }
    }

    // MENY + INNEHÅLLSSIDA FÖR INLOGGAT LÄGE

    if (valid) {    
        console.log("HURRAAA");

        document.getElementById("content").innerHTML = "<p> Hej " + userName + "! Nu är du inloggad. </p>";

    }

    // FELMEDDELANDE VID FELAKTIGA INLOGGNINGSUPPGIFTER

    else {
        console.log("NOOOO");

        document.getElementById("content").innerHTML = "<p> Oops! <br /> Nu blev det lite fel. Försök igen! </p>";

    }

}



