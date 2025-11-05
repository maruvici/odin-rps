console.log("Let's Play Rock-Paper-Scissors!")
let humanScore = computerScore = 0;

function getComputerChoice() {
    // Get random int between 0 to 2
    choice = Math.floor(Math.random() * 3)

    switch(choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }

    return 0;
}

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    } while(!(["rock", "paper", "scissors"].includes(humanChoice)))
    
    return humanChoice;
}
