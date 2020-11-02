// Récupère le body
var body = document.body;
console.log(body);

// Récupère l'élément qui a l'id #header
var header = document.getElementById('header');
console.log(header);

// Récupère les éléments qui ont la class .container (tableau)
var classContainer = document.getElementsByClassName('container');
console.log(classContainer);

// Récupère toutes les div
var divElements = document.getElementsByTagName('div');
console.log(divElements);

// <div id="div" class="Classe">Contenu</div>

var div = document.getElementById('div'); // Je récupére la div #div

console.log(div.className); // Affiche la classe de la div
console.log(div.id); // Affiche l'id de la div
console.log(div.textContent); // Affiche le contenu de la div
div.textContent = 'Nouveau contenu'; // Change le contenu de la div

console.log(div.textContent);

// Créer un élément HTML en JS
var p = document.createElement('p');
p.textContent = 'Super p en javascript';
document.body.appendChild(p); // J'ajoute le p dans body

/* Exercices
1. Créer une variable title où on va stocker le h1 qui a l'id #title
Modifier le contenu du h1 par "Hey, j'ai changé mon titre en JavaScript"
2. Créer une balise p en JavaScript, ajouter dans son contenu "Un super paragraphe en JS". Ajouter la balise p dans la première div qui a la classe .container */

var title = document.getElementById("title");
title.textContent = "Hey, j'ai changé mon titre en JavaScript";

var par = document.createElement('p');
par.textContent = "Un super paragraphe en JS";

var firstDivContainer = document.getElementsByClassName("container")[0];

firstDivContainer.appendChild(par);

//firstDivContainer.prepend(par); là, c'est au début de la div qu'est rajouté le contenu du paragraphe par. Avec appendChild, c'est en fin de la div qu'est rajouté le contenu du paragraphe par

