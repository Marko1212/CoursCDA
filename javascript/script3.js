

// Demander l'âge à l'utilisateur ?

var age = prompt("Quel est votre âge?");



/* Si l'utilisateur a moins de 13 ans : Afficher "Interdit" */

if (age < 13) {
    console.log('Interdit, tu es trop jeune!');
}

/* Si l'utilisateur a entre 13 et 17 ans : Afficher "Bientôt" */

if (age >= 13 && age <= 17) {
    alert("Tu es bientôt majeur, dans " + (18 - age) + " ans!");
}

/* Si l'utilisateur a 18 ans ou plus : Afficher "Autoriser" */

if (age >= 18) {
    console.log("Tu es majeur, autorisé!");
}


/* 2. Imaginons un frigo (qui pourrait être un objet JS). Mon frigo contient 3 tomates, 4 oeufs, 1 pain, 2 jambons, 1 poulet et 1 fromage.
Ce soir, je veux manger quelque chose. Je peux faire 1 sandwich
SI j'ai un 1 pain ET 1 jambon ET une tomate OU un fromage. Attention, dans cette condition il faut absolument un pain ET un jambon et soit une tomate OU un fromage.
SINON, SI j'ai un poulet, je peux manger le poulet.
SINON,
    Si j'ai 3 oeufs, je peux manger une omelette
    SINON je mange des chips. */

var frigo = {
    tomate: 3,
    oeuf: 4,
    pain: 1,
    jambon: 2,
    poulet: 1,
    fromage: 1
};


if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomate >= 1 || frigo.fromage >= 1)) {
    console.log("sandwich OK!")
} else if (frigo.poulet >= 1) {
    console.log("poulet OK!");
}
else if (frigo.oeuf >= 3) {
    console.log("omelette OK!");
} else {
    console.log("chips OK!");
}


/* BONUS (boucles) : Ecrire l'algorithme du PGCD en JavaScript.
Procéder par étape, on a d'abord 2 nombres (Soit 2 variables).
On peut les définir directement dans le JS ou alors les demander à l'utilisateur grâce à prompt.
 */

var a = parseInt(prompt("Entrer un nombre entier positif ou nul"));
console.log(a);

 var b = parseInt(prompt("Entrer un autre nombre entier positif ou nul"));
 console.log(b);


 while (b!=0) {
     if (a > b) {
         a = a - b;
     } else {
         b = b - a;
     }
 }

alert("Le PGCD est égal à " + a);




