function groupAdultsByAgeRange(persons) {
  const adults = persons.filter(person => person.age >= 18);
  // console.log(adults);
  const range = adults.reduce((acc, currentPerson) => {
    if (currentPerson.age <= 20) {
      // console.log(currentPerson);
      const key = "20 and younger";
      if (!acc[key]) {
        // console.log(acc[key]);
        acc[key] = [];
      }
      acc[key].push(currentPerson);
      // console.log(acc[key]);
    }

    if (currentPerson.age >= 21 && currentPerson.age <= 30) {
      const key = "21-30";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(currentPerson);
    }

    if (currentPerson.age >= 31 && currentPerson.age <= 40) {
      const key = "31-40";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(currentPerson);
    }

    if (currentPerson.age >= 41 && currentPerson.age <= 50) {
      const key = "41-50";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(currentPerson);
    }

    if (currentPerson.age >= 51) {
      const key = "51 and older";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(currentPerson);
    }

    // console.log(acc);
    return acc;
  }, {});
  // console.log(range);
  return range;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
