console.log(document.getElementById('headerone'))

var header = document.getElementById('headerone')
headerone.style.backgroundColor='yellow'




function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const outputElement = document.getElementById('reply');
  let reply = "";

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
      reply = 'You Win! Rock beats Scissors';
      playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      reply = 'You Win! Paper beats Rock';
      playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      reply = 'You Win! Scissors beats Paper';
      playerScore++;
  } else if (playerSelection === computerSelection) {
      reply = "It's a tie!";
  } else {
      reply = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
  }

  outputElement.textContent = reply;
  log(reply);

  // Update the running score
  updatePlayerScore(playerScore);
  updateComputerScore(computerScore);

  // Check for a winner after each round
  if (playerScore === 5) {
      updateMessage('Congratulations! You won the game!');
      playerScore = 0;
      computerScore = 0;
  } else if (computerScore === 5) {
      updateMessage('Sorry, you lose the game.');
      playerScore = 0;
      computerScore = 0;
  }
}

function updateMessage(message) {
  const gameMessages = document.getElementById('result');
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

// if (playerScore > computerScore) {
//   log('Congratulations! You win the game!');
// } else if (playerScore < computerScore) {
//   log('Sorry, you lose the game.');
// } else {
//   log("It's a tie game.");
// }

function log(text) {
  const logsDiv = document.getElementById('logs');
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  logsDiv.appendChild(paragraph);
}