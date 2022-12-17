// Function which generates random numbers from 0 to 2
const randomNumber = Math.floor(Math.random() * 3);

// Prompt that takes user input which is used in playRound for user input
let playerSelection = prompt('Rock, Paper, Scissors').toLowerCase();


// This function return either 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {

    if (randomNumber === 1) {
        return 'rock';
    }   else if (randomNumber === 0) {
        return 'paper';
    }   else {
        return 'scissors';
    }
}

// Function that takes random value from another function and is used in playRound function for computer input
function computerSelection() { 
    return getComputerChoice();
}

// This function takes two parameters, plays a round and returns a string with a message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a draw";
    }
  
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "You lose! Paper beats Rock!";
      } else {
        return "You win! Rock beats Scissors!";
      }
    }
  
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
      } else {
        return "You Win! Paper beats Rock!";
      }
    }
  
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
      } else {
        return "You Win! Scissors beats Paper!";
      }
    }
  }

  for (let i = 0; i < 5; i++) {
      console.log(playRound(playerSelection, computerSelection));

    }