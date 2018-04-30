var numSrq = 6;
var colorList = generateRandColor(numSrq);
var sqrs = document.querySelectorAll(".sqr");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numSrq = 3;
  colorList = generateRandColor(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < sqrs.length; i++)
  {
    if (colorList[i]) {
      sqrs[i].style.backgroundColor = colorList[i];
    } else {
      sqrs[i].style.display = "none";

    }
  }
});

hard.addEventListener("click", function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  location.reload();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < sqrs.length; i++){

  sqrs[i].style.backgroundColor = colorList[i];
  sqrs[i].addEventListener("click",function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor)
      {
        message.textContent = "Correct";
        changeColor(pickedColor);
        h1.style.backgroundColor = pickedColor;
        reset.textContent = "Play Again?"
      }
      else
      {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
  });
}
function changeColor(color) {
  for (var i = 0; i < sqrs.length;i++)
  {
    sqrs[i].style.backgroundColor = pickedColor;
  }

}
function pickColor() {
  var randIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randIndex];
}
function randColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  console.log("rgd(" + r + ", " + g + ", " + b + ")");
  return ("rgb(" + r + ", " + g + ", " + b + ")");

}
function generateRandColor(num) {
  var arr = [];
  for (var i = 0; i< num; i++)
  {
    arr.push(randColor());
  }
  return arr;

}
reset.addEventListener("click", function(){
  // colorList = generateRandColor(6);
  // pickedColor = pickColor();
  // colorDisplay.textContent = pickedColor;
  // for (var i = 0; i < colorList.length; i++)
  // {
  //   sqrs[i].style.backgroundColor = colorList[i];
  // }
  location.reload();

});
