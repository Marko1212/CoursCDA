/* Exercices

Faire un bouton avec une version "On" et "Off". La version "On" est noire avec un fond gris clair comportant une ombre portée, et la version "Off" est grise avec un fond gris foncé sans ombre portée. Au clic, on passe à "On" si c'est "Off" et inversement. 

Faire un menu déroulant: au clic sur un bouton, un bloc de texte se déplie.Et quand on reclique dessus, il se referme.Pour l'animer, il faut utiliser la fonction animate() ou slideToggle().

Créer un texte qui s'agrandit au clic. Si on reclique dessus, il reprend sa taille d'origine. Pour pouvoir faire cela, il va falloir mettre la taille de police initiale dans une variable.

Créér 5 boutons et un rectangle. Chaque bouton provoque une action sur le rectangle.

Bouton 1 : augmente la hauteur de 10px, si il dépasse 100px, il remet la hauteur à 10px
(fonction height())
Bouton 2 : mettre le rectangle en vert
Bouton 3 : remettre les couleurs initiales
Bouton 4 : faire disparaître le rectangle
Bouton 5 : faire réaparaître le rectangle
 
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

    $("#button-1").on('click', function () {
        var height = parseInt($(".rectangle").css('height'));
        console.log(height);
        if (height < 100) {
            $(".rectangle").height("+=10");
            console.log($(".rectangle").css('height'));
        } else {
            $(".rectangle").css(
                'height', "10");
        }

    });

    $("#button-2").on('click', function () {
        $(".rectangle").css("backgroundColor", "green");
    });

    $("#button-3").on('click', function () {
        $(".rectangle").css("backgroundColor", "red");
    });

    $("#button-4").on('click', function () {
        $(".rectangle").hide();
    });

    $("#button-5").on('click', function () {
        $(".rectangle").show();
    });


});
