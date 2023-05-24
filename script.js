let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let playerScoreText = document.querySelector("#player");
let computerScoreText = document.querySelector("#computer");
let winnerText = document.querySelector("#winnerText");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

function computerSelection() {
  computerChoice = Math.round((Math.random() + 1) * 10) / 10;
  if (computerChoice < 1.4) {
    return computerChoice = "rock"
  } else if (computerChoice >= 1.4 && computerChoice <= 1.7) {
    return computerChoice = "paper";
  } else if (computerChoice > 1.7) {
    return computerChoice = "scissors";
  }
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
      return winnerText.textContent = "Tie!"
  } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore += 1;
      return winnerText.textContent = "Player wins! Paper beats rock"
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore += 1;
      return winnerText.textContent = "Player wins! scissors beat paper"
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
      playerScore += 1;
      return winnerText.textContent = "Player wins! rock beats scissors"
  } else if (computerChoice === "paper" && playerChoice === "rock"){
      computerScore += 1;
      return winnerText.textContent = "Computer wins! paper beats rock"
  } else if (computerChoice === "rock" && playerChoice === "scissors"){
      computerScore += 1;
      return winnerText.textContent = "Computer wins! rock beats scissors"
  } else if (computerChoice === "scissors" && playerChoice === "paper"){
      computerScore += 1;
      return winnerText.textContent = "Computer wins! scissors beat paper"
  }}

function hide() {
  rockButton.classList.toggle("hide");
  paperButton.classList.toggle("hide");
  scissorsButton.classList.toggle("hide");
  playerScoreText.classList.toggle("hide");
  computerScoreText.classList.toggle("hide");
}

rockButton.addEventListener("mousedown", () => {
  computerSelection();
  playerChoice = "rock";
  compareChoices(playerChoice, computerChoice);
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
})

paperButton.addEventListener("mousedown", () => {
  computerSelection();
  playerChoice = "paper";
  compareChoices(playerChoice, computerChoice);
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
})

scissorsButton.addEventListener("mousedown", () => {
  computerSelection();
  playerChoice = "scissors";
  compareChoices(playerChoice, computerChoice);
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  endGame(playerScore, computerScore);
})

function restartScore(x, y) {
  if (x > y) {
      winnerText.classList.toggle("hide");
      winnerText.textContent = "You win the game!"
      playerScore = 0;
      computerScore = 0;
      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;
    } else {
      winnerText.classList.toggle("hide");
      winnerText.textContent = "Computer wins the game!"
      playerScore = 0;
      computerScore = 0;
      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;
    }
}
