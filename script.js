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
function playRound (playerSelection, computerSelection) {
  
    if (playerSelection ==computerSelection) {
        return "It's a tie."
    }
    
    else if (playerSelection =='rock' && computerSelection=='scissors' || playerSelection =='scissors' && computerSelection=='paper' || playerSelection =='paper' && computerSelection=='rock') {
        playerWins++;
        return "You win!" + " " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerWins++; 
        return "You lose!" + " " + computerSelection + " beats " + playerSelection;
    }

}


function game () {
    let gameRounds = 5;
  
    for (let i=0; i < gameRounds; i++) {
        const playerSelection = prompt('Please enter your weapon, rock, paper or scissors', 'Rock, paper or scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound (playerSelection, computerSelection));
        console.log('------------------------------------------')
    }
    console.log("Computer score: " + computerWins + " Player score: " + playerWins);
}
game();


// Function to count whether player or computer won
