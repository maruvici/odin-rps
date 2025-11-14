const choices = document.querySelectorAll("button");
const choicesContainer = document.querySelector(".container");
const results = document.querySelector(".results");
const scores = document.querySelector(".scores");
let humanScore = (computerScore = roundNumber = 0);

function playRound(humanChoice) {
  function getComputerChoice() {
    // Get random int between 0 to 2
    choice = Math.floor(Math.random() * 3);

    switch (choice) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
    return 1;
  }

  if (!["Rock", "Paper", "Scissors"].includes(humanChoice)) {
    console.log("Invalid Choice, Please Try Again.");
    return 1;
  }

  roundNumber++;
  computerChoice = getComputerChoice();

  //   Rock-Paper-Scissors Logic:
  //   If choices are same:
  //      draw
  //   Else:
  //      longer choice wins
  //   If choices are scissor and rock:
  //      reverse resulti

  if (humanChoice === computerChoice) {
    results.textContent = "Draw!";
  } else if (
    (humanChoice.length > computerChoice.length &&
      !(humanChoice === "Scissors" && computerChoice === "Rock")) ||
    (computerChoice === "Scissors" && humanChoice === "Rock")
  ) {
    humanScore++;
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  scores.textContent = `P1 Score: ${humanScore} CPU Score: ${computerScore}`;

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      results.textContent = "Game Over: You Win! Good job!";
    } else {
      results.textContent = "Game Over: You Lose! Try again?";
    }
    choices.forEach((choice) => {
      choicesContainer.removeChild(choice);
    });
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => playRound(e.target.id));
});
