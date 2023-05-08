// Rock, paper scissors game that plays against a computer
// getComputerChoice function that will randomly return Rock, Paper or Scissors
// Function to play round of game, takes playerSelection and computerSelection, returns string winner declaration
// Function called game(), play 5 rounds using pay round function

// First we want to get user input of choice of Rock, Paper or Scissors
// Second we want to convert player selection to 


// console.log(playerSelection);

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
}

console.log('Computer chooses' +' ' + getComputerChoice());
let playerWins=0;
let computerWins=0;
function playRound (playerSelection, computerSelection) {
    // Result where player wins
    // Player chooses Rock, computer chooses scissors
    // Player chooses Scissors, computer chooses paper
    // Player chooses Paper, computer chooses scissors
    // Player and computer same choice, is tie
    // Else computer wins

    // Player chooses Rock
  
    if (playerSelection==computerSelection) {
        return "It's a tie."
    }
    
    else if (playerSelection=='rock' && computerSelection=='scissors' || playerSelection=='scissors' && computerSelection=='paper' || playerSelection=='paper' && computerSelection=='rock') {
        playerWins++;
        return "You win!" + " " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerWins++; 
        return "You lose!" + " " + computerSelection + " beats " + playerSelection;
    }

}
// const computerSelection = getComputerChoice();
// console.log(playRound (playerSelection, computerSelection));




// Function called game. Play a game of 5 rounds



function game () {
    let gameRounds = 5;
  
    for (let i=0; i < gameRounds; i++) {
        const playerSelection = prompt('Please enter your weapon, rock, paper or scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound (playerSelection, computerSelection));
    }
    console.log("Computer score: " + computerWins + " Player score: " + playerWins);
}
game();


// Function to count whether player or computer won
