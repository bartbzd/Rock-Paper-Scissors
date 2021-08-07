//Random selection by computer
function computerPlay (){
    const randomChoice = ["rock", "paper", "scissors"]
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win!"
    }

    if (
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose!"
    }

    if (playerSelection === computerSelection){
        return "It's a draw!"
    } 

    else {
        alert("Not Rock, Paper or Scissors, try again")
        console.clear()
        resetGame()
    }
};

function game(){
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(playRound(playerSelection, computerSelection))
    score()

function score(){
    if (playerScore < 5 && computerScore < 5){
        game()
    } else if (playerScore === 5) {
        alert("YOU BEAT THE COMPUTER")
        resetGame()
    } else if (computerScore === 5){
        alert("YOU LOST TO THE COMPUTER")
        resetGame()
    } else if (playerScore === computerScore){
        alert("IT'S A DRAW")
        resetGame()
    }
}
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    game()
}
game();