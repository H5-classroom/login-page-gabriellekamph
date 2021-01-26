// ARRAYS MED SPARADE INLOGGNINGSUPPGIFTER

let userArr = ["janne", "gabrielle"];
let passArr = ["test", "mittlosen"];

// MENY + INNEHÅLL FÖR STARTSIDA (EJ INLOGGAT LÄGE)

let startpageContent = "<p> Det här är en simpel liten inloggningssida. <br /> Fyll i dina användaruppgifter ovan för att logga in. </p>";
let loginNav = document.getElementById("topnav");

document.getElementById("h2").innerHTML = "Välkommen";
document.getElementById("content").insertAdjacentHTML("beforeend", startpageContent);

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

    // UPPDATERA MENY + INNEHÅLLSSIDA FÖR INLOGGAT LÄGE

    if (valid) {    
        // console.log("HURRAAA");

        document.getElementById("content").innerHTML = "<h2>Snyggt " + userName + "!</h2> <p>Nu är du inloggad. </p>";

    // LÄGG TILL LOGGA UT-KNAPP OCH SKICKA TILLBAKA TILL STARTSIDA VID KLICK

        let logoutNav = document.getElementById("topnav").innerHTML = "<button id='logoutBtn'> Logga ut </button>";

        document.getElementById("topnav").innerHTML = logoutNav;
        document.getElementById("logoutBtn").addEventListener("click", logout);

        function logout() {
            // localStorage.clear();  ----> Ska localStorage tömmas vid utlogg?
            document.getElementById("content").innerHTML = startpageContent;
            document.getElementById("topnav").innerHTML = "Visa inloggningsformulär igen";   
            console.log(loginNav);       
        }
    }

    // VISA FELMEDDELANDE VID FELAKTIGA INLOGGNINGSUPPGIFTER

    else {
        // console.log("NOOOO");
        document.getElementById("content").innerHTML = "<p> Oops! <br /> Nu blev det lite fel. Försök igen! </p>";
    }

}



