/* Exercices

Faire un bouton avec une version "On" et "Off". La version "On" est noire avec un fond gris clair comportant une ombre portée, et la version "Off" est grise avec un fond gris foncé sans ombre portée. Au clic, on passe à "On" si c'est "Off" et inversement. */

$(function () {
    $("#button1").on('click', function () {
        $("#button1").toggleClass("off");
        var text = $('#button1').text();
        $('#button1').text(
            text == "On" ? "Off" : "On");
    });
});

/* Faire un menu déroulant: au clic sur un bouton, un bloc de texte se déplie.Et quand on reclique dessus, il se referme.Pour l'animer, il faut utiliser la fonction animate() ou slideToggle(). */

