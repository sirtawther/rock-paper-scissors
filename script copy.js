let choices = ["rock", "paper", "scissor"]

let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;
let currentWinner = ""
let input = document.querySelector("input")


let select = document.querySelector("select")
const playerSelection = select.value

input.addEventListener("click",() => {
    const playerSelection = select.value
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    document.getElementById("result").innerHTML = "";
    

    playRound(playerSelection,computerSelection)
    
})


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissor") |
        (playerSelection == "paper" && computerSelection == "rock") |
        (playerSelection == "scissor" && computerSelection == "paper")) {
        currentWinner = "Player"    
        playerScore += 1;
        roundPlayed += 1;
        document.getElementById("round").innerHTML = "Round: " +roundPlayed + " - Winner is " + currentWinner + " ! " + playerSelection + " beats " + computerSelection + "."
        
    }
    else if (playerSelection == computerSelection) {
        playerScore += 1;
        computerScore += 1;
        roundPlayed += 1;
        currentWinner = "Player and Computer" 
        document.getElementById("round").innerHTML = "Round: " +roundPlayed+" - "+ currentWinner + " got a tie!"
        

    }
    else {
        computerScore += 1;
        roundPlayed += 1;
        currentWinner = "Computer" 
        document.getElementById("round").innerHTML = "Round: " +roundPlayed +" - Winner is " + currentWinner + " ! " + computerSelection + " beats " + playerSelection + "."
    }

    if (roundPlayed == 5) {
        
     

        endGame();
        
        
    }
    


}



function endGame() {
    roundPlayed = 0;
    
    
    


    if (playerScore > computerScore) {
        document.getElementById("result").innerHTML = "Player Wins!" +"<br>" + "Player Score: " + playerScore + "<br>" + "Computer Score: " + computerScore 
    } else if (playerScore < computerScore) {
        document.getElementById("result").innerHTML = "Computer Wins!" + "<br>" +  "Computer Score: " + computerScore  + "<br>"+ "Player Score: " + playerScore 
    } else {
        document.getElementById("result").innerHTML = "It's a Tie !" +  "<br>" + "Player Score: " + playerScore + "<br>" + "Computer Score: " + computerScore
    }
    playerScore = 0;
    computerScore = 0;
    

}





