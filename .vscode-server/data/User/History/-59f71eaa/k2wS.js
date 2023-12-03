function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log('executing playRound', playerSelection,computerSelection);
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

      const logsDiv = document.getElementById("logs");
      const paragraph = document.createElement("p");
      paragraph.textContent = " This is the new paragraph content.";

      logsDiv.appendChild(paragraph);

  }

   //console.log(reply);
   // document.getElementById('answer').innerHTML=reply;
    
    

  
 