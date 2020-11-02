
/* 
1. Créer une fonction qui calcule le carré d'un nombre
2. Créer une fonction qui convertit une valeur en euros en bitcoins, et qui peut faire l'inverse.
3. Créer une fonction qui calcule le PGCD de 2 nombres */


// Cette fonction attend un ingrédient comme paramètre et le transforme en farine
function moulin (ingredient) {
    return 'Je transforme le ' + ingredient + ' en superbe farine !';
}

moulin('blé');

var addition = function (n1, n2) { // Plusieurs paramètres
    return n1 + n2;
}

var resultat = addition(1, 3);

function carré(a) {
    return a*a;
}

console.log(carré(4));


// 1 bitcoin vaut environ 10260 euros

function convertBetweenEuroAndBitcoin(deviseToConvert, deviseResultat) {//devise cible

    if (deviseResultat === "euro") {
        return "La valeur en euros est " + deviseToConvert * 10260;
    }
     
    if (deviseResultat === "bitcoin") {
        return "La valeur en bitcoins est " + deviseToConvert / 10260;
    }
    
}

console.log(convertBetweenEuroAndBitcoin(50, "bitcoin"));
console.log(convertBetweenEuroAndBitcoin(50, "euro"));

function convert(deviseToConvert, deviseResultat) {


deviseResultat = (typeof deviseResultat !== 'undefined') ?  "euro" : "bitcoin";

if (deviseResultat === "bitcoin") {
    return "La valeur en bitcoins est " + deviseToConvert / 10260;
}
 
if (deviseResultat === "euro") {
    return "La valeur en euros est " + deviseToConvert * 10260;
}

}

console.log(convert(50));

console.log(convert(50, "bitcoin"));


var pgcd = function(a, b) {

    var a1 = a;
    var a2 = b;

    while (b!==0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return 'Le PGCD de ' + a1 + ' et ' + a2 + ' est égal à : ' + a;
}

console.log(pgcd(10, 5));  //

console.log(pgcd(96, 36)); //12

console.log(pgcd(1368, 1136)); //8


