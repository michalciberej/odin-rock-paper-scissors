let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let playerScoreText = document.querySelector("#player");
let computerScoreText = document.querySelector("#computer");
let winnerText = document.querySelector("#winnerText");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let playAgainButton = document.querySelector("#playAgain");

rockButton.addEventListener("click", () => btnClick("ROCK"));
paperButton.addEventListener("click", () => btnClick("PAPER"));
scissorsButton.addEventListener("click", () => btnClick("SCISSORS"));
playAgainButton.addEventListener("click", () => restartGame(playerScore, computerScore));

function computerSelection() {
  computerChoice = Math.round((Math.random() + 1) * 10) / 10;
  if (computerChoice < 1.4) {
    return computerChoice = "ROCK"
  } else if (computerChoice >= 1.4 && computerChoice <= 1.7) {
    return computerChoice = "PAPER";
  } else if (computerChoice > 1.7) {
    return computerChoice = "SCISSORS";
  }
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
      return winnerText.textContent = "Tie!"
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
      playerScore++ ;
      return winnerText.textContent = "Player wins! Paper beats rock"
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
      playerScore++ ;
      return winnerText.textContent = "Player wins! scissors beat paper"
  } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
      playerScore++ ;
      return winnerText.textContent = "Player wins! rock beats scissors"
  } else if (computerChoice === "PAPER" && playerChoice === "ROCK"){
      computerScore++ ;
      return winnerText.textContent = "Computer wins! paper beats rock"
  } else if (computerChoice === "ROCK" && playerChoice === "SCISSORS"){
      computerScore++ ;
      return winnerText.textContent = "Computer wins! rock beats scissors"
  } else if (computerChoice === "SCISSORS" && playerChoice === "PAPER"){
      computerScore++ ;
      return winnerText.textContent = "Computer wins! scissors beat paper"
  }}

function updateScore(playerScore, computerScore) {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

function gameOver(playerScore, computerScore) {
  if (isGameOver())
    if (playerScore > computerScore) {
      winnerText.textContent = "Player wins!"
    } else {
      winnerText.textContent = "Computer wins!"
  }
  return
}

function restartGame(playerScore, computerScore) {
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textValue = playerScore;
  computerScoreText.textValue = computerScore;
  playAgainButton.classList.toggle("hide");
}


function btnClick(playerChoice) {
  if (isGameOver()) {
    gameOver();
    playAgainButton.classList.toggle("hide");
    return
  }
  
  computerSelection();
  compareChoices(playerChoice, computerChoice);
  updateScore(playerScore, computerScore);

  if (isGameOver()) {
    gameOver();
    playAgainButton.classList.toggle("hide");
    return
  }
}



// function deActivateButtons() {
//   rockButton.removeEventListener("mousedown", () => {
//     computerSelection();
//     playerChoice = "rock";
//     compareChoices(playerChoice, computerChoice);
//     playerScoreText.textContent = playerScore;
//     computerScoreText.textContent = computerScore;
//     restartGame();
//   })
//   paperButton.removeEventListener("mousedown", () => {
//     computerSelection();
//     playerChoice = "rock";
//     compareChoices(playerChoice, computerChoice);
//     playerScoreText.textContent = playerScore;
//     computerScoreText.textContent = computerScore;
//     restartGame();
//   })
//   scissorsButton.removeEventListener("mousedown", () => {
//     computerSelection();
//     playerChoice = "rock";
//     compareChoices(playerChoice, computerChoice);
//     playerScoreText.textContent = playerScore;
//     computerScoreText.textContent = computerScore;
//     restartGame();
//   })
// }

// function toggleText() {
//   playerText.classList.toggle("hide");
//   computerText.classList.toggle("hide");
// }

// function redBorder() {
//   rockButton.classList.add(".redBorder");
//   paperButton.classList.add(".redBorder");
//   scissorsButton.classList.add(".redBorder");
// }

// function restartGame(playerScore, computerScore) {
//   if (playerScore === 5 || computerScore === 5) {
//     deActivateButtons();
//     redBorder();
//     toggleText();
//   } else {

//   }
// }



// // BUTTONS

// rockButton.addEventListener("mousedown", () => {
//   computerSelection();
//   playerChoice = "rock";
//   compareChoices(playerChoice, computerChoice);
//   playerScoreText.textContent = playerScore;
//   computerScoreText.textContent = computerScore;
//   restartGame();
// })

// paperButton.addEventListener("mousedown", () => {
//   computerSelection();
//   playerChoice = "paper";
//   compareChoices(playerChoice, computerChoice);
//   playerScoreText.textContent = playerScore;
//   computerScoreText.textContent = computerScore;
//   restartGame()
// })

// scissorsButton.addEventListener("mousedown", () => {
//   computerSelection();
//   playerChoice = "scissors";
//   compareChoices(playerChoice, computerChoice);
//   playerScoreText.textContent = playerScore;
//   computerScoreText.textContent = computerScore;
//   restartGame()
// })

