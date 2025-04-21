const reverseString = function (string) {
  let array = [...string];
  let reversedArray = array.reverse();
  let reversedString = reversedArray.join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
