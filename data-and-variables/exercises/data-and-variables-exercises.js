// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let spaceShuttle = 'Determination';
let shuttleSpeedMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
const milesPerKilometer = 0.621;

console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceMarsKm);
console.log(typeof distanceMoonKm);
console.log(typeof milesPerKilometer);

let milesToMars = distanceMarsKm * milesPerKilometer;

console.log(milesToMars)

let hoursToMars = milesToMars / shuttleSpeedMph;

console.log(hoursToMars)

let daysToMars = hoursToMars / 24;

console.log(daysToMars)

console.log(spaceShuttle + " will take " + daysToMars + " days to reach Mars.");

let milesToMoon = distanceMoonKm * milesPerKilometer;

let hoursToMoon = milesToMoon / shuttleSpeedMph;

let daysToMoon = hoursToMoon / 24;

console.log(spaceShuttle + " will take " + daysToMoon + " days to reach the Moon.");