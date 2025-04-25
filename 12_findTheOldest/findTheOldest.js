const findTheOldest = function (people) {
  let age = 0;
  const calculateAge = (person) => {
    const recentYear = person.yearOfDeath || new Date().getFullYear();
    const age = recentYear - person.yearOfBirth;
    return age;
  };

  const sorted = people.toSorted(
    (person, nextPerson) =>
      calculateAge(nextPerson) - calculateAge(person)
  );
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
