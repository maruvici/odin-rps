console.log("Let's Play Rock-Paper-Scissors!");
let humanScore = (computerScore = 0);

function playRound() {
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

  function getHumanChoice() {
    let humanChoice;

    do {
      humanChoice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(humanChoice));

    return humanChoice[0].toUpperCase() + humanChoice.slice(1);
  }

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();

  //   Rock-Paper-Scissors Logic:
  //   If choices are same:
  //      draw
  //   Else:
  //      longer choice wins
  //   If choices are scissor and rock:
  //      reverse result

  if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else if (
    (humanChoice.length > computerChoice.length &&
      !(humanChoice === "Scissors" && computerChoice === "Rock")) ||
    (computerChoice === "Scissors" && humanChoice === "Rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
  }

  console.log(`Your Score: ${humanScore}, CPU's Score: ${computerScore}`);
}

playRound();
