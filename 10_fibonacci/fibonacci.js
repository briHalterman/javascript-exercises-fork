// first number gets 1
// second number gets 1 + 0
// third number gets second number + first number
// fourth number gets third number + second number
// ...
// nth number get (n-1)th + (n-2)th

const fibonacci = function (n) {
  n = parseInt(n);
  const index = n - 1;
  if (n < 0) {
    return "OOPS";
    // } else if (typeof n !== "number") {
    //   return "DOES "
  } else if (n === 0) {
    return 0;
  } else if (index === 0 || index === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;

// Solve the base cases (0, 1, 2)
// Write in plain English what the rest of it should do
// Write exactly that thing in code
