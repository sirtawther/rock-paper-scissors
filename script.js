let choices = ["rock", "paper", "scissor"]

let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissor") |
        (playerSelection == "paper" && computerSelection == "rock") |
        (playerSelection == "scissor" && computerSelection == "paper")) {
        playerScore += 1;
        roundPlayed += 1;
        alert(`You win! ${playerSelection} beats ${computerSelection}.`)
    }
    else if (playerSelection == computerSelection) {
        playerScore += 1;
        computerScore += 1;
        roundPlayed += 1;
        alert(`${playerSelection} and ${computerSelection} is a tie!`)

    }
    else {
        computerScore += 1;
        roundPlayed += 1;
        alert(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }


    if (roundPlayed == 5) {
        endGame();
    }


}



function endGame() {

    if (playerScore > computerScore) {
        alert(`Player wins!\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`Computer wins!\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`)
    } else {
        alert(`Player score: ${playerScore}\nComputer score: ${computerScore}\nTie`)
    }
}



for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Player choice \(rock,paper,scissor\):");

    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    if (choices.includes(playerSelection)) {

        playRound(playerSelection, computerSelection)
    } else {
        alert("Please make valid choice")
        i--;
    }
}

