var boxList = document.getElementsByClassName('box');
var color1 = "#232323";
var color2 = "#535353";
for (var i = 0; i < boxList.length;i++)
{
  boxList[i].addEventListener("click",function() {
    var color = boxList[i].style.backgroundColor;
    if (color == color1) {
      color = color2;
    } else {
      color = color1;
    }
    boxList[i].body.style.backgroundColor = color;

  });
}
