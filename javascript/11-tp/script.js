/* Exercices

# TP La liste de Fiorella

Nous allons créer une liste de Noël pour Fiorella. On aura d'abord une liste de cadeaux (en HTML) :

- Sophie la girafe
- Trotteur
- Livre
- Petit ours brun
- Doudou
- Léon l'ourson
- Piano
- Cubes et sphères

1. Fiorella doit pouvoir choisir (click) uniquement 5 cadeaux (pas 10). (Tableau ?)
2. Quand Fiorella aura choisi un cadeau, cet élément de la liste sera barré. (Une classe CSS ?)
3. Fiorella peut changer d'avis et "déselectionner" un cadeau. (Tableau pop ou splice ?)
4. Dès qu'elle aura choisi 5 cadeaux, on affichera un message "Attends ton anniversaire" sur la page.

BONUS. Afficher la liste de Fiorella au fur et à mesure dans une 2ème liste (Aide du formateur)
BONUS. Afficher une phrase "Fiorella a choisi 2 cadeaux. Il en reste 3."
 
*/

$(function () {

    var selectedGifts = [];

    var $listSelector = $(".selected-gifts")

    $("ul.cadeaux li").on("click", function (event) {
        $(".messageCache").hide();
        $(this).toggleClass("barrer");

        var $this = $(this);

        var elementToAppend = "<li>" + $(this).text() + "</li>";

        if ($this.is(".barrer")) {

            if (selectedGifts.length < 5) {
                selectedGifts.push($this.text());
                $listSelector.append(elementToAppend);
            }
            else {
                //alert("Attends ton anniversaire");
                $(".messageCache").show();
                $(this).removeClass("barrer");
            }
        }
        else {
            selectedGifts = selectedGifts.filter(x => x != $this.text());
            $('ul.selected-gifts li:contains(' + $this.text() + ')').remove();

            // Solution alternative :
  /*           $listSelector.empty();
            for (var cadeau of selectedGifts) {
                var element = "<li>" + cadeau + "</li>";
                $listSelector.append(element);
            } */
        }

        console.log(selectedGifts);
        $(".andjelija").text("Andjelija a choisi " + selectedGifts.length + " cadeau(x). Il en reste " + (5 - selectedGifts.length) + ".");
    });


});