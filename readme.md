*** Användarnamn och lösenord för testning: ***

username: janne --> password: test

username: knatte --> password: knattepass

username: fnatte --> password: fnattepass

username: tjatte --> password: tjattepass

*** Uppgiftsbeskrivning: Inloggningssida ***

Du har fått i uppgift att utveckla en inloggningssida till ett företag. Sidan skall fungera som en proof-of-concept och har inte krav på säkerhet, utan till uppgiften kan du arbeta med användarnamn och lösenord i klartext. Dvs du kan hantera inloggningsuppgifter som statiska variabler eller i en array.

* Minst 1 användare skall ha användarnamn “janne” och lösenord “test. En lyckad inloggning skall sparas i localStorage och sidan skall komma ihåg och visa rätt vyer under tiden besökaren är inloggad.

* Sidan skall innehålla en meny, en del för innehåll samt en footer.

* Menyn skall alltid visas och ändras dynamiskt för att visa rätt innehåll:

    1. En valfri logotyp eller en h1'a.
    2. Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
    3. Är besökaren inloggad så skall istället en logga-ut knapp visas.

* Innehållsvyn skall dynamiskt växla mellan tre olika lägen:

    1. Välkomstsida för ej inloggade.
    2. Felmeddelande vid felaktig inlogging.
    3. Välkomstsida för inloggad besökare.

Ditt projekt får enbart innehålla 1 st html sida, index.html alla vyer skall hanteras i denna.

*** Funktionskrav (100p – Minst 60p för G och 80p för VG) ***

----> G KRAV

* Ditt projekt skall validera mot HTML-Validate. (10p)
* Sidan visar dynamiskt rätt innehåll hela tiden. (10p)
* Det går att logga in. (10p)
* Inloggning sparas i localStorage. (10p)
* Det går att logga ut. (10p)

----> VG KRAV

* Det skall finnas fler användare, dokumentera de andra användarna inför test i readme.md (10p)
* Välkomstsidan skall dynamiskt visa rätt användarnamn beroende på vem som är inloggad. (10p)
* Det skall gå att skapa och logga in med en ny användare (Då skall ett nytt formulär för detta visas på innehålls-sidan). (20p)
* Efter deadline kommer du att tilldelas slumpmässigt två andra lösningar som du skall kodgranska. Läs mer om hur en kodgranskning går till under kapitlet kodgranskning. Båda kodgranskningarna måste vara inlämnade för att få G på uppgiften.

För att uppnå VG på uppgiften skall du lämna in en reflekterande självutvärdering samt nå minst 80p på funktionskraven.