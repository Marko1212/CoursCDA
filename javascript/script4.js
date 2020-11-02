/* Les boucles
On peut répéter une ou plusieurs lignes de code grâce à for et while. */

for (var i = 0; i < 5; i++) {
    console.log(i);
}

personn = ['Théo', 'Jean', 'Eric'];
for (var i = 0; i < personn.length; i++) {
    console.log(personn[i]);
}

for (person of personn) {
    console.log(person);
}

var i = 0;
while (i < 5) {
    console.log(i++);
}

personn = {
    name: 'Matthieu',
    age: 26
}
for (key in personn) {
    console.log(personn[key]);
}

/* Exercices
1. Grâce à la boucle for, écrire les nombres de 1 à 10.
2. Grâce à la boucle for, écrire les nombres de 10 à 2.
3. Grâce à la boucle for, afficher les nombres de 1 à 100 mais uniquement les nombres pairs.
4. Grâce au while, demandez à l'utilisateur s'il veut continuer sur le site, il doit répondre "oui", "non", "o" ou "n". Tant qu'il ne répond pas une de ces valeurs, lui reposer la question. */

for (var i = 1; i < 11; i++) {
    console.log(i);
}

for (var j = 10; j>=2; j--) {
    console.log(j);
}

for (var i = 1; i <=100 ; i++) {
    if (i%2 === 0) {
    console.log(i);
}
}

var réponse = prompt("Veux-tu continuer sur le site?");

while (réponse !== "oui" && réponse !== "non" && réponse !== "o" && réponse !== "n") {
    réponse = prompt("Veux-tu continuer sur le site?");
}

console.log(réponse);

// "la yoda condition" => au lieu d'écrire : answer === 'oui', on écrit la condition à l'inverse : 'oui' === answer (ça permet d'éviter des erreurs)
if ('oui' === answer || 'o' === answer) {
    console.log('On entre sur le site');
} else {
    console.log('On sort du site');
}





