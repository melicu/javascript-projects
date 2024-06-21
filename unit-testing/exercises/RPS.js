function whoWon(player1, player2) {
  let possibleSelections = ['rock', 'paper', 'scissors'];

  if (player1 === player2) {
    return 'TIE!';
  }

  if (player1 === 'rock' && player2 === 'paper') {
    return 'Player 2 wins!';
  }

  if (player1 === 'paper' && player2 === 'scissors') {
    return 'Player 2 wins!';
  }

  if (player1 === 'scissors' && player2 === 'rock') {
    return 'Player 2 wins!';
  }

  if ((!possibleSelections.includes(player1)) || (!possibleSelections.includes(player2))) {
    return 'Not a valid selection!';
  }

  return 'Player 1 wins!';
}

module.exports = whoWon;