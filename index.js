

const NUMBER_OF_ROUNDS = 5;

let winner;

let playerWon = function () {
  if (playerWon === true) {
    return winner = 'You are a winner!';
  }
}

let computerWon = function () {
  if (computerWon === true) {
    return winner = 'Computer is a winner!';
  }
}

let tieGame = function () {
  if (tieGame === true) {
    return winner = 'No winner! It\'s a tie';
  } 
}


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

const getComputerChoice = function() {

  if (getRandomInt() === 1) {
    return 'rock';
  } else if (getRandomInt() === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// console.log(getComputerChoice()); 

const getPlayerChoice = function() {
  return prompt('What is your choice: Rock, Paper or Scissors?').toLowerCase();

};

// console.log(getPlayerChoice());

let singleRound = function (playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return computerWon = 'You lose! Paper beats rock.';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return playerWon = 'You win! Paper beats rock.';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return computerWon = 'You lose! Scissors beats paper.';
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return playerWon = 'You win! Scissors beats paper.';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return computerWon = 'You lose! Rock beats Scissors.';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return playerWon = 'You win! Rock beats Scissors.';
  }
  else {
    return tieGame = 'It\'s a tie';
  }
};
// console.log(singleRound());

const game = function playRound() {
  for (let i = 0; i <= NUMBER_OF_ROUNDS; i++) {
    if (i < NUMBER_OF_ROUNDS) {
      console.log(singleRound());
    }
  }
    if (playerWon > computerWon) {
      console.log(winner);
    } else if (playerWon < computerWon) {
      console.log(winner);
    } else {
      console.log(winner);
    }
};

console.log(game());

