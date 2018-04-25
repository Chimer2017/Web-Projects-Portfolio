var colorList = generateRandColor(6);
var sqrs = document.querySelectorAll(".sqr");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < sqrs.length; i++)
{

  sqrs[i].style.backgroundColor = colorList[i];
  sqrs[i].addEventListener("click",function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor)
      {
        message.textContent = "Correct";
        changeColor(pickedColor);
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
