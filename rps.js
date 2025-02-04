// let humanScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   return choices[Math.floor(Math.random() * 3)];
// }
// let cChoice = getComputerChoice();
// function playRound(humanChoice, computerChoice) {
//   let resultMessage = `You chose ${humanChoice}. Computer chose ${computerChoice}. `;

//   if (humanChoice === computerChoice) {
//     resultMessage += "It's a tie!";
//   } else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
//   ) {
//     resultMessage += `You win! ${humanChoice} beats ${computerChoice}.`;
//     humanScore++;
//   } else {
//     resultMessage += `You lose! ${computerChoice} beats ${humanChoice}.`;
//     computerScore++;
//   }

//   updateResults(resultMessage);
//   updateScore();

//   if (humanScore === 5 || computerScore === 5) {
//     announceWinner();
//   }
// }

// function updateResults(message) {
//   const resultsDiv = document.getElementById("results");
//   resultsDiv.textContent = message;
// }

// function updateScore() {
//   const scoreDiv = document.getElementById("score");
//   scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
// }

// function announceWinner() {
//   const resultsDiv = document.getElementById("results");
//   if (humanScore === 5) {
//     resultsDiv.textContent = "Congratulations! You win the game!";
//   } else {
//     resultsDiv.textContent = "You lose! The computer wins the game!";
//   }
//   disableButtons();
// }

// function disableButtons() {
//   document.getElementById("rock").disabled = true;
//   document.getElementById("paper").disabled = true;
//   document.getElementById("scissors").disabled = true;
// }

// document.getElementById("rock").addEventListener("click", () => {
//   playRound("rock", getComputerChoice());
//   document.getElementById("humanimg").src = `./imgs/rockLeft.png`;
//   document.getElementById(
//     "compimg"
//   ).src = `./imgs/${getComputerChoice()}Right.png`;
// });

// document.getElementById("paper").addEventListener("click", () => {
//   playRound("paper", getComputerChoice());
//   document.getElementById("humanimg").src = `./imgs/paperLeft.png`;
//   document.getElementById(
//     "compimg"
//   ).src = `./imgs/${getComputerChoice()}Right.png`;
// });
// document.getElementById("scissors").addEventListener("click", () => {
//   playRound("scissors", getComputerChoice());
//   document.getElementById("humanimg").src = `./imgs/scissorsLeft.png`;
//   document.getElementById(
//     "compimg"
//   ).src = `./imgs/${getComputerChoice()}Right.png`;
// });

// console.log(cChoice)

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  let resultMessage = `You chose ${humanChoice}. Computer chose ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    resultMessage += "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultMessage += `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  updateResults(resultMessage);
  updateScore();

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function updateResults(message) {
  document.getElementById("results").textContent = message;
}

function updateScore() {
  document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function announceWinner() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.textContent = humanScore === 5 ? "Congratulations! You win the game!" : "You lose! The computer wins the game!";
  disableButtons();
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function addShakeAnimation() {
  const humanImg = document.getElementById("humanimg");
  const compImg = document.getElementById("compimg");

  humanImg.classList.add("shake");
  compImg.classList.add("shake");

  setTimeout(() => {
    humanImg.classList.remove("shake");
    compImg.classList.remove("shake");
  }, 400);
}

document.getElementById("rock").addEventListener("click", () => {
  const compChoice = getComputerChoice();
  playRound("rock", compChoice);
  addShakeAnimation();
  document.getElementById("humanimg").src = `./imgs/rockLeft.png`;
  document.getElementById("compimg").src = `./imgs/${compChoice}Right.png`;
});

document.getElementById("paper").addEventListener("click", () => {
  const compChoice = getComputerChoice();
  playRound("paper", compChoice);
  addShakeAnimation();
  document.getElementById("humanimg").src = `./imgs/paperLeft.png`;
  document.getElementById("compimg").src = `./imgs/${compChoice}Right.png`;
});

document.getElementById("scissors").addEventListener("click", () => {
  const compChoice = getComputerChoice();
  playRound("scissors", compChoice);
  addShakeAnimation();
  document.getElementById("humanimg").src = `./imgs/scissorsLeft.png`;
  document.getElementById("compimg").src = `./imgs/${compChoice}Right.png`;
});
