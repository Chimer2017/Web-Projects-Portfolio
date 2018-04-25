alert("connected");

var b = document.querySelector("button");
var body = document.querySelector("body");

b.addEventListener("click", function() {
  if (body.style.background == "pink")
  {
      body.style.background = "white";
  }
  else
  {
    body.style.background = "pink";
  }
});
