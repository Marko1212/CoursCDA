
/*TP Caisse automatique qui donne de la monnaie 

- l'utilisateur saisit un montant en euros (888)

- la machine doit lui donner : 1 x 500, 1 x 200, 1 x 100, 1 x 50, 1 x 20, 1 x 10, 1 x 5, 1 x 2, 1 x 1

- BONUS : l'utilisateur peut choisir de n'avoir que des billets de 50

*/

var montantTotal = parseInt(prompt("Entrez la somme à décomposer"));

console.log(montantTotal);

var coupures = [1, 2, 5, 10, 20, 50, 100, 200, 500];

var tableauInput = [];

for (const coupure of coupures) {
    var input = parseInt(prompt("Voulez vous des coupures de " + coupure + ". Si oui, écrivez : 1, sinon: 0"));
    tableauInput.push(input);
}

console.log(tableauInput);

var tableauCoupures = [];

for (var i = tableauInput.length - 1; i >= 0; i--) {

    if (tableauInput[i]!==0) {
        tableauCoupures.push(coupures[i]);
    }

}

console.log(tableauCoupures);

confirm("vous voulez uniquement la/le(s) coupure(s) suivante(s) : " + tableauCoupures);

var montant = montantTotal;

for (const coupure of tableauCoupures) {

var pCoupure = montant / coupure;
var rCoupure = montant % coupure;

console.log(Math.floor(pCoupure) + " billet(s) de " + coupure + " euro(s), reste " + rCoupure);

montant = rCoupure;
    
}

console.log("Il reste " + montant + " euros.");


var p500 = montant / 500;
var r500 = montant % 500;

console.log(Math.floor(p500) + " billet(s) de 500 euro(s), reste " + r500);

var p200 = r500 / 200;
var r200 = r500 % 200;

console.log(Math.floor(p200) + " billet(s) de 200 euro(s), reste " + r200);

var p100 = r200 / 100;
var r100 = r200 % 100;

console.log(Math.floor(p100) + " billet(s) de 100 euro(s), reste " + r100);

var p50 = r100 / 50;
var r50 = r100 % 50;

console.log(Math.floor(p50) + " billet(s) de 50 euro(s), reste " + r50);

var p20 = r50 / 20;
var r20 = r50 % 20;

console.log(Math.floor(p20) + " billet(s) de 20 euro(s), reste " + r20);


var p10 = r20 / 10;
var r10 = r20 % 10;

console.log(Math.floor(p10) + " billet(s) de 10 euro(s), reste " + r10);

var p5 = r10 / 5;
var r5 = r10 % 5;

console.log(Math.floor(p5) + " billet(s) de 5 euro(s), reste " + r5);

var p2 = r5 / 2;
var r2 = r5 % 2;

console.log(Math.floor(p2) + " billet(s) de 2 euro(s), reste " + r2);

var p1 = r2 / 1;
var r1 = r2 % 1;

console.log(Math.floor(p1) + " billet(s) de 1 euro(s), reste " + r1);




/* 
console.log(montantTotal);

var p500 = montantTotal / 500;
var r500 = montantTotal % 500;

console.log(Math.floor(p500) + " billet(s) de 500 euro(s), reste " + r500);

var p200 = r500 / 200;
var r200 = r500 % 200;

console.log(Math.floor(p200) + " billet(s) de 200 euro(s), reste " + r200);

var p100 = r200 / 100;
var r100 = r200 % 100;

console.log(Math.floor(p100) + " billet(s) de 100 euro(s), reste " + r100);

var p50 = r100 / 50;
var r50 = r100 % 50;

console.log(Math.floor(p50) + " billet(s) de 50 euro(s), reste " + r50);

var p20 = r50 / 20;
var r20 = r50 % 20;

console.log(Math.floor(p20) + " billet(s) de 20 euro(s), reste " + r20);


var p10 = r20 / 10;
var r10 = r20 % 10;

console.log(Math.floor(p10) + " billet(s) de 10 euro(s), reste " + r10);

var p5 = r10 / 5;
var r5 = r10 % 5;

console.log(Math.floor(p5) + " billet(s) de 5 euro(s), reste " + r5);

var p2 = r5 / 2;
var r2 = r5 % 2;

console.log(Math.floor(p2) + " billet(s) de 2 euro(s), reste " + r2);

var p1 = r2 / 1;
var r1 = r2 % 1;

console.log(Math.floor(p1) + " billet(s) de 1 euro(s), reste " + r1);

 */