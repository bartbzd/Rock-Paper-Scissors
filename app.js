//Computer makes random selection

// const computerPlay = function(){
//     let result = Math.floor(Math.random() * 3);
//     if (result === 0) {
//         return "rock"
//     } else if (result === 1) {
//         return "paper"
//     } else {
//         return "scissors"
//     }
// };


//Shorter random selection by computer
function computerPlay (){
    const randomChoice = ["rock", "paper", "scissors"]
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}
//Initial player and computer score
let computerScore = 0;
let playerScore = 0;


//Check user selection versus computer selection, return winner
function playRound(playerSelection, computerSelection) {
    //You Win Conditions
    if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win!";

    //You Lose Conditions
    } else if (
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose!";

    //Tie
    } else if (playerSelection === computerSelection){
        return "It's a draw!";
    } else if (playerSelection === null || "") {
        alert("See ya later!")
        console.clear();
        resetGame();
    }else {
        alert("Not Rock, Paper or Scissors, try again");
        let playerInput = prompt("How will you choose?").toLowerCase();
    }
};

//Runs the game for 5 rounds
function game(){
        for(i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("How will you choose?").toLowerCase();
        playRound();
        console.log(playRound(playerSelection, computerSelection));
        }
    //Output end score
    if (computerScore > playerScore) {
        console.log("You lost this round!")
        } else if (playerScore > computerScore) {
       console.log("You won this round!")
        } else if (computerScore == playerScore){
            console.log("It's a tie!")
        }
}

function resetGame() {
    let playerScore = 0;
    let computerScore = 0;
    game();
}

game();