

var stat = false;
var x;

while (!stat)
{
  x = prompt("Guess a number");

  if (x == 11)
  {
    alert("You Got It!!!!");
    stat = true;
  }

  if (x < 11)
  {
    alert("Your guess it too low, try again");
  }
  if (x > 11)
  {
    alert("Your guess it too high, try again");
  }

}
