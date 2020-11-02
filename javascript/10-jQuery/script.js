/* Exercices

Faire un bouton avec une version "On" et "Off". La version "On" est noire avec un fond gris clair comportant une ombre portée, et la version "Off" est grise avec un fond gris foncé sans ombre portée. Au clic, on passe à "On" si c'est "Off" et inversement. 

Faire un menu déroulant: au clic sur un bouton, un bloc de texte se déplie.Et quand on reclique dessus, il se referme.Pour l'animer, il faut utiliser la fonction animate() ou slideToggle().

Créer un texte qui s'agrandit au clic. Si on reclique dessus, il reprend sa taille d'origine. Pour pouvoir faire cela, il va falloir mettre la taille de police initiale dans une variable.

 
*/

$(function () {
    $("#button1").on('click', function () {
        $(this).toggleClass("off");
        var text = $('#button1').text();
        $(this).text(
            text === "On" ? "Off" : "On");


    });

    $("#button2").on('click', function () {
        $("#text").slideToggle("slow");
    });

    $("#paragraphe").on('click', function () {

        var tailleDuTexte = $("#paragraphe").css('font-size');
        console.log(tailleDuTexte);
        $(this).css(
            'font-size', tailleDuTexte === "16px" ? "50px" : "16px");
    });



});
