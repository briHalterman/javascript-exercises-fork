const removeFromArray = function (array, elementToRemove) {
  newArray = [];
  for (element of array) {
    if (element !== elementToRemove) {
      newArray.push(element);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
