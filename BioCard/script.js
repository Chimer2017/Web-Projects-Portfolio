var card = document.getElementById('card');
var color1 = "#232323";
var color2 = "#525252";
var img = $("img");
var opacity = 1.000;

img.click(function() {
  alert("Ive been clicked");
  opacity -= 0.1000;
  img.css('opacity', opacity);
});


card.addEventListener("click", function() {
  card.style.backgroundColor = color1;
});
