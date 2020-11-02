// <div id="div" class="Classe">Contenu</div>

// On prend la première div de celles qui ont la classe .Classe
var div = document.getElementsByClassName('red')[0];

div.style.fontSize = '18px'; // Je modifier la font-size à 18px
div.style.backgroundColor = '#000'; // Je change le fond en noir

console.log(div.style.backgroundColor); // Affiche rgb(0, 0, 0)

var body = document.body;

body.style.backgroundColor = '#d5b9b9';

var paragraph = document.getElementsByTagName('p');

for (const para of paragraph) {
    para.style.fontSize = '21px';
}

var anchor = document.createElement('a');

anchor.textContent = "Mon lien vers Mozilla";

anchor.setAttribute("href", "https://developer.mozilla.org");

document.body.appendChild(anchor);

anchor.style.color = "#fff";

anchor.style.textDecoration = "none";

function getRandomColor() {
 var letters = '0123456789ABCDEF';

 var color = "#";

 for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random()*letters.length)];
 }

 return color;

}

anchor.style.color = getRandomColor();

anchor.style.backgroundColor = getRandomColor();

/* Exercices
1. Changer la couleur de fond de body avec #d5b9b9 en JavaScript
2. Augmenter la taille des paragraphes à 21px
3. Créer une balise a, ajouter un lien via l'attribut href (en js) vers https://developer.mozilla.org/
4. Changer la couleur du a en couleur #ffffff et non souligné(en js)
BONUS: créer une fonction qui génère un code couleur aléatoire.
 */