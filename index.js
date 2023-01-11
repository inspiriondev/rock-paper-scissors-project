
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}








let computerSelection = getComputerChoice().toLowerCase();

function getComputerChoice() {
    if (getRandomInt() === 1) {
      return 'rock';
    } else if (getRandomInt() == 2) {
      return 'paper';
    } else {
      return 'scissors';
    }
} 
// console.log(getComputerChoice()); 


function getPlayerChoice(playerSelection) {
   
  playerSelection = prompt('Start a game by choosing: Rock, Paper or Scissors').toLowerCase();

    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
      alert('Choose one of three given signs!');
    } else {
      return(playerSelection);
    }
};

// console.log(getPlayerChoice());

function oneRound(playerSelection, computerSelection) {
  
    if (playerSelection == 'rock' && computerSelection == 'paper') {
      return 'You lose! Paper beats rock.';
    }
}




