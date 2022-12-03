// Write a program to find whether a given year is a leap year or not.
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));

//Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  var message = cTemp + "\xB0C is " + cToFahr + " \xB0F.";
  console.log(message);
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + "\xB0F is " + fToCel + "\xB0C.";
  console.log(message);
}
cToF(60);
fToC(45);

// Write a program to find the factorial of a number.
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 5;
answer = factorial(n);
console.log("The factorial of " + n + " is " + answer);
