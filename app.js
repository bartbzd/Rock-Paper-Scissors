//Computer makes random selection
const computerPlay = function(){
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "rock"
    } else if (result === 1) {
        return "paper"
    } else {
        return "scissors"
    }
};
//Initial player and computer score
let computerScore = 0;
let playerScore = 0;


//Check user selection versus computer selection, return winner
function playRound(playerSelection, computerSelection) {
    //Rock and Scissors
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors"
        
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "You lose! Rock beats Scissors"
        }

    //Scissors and Paper
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats Paper"
        
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper"
        }

    //Paper and Rock
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock"
        
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You lose! Paper beats Rock"
        }
    //Tie
    else if (playerSelection === computerSelection){
        playerScore--;
        computerScore--;
        return "It's a draw!"
    } else {
        alert("Not Rock, Paper or Scissors, try again");
        let playerSelection = prompt("How will you choose?").toLowerCase();
    }

};

//Runs the game for 5 rounds and outputs end score
function game(){
    for(i = 0; i < 5; i++){
        playRound();
        let computerSelection = computerPlay();
        let playerSelection = prompt("How will you choose?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (computerScore > playerScore) {
        alert("You Lost!")
        } else if (playerScore > computerScore) {
       alert("You Won!")
        } else {
            alert("It's a tie!")
        }
}

//Run game and output score
game();
