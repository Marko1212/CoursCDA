/* On veut créer un jeu du "C'est plus, c'est moins."

Le principe est simple.

L'utilisateur arrive sur la page web, on lui demande de saisir un nombre entre 1 et 100. Il doit trouver le bon nombre, tant qu'il ne l'a pas trouvé, on lui indique si le nombre à trouver est plus grand ou plus petit que celui qu'il a saisi.

S'il trouve le bon nombre, la partie s'arrête.

S'il retourne sur la page, le nombre doit changer. */


var nombreADeviner = Math.floor((Math.random() * 100) + 1);

console.log(nombreADeviner);

var userInput = parseInt(prompt("Saisissez un nombre naturel entre 1 et 100"));

while (userInput !== nombreADeviner) {

    if (userInput > nombreADeviner) {
      userInput = parseInt(prompt("Le nombre à trouver est plus petit, veuillez réessayer!"));
    } 

    else if (userInput < nombreADeviner) {
        userInput = parseInt(prompt("Le nombre à trouver est plus grand, veuillez réessayez!"));
    }

}

alert("Félicitations! Vous avez trouvé le bon numéro, c'est le " + userInput);

var réponse = prompt("Veux tu rejouer?");

while (réponse !== "oui" && réponse !== "non" && réponse !== "o" && réponse !== "n") {
    réponse = prompt("Veux tu rejouer?");
}

console.log(réponse);

if (réponse === "non" || réponse === "n") {
    alert("Merci d'avoir joué! Au revoir!!");
}

if (réponse === "oui" || réponse === "o") {
    
    var nombreADeviner2 = nombreADeviner;

   /*  alert(nombreADeviner2); */

    while (nombreADeviner2 === nombreADeviner) {
        nombreADeviner2 = Math.floor((Math.random() * 100) + 1);
    }

    console.log(nombreADeviner2);

    /*  alert(nombreADeviner2); */

var userInput2 = parseInt(prompt("Saisissez un nombre naturel entre 1 et 100"));

while (userInput2 !== nombreADeviner2) {

    if (userInput2 > nombreADeviner2) {
      userInput2 = parseInt(prompt("Le nombre à trouver est plus petit, veuillez réessayer!"));    
    } 

    else if (userInput2 < nombreADeviner2) {
        userInput2 = parseInt(prompt("Le nombre à trouver est plus grand, veuillez réessayez!"));
    }

}

alert("Félicitations! Vous avez trouvé le bon numéro, c'est le " + userInput2);

alert("Merci et au revoir!!!");
    
}



