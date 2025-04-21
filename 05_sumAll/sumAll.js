const sumAll = function (firstAddend, lastAddend) {
  let sum = 0;

  for (let i = firstAddend; i <= lastAddend; i++) {
    sum = sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
