const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldestPerson = people[0]; 
    let maxAge = 0;  
  
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      let age;
  
      if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
      } else {
        age = currentYear - person.yearOfBirth;
      }
      if (age > maxAge) {
        maxAge = age;
        oldestPerson = person;  
      }
    }
  
    return oldestPerson; 
  };

// Do not edit below this line
module.exports = findTheOldest;
