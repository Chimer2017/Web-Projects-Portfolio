var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var r = document.querySelector("#r");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var scoreButton = document.querySelector("input");
var pointsNeeded = document.querySelector("#pointsNeeded");
var count1 = 0;
var count2 = 0;
var score = document.querySelector("h1");
var gameOver = false;
var winScore = 5;



p1Button.addEventListener("click", function(){
  if(!gameOver)
  {
    count1++;
    if (count1 === winScore)
    {
      s1.classList.add("win");
      gameOver = true;


    }
    s1.textContent = count1;



  }

});
p2Button.addEventListener("click", function(){
  if(!gameOver)
  {
    count2++;
    if (count2 === winScore)
    {
      s2.classList.add("win");
      gameOver = true;

    }

    s2.textContent = count2;


  }

});
r.addEventListener("click",function(){
    count1 = 0;
    count2 = 0;
    s1.textContent = count1;
    s2.textContent = count2;
    gameOver = false;
    s1.classList.remove("win");
    s2.classList.remove("win");


});

scoreButton.addEventListener("change",function() {
  pointsNeeded.textContent = scoreButton.value;
  winScore = Number(scoreButton.value);


});
