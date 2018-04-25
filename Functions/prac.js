function factorial(num) {
  var fact = 1;
  for (var i = num; i > 0; i--)
  {
    fact = fact*i;
  }
  console.log(fact);
}


function ktos(str) {
  var newStr;
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] == '-')
    {
      newStr += "_";
    }
    else
    {
      newStr += str[i];
    }
  }
  console.log(newStr);

}
