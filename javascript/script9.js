/* // Ancienne syntaxe - DOM-0
elementHTML.onclick = function () {
    console.log('Je clique');
}

// Nouvelle syntaxe - DOM-2
elementHTML.addEventListener('click', function () {
    console.log('Je clique');
});

elementHTML.addEventListener('mouseenter', function () {
    console.log('Je survole');
});

elementHTML.addEventListener('keydown', function (event) {
    console.log(event.key); // Affiche la touche enfoncée
}); */

/* 1. Créer une page HTML, ajouter une balise img avec une image. Au survol, sur l'image, changer le src de l'image par une autre image.

2. Ajouter une balise h1, lors du click sur celle-ci, changer la couleur du h1.

3. Ajouter un bouton. Lors du click sur celui-ci, changer le background color du body

4. Créer un formulaire avec un input text et un bouton. Lors du clic sur le bouton, faire une alerte avec la valeur saisie dans le input */


var image = document.createElement('img');

image.setAttribute("src", "https://www.oui.sncf/assets/styles/ratio_2_1_max_width_961/public/media/2018-12/istock-638458962.jpg?h=24b0a2da&itok=YTG8hFC4");

document.body.appendChild(image);

image.addEventListener('mouseenter', function() { image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/2/2a/%C5%BDi%C4%8Da_Monastery%2C_overview._Near_Kraljevo%2C_Serbia.jpg");});

image.addEventListener('mouseleave', function() { image.setAttribute("src", "https://crispol.fr/wp-content/uploads/2018/04/Basilic-Vezelay-1-1920x800.png");});


var titreH1 = document.createElement('h1');

titreH1.textContent = "Un titre h1";

document.body.appendChild(titreH1);

titreH1.addEventListener('click', function() { titreH1.classList.toggle("red")});


var bouton = document.createElement('button');

bouton.textContent = "Clique sur ce bouton pour changer le background color du body";

document.body.appendChild(bouton);

bouton.addEventListener('click', function() { document.body.style.backgroundColor = getRandomColor();}) 

var br = document.createElement('br');

var lineBreak = document.createElement('br');

var lineBreak2 = document.createElement('br');

document.body.appendChild(br);
document.body.appendChild(lineBreak);
document.body.appendChild(lineBreak2);

var form = document.createElement("form");
form.setAttribute('method',"POST");

var input = document.createElement("input"); 
input.setAttribute('type',"text");
//input.setAttribute('name',"subject");

form.appendChild(input);

var breakLi = document.createElement("br");

var breakLi2 = document.createElement("br");

form.appendChild(breakLi);
form.appendChild(breakLi2);


var button = document.createElement("input"); //input element, Submit button
button.setAttribute('type',"submit");
button.setAttribute('value',"Envoyer");

button.addEventListener('click', function() { alert(document.querySelector("input").value)});

form.appendChild(button);

document.body.appendChild(form);


var breakLi3 = document.createElement("br");

var breakLi4 = document.createElement("br");

document.body.appendChild(breakLi3);
document.body.appendChild(breakLi4);

var button2 = document.createElement('button');


button2.textContent = "Click me";

document.body.appendChild(button2);

button2.addEventListener('click', function() { setTimeout(function(){ alert("Hello"); }, 3000); })

var breakLi5 = document.createElement("br");

var breakLi6 = document.createElement("br");

var breakLi7 = document.createElement("br");

document.body.appendChild(breakLi5);
document.body.appendChild(breakLi6);
document.body.appendChild(breakLi7);

var button3 = document.createElement('button');


var textButton = document.createTextNode("Click me");
button3.appendChild(textButton);

document.body.appendChild(button3);

var interval;

button3.addEventListener('click', function() { 
    
    interval = setInterval(function(){ alert("Hello"); }, 1000);
    setTimeout(function() {clearInterval(interval);}, 7000);
 })




function getRandomColor() {
    var letters = '0123456789ABCDEF';
   
    var color = "#";
   
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
   
    return color;
   
   }

