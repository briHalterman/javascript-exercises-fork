const palindromes = function (str) {
  const string = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let gnirts = string.split("").reverse().join("");

  return string === gnirts;
};

// Do not edit below this line
module.exports = palindromes;
