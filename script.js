// ARRAYS MED SPARADE INLOGGNINGSUPPGIFTER

let userArr = ["janne", "gabrielle"];
let passArr = ["test", "mittlosen"];



// KOLLA OM BESÖKAREN FINNS I LOCAL STORAGE

if (localStorage.getItem('username') !== null) { 
    console.log("Användaren finns sparad");
    loggedIn();

} else {
    console.log("Nope, nix, nej");
    welcomePage();
}

// VÄLKOMSTSIDA (EJ INLOGGAD)

function welcomePage() {

    document.getElementById("content").innerHTML = "<p> Det här är en simpel liten inloggningssida. <br /> Fyll i dina användaruppgifter ovan för att logga in. </p>";
    let loginNav = document.getElementById("topnav");
    

    document.getElementById("loginBtn").addEventListener("click", validateInput);
}

// VALIDERA ANGIVNA INLOGGNINGSUPPGIFTER

function validateInput() {

    let username = document.getElementById("username").value;
    let passW = document.getElementById("passW").value;

    for (let i=0; i <userArr.length; i++) {
        if ((username == userArr[i]) && (passW == passArr[i])) {
            localStorage.setItem("username", userArr[i]);
            console.log("yay");
            loggedIn();
            }
    
        else {
            errorMessage();
        }
    }
}

// STARTSIDA FÖR INLOGGAT LÄGE

function loggedIn() {

    document.getElementById("topnav").innerHTML = "<button id='logoutBtn'> Logga ut </button>";
    document.getElementById("content").innerHTML = "<h2>Snyggt " + localStorage.getItem('username') + "!</h2> <p>Nu är du inloggad.</p>";

    document.getElementById("logoutBtn").addEventListener("click", welcomePage);

}

// FELMEDDELANDE VID FELAKTIGT ANGIVNA INLOGGNINGSUPPGIFTER

function errorMessage() {

    document.getElementById("content").innerHTML = "<p> Oops! <br /> Nu blev det lite fel. Försök igen! </p>";

}




