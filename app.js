//Random selection by computer
function computerPlay (){
    const randomChoice = ["rock", "paper", "scissors"]
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

//Initial player and computer score
let playerScore = 0
let computerScore = 0

//Check user selection versus computer selection, return winner
function playRound(playerSelection, computerSelection) {
    //Winning Conditions
    if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win!"
    }

    //Losing Conditions
    if (
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose!"
    }

    //Tie Conditions
    if (playerSelection === computerSelection){
        return "It's a draw!"
    } 
    
    //Didn't enter rock, paper or scissors
    else {
        alert("Not Rock, Paper or Scissors, try again")
        console.clear()
        resetGame()
    }
};

//Play through game
function game(){
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(playRound(playerSelection, computerSelection))
    score()

//Play until score of 5
function score(){
    if (playerScore < 5 && computerScore < 5){
        game()
    } else if (playerScore === 5) {
        alert("YOU BEAT THE COMPUTER")
    } else if (computerScore === 5){
        alert("YOU LOST TO THE COMPUTER")
    } else if (playerScore === computerScore){
        alert("IT'S A DRAW")
    }
}
}

//Resets game
function resetGame() {
    playerScore = 0
    computerScore = 0
    game()
}
game();