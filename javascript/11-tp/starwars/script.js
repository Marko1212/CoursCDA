
$(function () {

  var likeCounter = 0;

  $(".chat .btn-primary").click(function () {
    $(this).toggleClass("btn-danger");
    let nomDuBouton = $(this).val();
    $(this).val(nomDuBouton === "Follow" ? "Unfollow" : "Follow");
  });

  $(".fa-heart").click(function () {
    $(this).toggleClass("fas");
    $(".numberOfLikes strong").text(++likeCounter);
  });

  $(".fa-comment").click(function () {
    $(this).toggleClass("fas");
    var display = $(".comment-field").css('display');
    if (display === "none") {
      $(".comment-field").show("slow");
    }
    if (display === 'block') {
      $(".comment-field").hide("slow");
      $('#comment').val('');
    }

  });

  $('button').click(function () {
    var contenu = $('#comment').val();
    var prénom = contenu.slice(0, contenu.indexOf(" "));
    var resteDuContenu = contenu.substring(contenu.indexOf(" "), contenu.length);
    console.log(prénom);
    console.log(resteDuContenu);

    var para = $('<p></p>');
    para.css({
      "padding": "0 15px"});
  
  var pseudo = $('<span></span>');
  pseudo.css("font-weight", "900");
 
  pseudo.text(prénom);

  var message = $('<span></span>');
  message.text(resteDuContenu);

  para.append(pseudo);
  para.append(message);
  $('.messages').append(para);

  $('#comment').val('');
})

});