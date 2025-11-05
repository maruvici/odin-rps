console.log("Let's Play Rock-Paper-Scissors!");

function playGame() {
  let humanScore = (computerScore = roundNumber = 0);
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

    roundNumber++;
    console.log(`Round ${roundNumber}`);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    //   Rock-Paper-Scissors Logic:
    //   If choices are same:
    //      draw
    //   Else:
    //      longer choice wins
    //   If choices are scissor and rock:
    //      reverse resulti

    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (humanChoice.length > computerChoice.length &&
        !(humanChoice === "Scissors" && computerChoice === "Rock")) ||
      (computerChoice === "Scissors" && humanChoice === "Rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Your Score: ${humanScore}, CPU's Score: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (humanScore === computerScore) {
    console.log("Game Over: It's a Draw!");
  } else if (humanScore > computerScore) {
    console.log("Game Over: You Win! Good job!");
  } else {
    console.log("Game Over: You Lose! Try again?");
  }
}

playGame();
