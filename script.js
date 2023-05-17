// Rock, paper scissors game that plays against a computer
// getComputerChoice function that will randomly return Rock, Paper or Scissors
// Function to play round of game, takes playerSelection and computerSelection, returns string winner declaration
// Function called game(), play 5 rounds using pay round function

// First we want to get user input of choice of Rock, Paper or Scissors
// Second we want to convert player selection to 


// This function gets a random selection of rock, paper or scissors for the computer.
function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
}


let playerWins=0;
let computerWins=0;

// Function that plays a single round of rock, paper or scissors
// Function returns a string for the winner, loser and a tie
function playRound (event) {
  
    const computerSelection=getComputerChoice();
    let playerSelection = event.target.id;
    const resultsStatement = document.querySelector('.result-statement');
    if (playerSelection ==computerSelection) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "It's a glorius tie";
    resultsStatement.appendChild(content);  
    checkGameEnd();
        console.log("It's a tie.")
        return "It's a tie."
    }
    
    else if (playerSelection =='rock' && computerSelection=='scissors' || playerSelection =='scissors' && computerSelection=='paper' || playerSelection =='paper' && computerSelection=='rock') {
        playerWins++;
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = "You win!" + " " + playerSelection + " beats " + computerSelection;
        resultsStatement.appendChild(content);  
        console.log("You win!" + " " + playerSelection + " beats " + computerSelection);
        scoreTracker ();
        checkGameEnd();
        return "You win!" + " " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerWins++;
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = "You lose!" + " " + computerSelection + " beats " + playerSelection;
        resultsStatement.appendChild(content);
        console.log("You lose!" + " " + computerSelection + " beats " + playerSelection);
        scoreTracker ();
        checkGameEnd();
        return "You lose!" + " " + computerSelection + " beats " + playerSelection;
    }

}


function scoreTracker () {
    // When a player wins, increment the play score counter by 1
    // When computer wins increment computer score counter by 1

    const playerScoreTracker = document.querySelector('.player-score')
    const computerScoreTracker = document.querySelector('.computer-score');
    playerScoreTracker.textContent = playerWins;
    computerScoreTracker.textContent = computerWins;
    
}

function checkGameEnd() {
    if (playerWins === 5 || computerWins === 5) {
      const rockButton = document.getElementById('rock');
      const paperButton = document.getElementById('paper');
      const scissorsButton = document.getElementById('scissors');
      rockButton.removeEventListener('click', playRound);
      paperButton.removeEventListener('click', playRound);
      scissorsButton.removeEventListener('click', playRound);
      const resultsStatement = document.querySelector('.result-statement');
      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = "Game Over! Player: " + playerWins + " | Computer: " + computerWins;  
      resultsStatement.appendChild(content);
      const contentOver = document.createElement('div');
      contentOver.classList.add('content');
      contentOver.textContent = "Refresh the page to play again" 
      resultsStatement.appendChild(contentOver);        
    
      
    }
  }

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click',playRound);
paperButton.addEventListener('click',playRound);
scissorsButton.addEventListener('click',playRound);

// For now remove the logic that plays exactly 5 rounds
// Add an event listener to the buttons that call your play round function with correct player selection each
// time

// Add a div for displaying results and change al your console.log into DOM methods

// Display the running score and announce a winner of the game once someone reaches 5 points

function game () {
    let gameRounds = 5;
  
    for (let i=0; i < gameRounds; i++) {
        const playerSelection = prompt('Please enter your weapon, rock, paper or scissors', 'Rock, paper or scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound (playerSelection, computerSelection));
        console.log('------------------------------------------')
    }
    console.log("Computer score: " + computerWins + " Player score: " + playerWins);
    if (computerWins>playerWins) {
        console.log('Game over. Computer has won.');
    }
    else if (computerWins==playerWins) {
        console.log('Game over. It\'s a tie' );
    }
    else {
        console.log('Game over. You win.');
    }
}



