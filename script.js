let choices = ["rock", "paper", "scissor"]

let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;
let currentWinner = ""
let input = document.querySelector("input")
let eachRoundMessage = []


let select = document.querySelector("select")
const playerSelection = select.value

input.addEventListener("click",() => {
    const playerSelection = select.value
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    document.getElementById("result").innerHTML = "";
    
    
    
    
    
    document.getElementById("round").innerHTML = ""
    message = playRound(playerSelection,computerSelection)
    document.getElementById("eachRound").innerHTML = message
    eachRoundMessage.push(message)

    
   
    

    if (roundPlayed == 5) {

        let allRoundResults = "<ol>"
        for(let i=0; i < eachRoundMessage.length; i++) {
            allRoundResults += "<li>" +  eachRoundMessage[i] + "</li>"
            
        }
        document.getElementById("round").innerHTML = allRoundResults
        allRoundResults += "/<ol>"

        
        
        
        endGame();
        
    }
    
})


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissor") |
        (playerSelection == "paper" && computerSelection == "rock") |
        (playerSelection == "scissor" && computerSelection == "paper")) {
           
        playerScore += 1;
        roundPlayed += 1;
        return `Player Win! ${playerSelection} beats ${computerSelection}!`
    }
    else if (playerSelection == computerSelection) {
        playerScore += 1;
        computerScore += 1;
        roundPlayed += 1;
        
        return `Player and Computer got a tie!`
        

    }
    else {
        computerScore += 1;
        roundPlayed += 1;
        
        return `Computer Win! ${playerSelection} beats ${computerSelection}!`
    }

   
    


}



function endGame() {
    document.getElementById("eachRound").innerHTML = ""
    eachRoundMessage = []
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





