

function isPrime(num) {
  if (num == 1) {
    return false;
  }
  var count = 0;
  for (var i = 1; i <= num;i++)
  {
    if (num%2 == 0) {
      count += 1;
    }
  }
  if (count > 2) {
    return false;
  }
  return true;

}

console.log(isPrime(7));
