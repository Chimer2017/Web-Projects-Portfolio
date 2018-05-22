/// Check off specific todos by cicking

$("ul").on("click","li", function () {
  $(this).toggleClass("completed");
});

$("sp")



/// Click on x to delete to do
$("ul").on("click","span",function(e) {
  $()
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });

  e.stopPropagation();

});


/// add to do functonlaity


$("input[type='text']").keypress(function (e){
  if (e.which === 13)
  {
    var newItem = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + newItem + "</li>");

  }
});


//// add toggle to forms

$("#plus").on("click", function() {
  $("input").fadeToggle(500);
});
