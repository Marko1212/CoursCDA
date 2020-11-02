var globale = 'Je suis accessible de partout';

function myPreetyFunction () {
    var locale = 'Je ne suis accessible que dans la fonction';
    globale2 = 'Je serais accessible en dehors de la fonction';
    console.log(globale); // Fonctionne
}

//console.log(globale2); // Ne fonctionne pas
myPreetyFunction();
console.log(globale); // Fonctionne
//console.log(locale); // Ne fonctionne pas
console.log(globale2); // Fonctionne