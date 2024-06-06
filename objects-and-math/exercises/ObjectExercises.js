let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () { return Math.floor(Math.random() * 11) }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 8,
   move: function () { return Math.floor(Math.random() * 11) }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 4,
   move: function () { return Math.floor(Math.random() * 11) }
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function () { return Math.floor(Math.random() * 11) }
};
let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 9,
   move: function () { return Math.floor(Math.random() * 11) }
};

let spaceAnimals = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

function crewReport(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

console.log(crewReport(superChimpOne));
console.log(crewReport(superChimpTwo));
console.log(crewReport(salamander));
console.log(crewReport(beagle));
console.log(crewReport(tardigrade));

function fitnessTest(arr) {
   let raceResults = [];
   for (let index = 0; index < arr.length; index++) {
      let distance = 0;
      let turns = 0;
      while (distance < 20) {
         distance += arr[index].move();
         turns++;
      }
      raceResults.push(`${arr[index].name} took ${turns} turns to take 20 steps.`);
   }
   return raceResults;
}

console.log(fitnessTest(spaceAnimals));

