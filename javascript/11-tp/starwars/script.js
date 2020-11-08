
$(function () {

$( ".btn-primary" ).click(function() {
  $( this ).toggleClass( "btn-danger" );
  let nomDuBouton = $( this ).val();
  $( this ).val(nomDuBouton === "Follow" ? "Unfollow" : "Follow" );
});
    

});