const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// let strPigLatin = str.slice(3,10) + str.slice(0,3);
// console.log(strPigLatin);

//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log(`What was once ${str} is now ${strPigLatin}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let lettersToMove = input.questionInt("How many letters do you want to move? ")
strPigLatin = str.slice(lettersToMove,10) + str.slice(0,lettersToMove);
// console.log(`What was once ${str} is now ${strPigLatin}.`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (lettersToMove > 10) {
    strPigLatin = str.slice(3,10) + str.slice(0,3);
    console.log(`${strPigLatin}! There are less than ${lettersToMove} letters in ${str}.`);
} else {
    console.log(`What was once ${str} is now ${strPigLatin}.`);
}