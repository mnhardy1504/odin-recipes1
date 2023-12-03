function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    ('executing playRound' + playerSelection + computerSelection);
  var reply = ""
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      reply = 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      reply = 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      reply = 'You Win! Scissors beats Paper';
    } else if (playerSelection === computerSelection) {
      reply = "It's a tie!";
    } else {
      reply =`You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
      outputElement.textContent = reply;
      log(reply);
      return reply;
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = ""
  
    for (let round = 1; round <= 5; round++) {
      const playerChoice = prompt('Round ' + round + ': Enter your choice (Rock, Paper, or Sc issors):');
      const computerChoice = getComputerChoice();
  
      const roundResult = playRound(playerChoice, computerChoice);
      console.log(roundResult);
  
      if (roundResult.includes('You Win!')) {
        playerScore++;
    } else if (roundResult.includes('You Lose!')) {
        computerScore++;
    }
    
    // Update the running score on each round
    updatePlayerScore(playerScore);
    updateComputerScore(computerScore);
    
    // Announce a winner when one player reaches 5 points
    if (playerScore === 5) {
        result = 'Congratulations! You win the game!';
        updateMessage(result);
        break; // End the game
    } else if (computerScore === 5) {
        result = 'Sorry, you lose the game.';
        updateMessage(result);
        break; // End the game
    }
}
}

function updateMessage(message) {
const gameMessages = document.getElementById("result");
gameMessages.textContent = message;
}

function updatePlayerScore(score) {
const playerScoreElement = document.getElementById('playerscore');
playerScoreElement.textContent = 'Player Score: ' + score;
}

function updateComputerScore(score) {
const computerScoreElement = document.getElementById('computerscore');
computerScoreElement.textContent = 'Computer Score: ' + score;
}

function log(text) {
const logsDiv = document.getElementById("logs");
const paragraph = document.createElement("p");
paragraph.textContent = text;
logsDiv.appendChild(paragraph);
}