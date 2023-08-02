const playerSelection = prompt("Player Choice").toLowerCase()

choices = ["rock","paper","scissor"]

const computerSelection = Math.floor(Math.random() * choices.length)
alert(choices[computerSelection]);