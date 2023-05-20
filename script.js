let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper or Scissors",).toLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerSelection = playerChoice;
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!");
}   else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        console.log("Player wins this round - rock beats scissors");
}   else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        console.log("Player wins this round - paper beats rock");
}   else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        console.log("Player wins this round - scissors beat paper");
}   else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore += 1;
        console.log("Computer wins this round - rock beats scissors");
}   else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore += 1;
        console.log("Computer wins this round - paper beats rock");
}   else {
        computerScore += 1;
        console.log("Computer wins this round - scissors beat paper");
}}

function reportWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.warn("Player wins the game with " + playerScore + " points.");
    }   else if (computerScore > playerScore) {
        console.warn("Computer Wins the game with " + computerScore + " points." );
    }   else {
        console.warn("You both have same score. No one wins!");
    }
}

function game() {
    for (let i = 0; i <= 4; i++) {
        getPlayerChoice();
        getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Player - " + playerScore + " | " + "Computer - " + computerScore );
    }
    reportWinner(playerScore, computerScore);
}

game()