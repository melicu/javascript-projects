// Code your orbitCircumference function here:

function calculateOrbitCircumference(orbitRadius) {
  return Math.round(2 * Math.PI * orbitRadius);
}

// Code your missionDuration function here:

let orbitRadius = 2000;
let orbitalSpeed = 28000;

function missionDuration(numOrbits, orbitRadius, orbitalSpeed) {
  return Math.round((numOrbits * ((calculateOrbitCircumference(orbitRadius)) / orbitalSpeed)) * 100) / 100;
}

console.log(`The mission will travel ${calculateOrbitCircumference(orbitRadius) * 5} km around the planet, and it will take ${missionDuration(5, orbitRadius, orbitalSpeed)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, orbitRadius, orbitalSpeed) {
  let time = missionDuration(3, 1500, 15000);
  let oxygenUsed = Math.round((candidate.o2Used(time)) * 1000) / 1000;

  Math.round(candidate.o2Used(missionDuration(3, orbitRadius, orbitalSpeed)) * 1000) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${time} hours and require ${oxygenUsed} kg of oxygen.`
}



// Candidate data & crew array.
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateA, candidateC, candidateE];


console.log(oxygenExpended(selectRandomEntry(crew)));