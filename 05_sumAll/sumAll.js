const sumAll = function (num1, num2) {
  let sum = 0;
  let firstAddend;
  let lastAddend;

  if (num1 < num2) {
    firstAddend = num1;
    lastAddend = num2;
  } else {
    firstAddend = num2;
    lastAddend = num1;
  }

  for (let i = firstAddend; i <= lastAddend; i++) {
    sum = sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
