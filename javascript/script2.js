
// Je déclare une variable contenant un nombre

var age = 46;

console.log(age);

// Demander l'âge à l'utilisateur ?

age = prompt("Quel est votre âge?");

console.log(age);

var prenom = "Marko";


console.log(prenom + ' a ' + age + ' ans.');

console.log('l\'école');
console.log("l'école");

console.log('je vais à "l\'école"');

var notes = [12, 18, 17, 'Toto'];

console.log(notes);

console.log(notes[3] + notes[0]);

var moyenne = (notes[0] + notes[1] + notes[2]) / (notes.length - 1);

console.log(moyenne);

var donnee = (notes[0] + notes[1] + notes[2] + notes[3]) / (notes.length - 1);


console.log(donnee); // NaN

var personn = {
    nom: 'Mota',
    prenom: 'Matthieu',
    birthday: [18, 11, 1991]
};

console.log(personn.nom); // Affiche Mota

console.log('Né en ' + personn.birthday[2]);
// Né en 1991

var personna = {
    nom: 'Mota',
    prenom: 'Matthieu',
    birthday: [18, 11, 1991],

    fullName : function() {
        return this.prenom + " " + this.nom;
      }
};

console.log(personna.fullName());







