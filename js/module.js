// Завдання про квадрат

while (true) {
  var a=prompt('Enter side a');
  var b=prompt('Enter side b');
  var s=prompt('Enter side of square');
  if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(s))) {
    alert('Values must be numbers!');
    continue;
  }
  else{
    alert('Number of square: ' + String(squareIn(Number(a), Number(b), Number(s))));
    break;
  }
}

function squareIn(side_a, side_b, side_s) {
  square_of_ab=a*b;
  square_of_s=s**2;
  result=Math.floor(a/s)*Math.floor(b/s);
  return result;
}
