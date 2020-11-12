
$(function () {

    var selectedGifts = [];

    var $listSelector = $(".selected-gifts")

    $("ul.cadeaux li").on("click", function (event) {
        $(".message").hide();
        $(this).toggleClass("barrer");

        var $this = $(this);

        var elementToAppend = "<li>" + $(this).text() + "</li>";

        if ($this.is(".barrer")) {

            if (selectedGifts.length < 5) {
                selectedGifts.push($this.text());
                $listSelector.append(elementToAppend);
            }

            else {
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

        if (selectedGifts.length === 5) {
            //alert("Attends ton anniversaire");
            $(".message").show();
        }
        $(".andjelija").text("Andjelija a choisi " + selectedGifts.length + " cadeau(x). Il en reste " + (5 - selectedGifts.length) + ".");
    });


});