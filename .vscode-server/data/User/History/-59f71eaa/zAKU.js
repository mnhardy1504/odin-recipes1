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
    
      const outputElement = document.getElementById('reply');
      //reply = "This message will appear in the DOM.";
      outputElement.textContent = reply;

   log(reply);
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerChoice = prompt('Round ' + round + ': Enter your choice (Rock, Paper, or Sc issors):');
      const computerChoice = getComputerChoice();
  
      const roundResult = playRound(playerChoice, computerChoice);
      console.log(roundResult);
  
      if (roundResult.includes('You Win!')) {
        playerScore++;
      } else if (roundResult.includes('You lose, better luck next time!')) {
        computerScore++;
      }
      log(game)
    }
  }

  function log(text){
    const logsDiv = document.getElementById("logs");
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      logsDiv.appendChild(paragraph);
  }
   //console.log(reply);
   // document.getElementById('answer').innerHTML=reply;
    
    

  
 