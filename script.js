let playerSelection = "";
let computerSelection = "";

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper or Scissors",).toLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerSelection = playerChoice
    }   else {
        getPlayerChoice()
    }
}

function getComputerChoice() {
    const computerChoice = Math.random() + 1;
    if (computerChoice <= 1.666 && computerChoice > 1.333) {
        return computerSelection = "rock";
}   else if (computerChoice <= 1.333) {
        return computerSelection = "paper"; 
}   else {
        return computerSelection = "scissors";
    }
}