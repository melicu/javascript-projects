let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",").sort();
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinetSelection = input.questionInt("Select a cabinet from the cargo hold (0 - 3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`Cabinet ${cabinetSelection} includes ${cargoHold[cabinetSelection]}.`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let itemSelection = input.question("Select an item from the cabinet: ");
if (cargoHold[cabinetSelection].includes(itemSelection)) {
    console.log(`Cabinet ${cabinetSelection} DOES include ${itemSelection}.`);
} else {
    console.log(`Cabinet ${cabinetSelection} DOES NOT include ${itemSelection}.`);
}