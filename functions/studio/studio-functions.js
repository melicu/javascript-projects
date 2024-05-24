//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters


function reverseCharacters(str) {
    return str.split("").reverse().join("");
}
let myString = "apple";

// console.log(reverseCharacters(myString));


// Part Two: Reverse Digits

function reverseCharacters(str) {
    if (typeof (str) === "string") {
        return str.split("").reverse().join("");
    } else {
        let reverseString = String(str);
        return Number(reverseString.split("").reverse().join(""));
    }
}
let myString = "radar";

// console.log(reverseCharacters(myString));


// Part Three: Complete Reversal


let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

function reverseArray(array) {
    let reverseArray = [];
    for (index = 0; index < array.length; index++) {
        reverseArray.unshift(reverseCharacters(array[index]));
    }
    return reverseArray;
}
// console.log(reverseArray(arrayTest3));


// Bonus Missions


function funnyPhrase(str) {
    if (str.length <= 3) {
        return str[str.length - 1];
    } else {
        return str.slice(0, 3);
    }
}
let funnyWord = "Functions rock!";
// console.log(`We put the" '${funnyPhrase(funnyWord)}' in '${funnyWord}'.`);


// Area of rectangle equal to length x width


function calculateAreaOfRectangle(length, width) {
    if (isNaN(width)) {
        return length * length;
    } else {
        return length * width;
    }
}

console.log(`The area is ${calculateAreaOfRectangle(2,4)} cm^2.`);
console.log(`The area is ${calculateAreaOfRectangle(14,7)} cm^2.`);
console.log(`The area is ${calculateAreaOfRectangle(20)} cm^2.`);
