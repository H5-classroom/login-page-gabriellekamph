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

    document.getElementById("content").innerHTML = "<h2>Välkommen</h2> <p> Det här är en simpel liten inloggningssida. <br /> Fyll i dina användaruppgifter ovan för att logga in. </p>";
    document.getElementById("topnav");

// VALIDERA ANGIVNA INLOGGNINGSUPPGIFTER
    
    document.getElementById("loginBtn").addEventListener("click", validateInput);

    function validateInput() {

        let username = document.getElementById("username").value;
        let passW = document.getElementById("passW").value;
    
        for (let i=0; i <userArr.length; i++) {
            if ((username == userArr[i]) && (passW == passArr[i])) {
                localStorage.setItem("username", userArr[i]);
                console.log("yay");
                loggedIn();
                }
        
// FELMEDDELANDE VID FELAKTIGT ANGIVNA INLOGGNINGSUPPGIFTER

            else {
                document.getElementById("content").innerHTML = "<h2>Oops!</h2> <p>Nu blev det lite fel. Försök igen! </p>";
            }
        }
    }
}

// STARTSIDA FÖR INLOGGAT LÄGE

function loggedIn() {

    document.getElementById("topnav").innerHTML = "<button id='logoutBtn'> Logga ut </button>";
    document.getElementById("content").innerHTML = "<h2>Snyggt " + localStorage.getItem('username') + "!</h2> <p>Nu är du inloggad.</p>";

    document.getElementById("logoutBtn").addEventListener("click", logout);

    function logout() {
        localStorage.clear();
        welcomePage();
    }
}




