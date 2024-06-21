const whoWon = require('../RPS.js');

describe("RPS", function () {

    test("should return 'TIE!' if P1 = P2", function () {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual("TIE!");
    });

    test("should return 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual("Player 2 wins!");
    });

    test("should return 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual("Player 2 wins!");

    });

    test("should return 'Player 2 wins!' if P1 = scissors & P2 = rock", function () {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual("Player 2 wins!");

    });

    test("should return 'Not a valid selection!' if P1 or P2 enters something other than rock, paper, or scissors", function () {
        let output = whoWon('bagel', 'lox');
        expect(output).toEqual("Not a valid selection!");

    });

});