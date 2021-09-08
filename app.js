const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const pScore = document.getElementById("pScoreNum")
const cScore = document.getElementById("cScoreNum")
const cSelect = document.getElementById("computerSelect")
const gameInfo = document.getElementById("game-info")
const round = document.getElementById("round")
const reset = document.getElementById("game-reset")
const cBtn = document.querySelector("#pcSelection")
const pBtn = document.querySelector(".pSelection")

rock.addEventListener("click", () => pClick("rock"))
paper.addEventListener("click", () => pClick("paper"))
scissors.addEventListener("click", () => pClick("scissors"))
reset.addEventListener("click", () => resetGame())

//Random selection by computer
function computerPlay() {
  const randomChoice = ["rock", "paper", "scissors"]
  return randomChoice[Math.floor(Math.random() * randomChoice.length)]
}

let playerScore = 0
let computerScore = 0
let roundNum = 0
let result = ""

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++
    roundNum++
    result = "win"
  }

  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore++
    roundNum++
    result = "lose"
  }

  if (playerSelection === computerSelection) {
    roundNum++
    result = "draw"
  }
}
function winnerOrLoser() {
  return playerScore === 5 || computerScore === 5
}
function pClick(playerSelection) {
  gameInfo.style.fontSize = "35px"
  if (winnerOrLoser()) {
    return finalScore()
  }
  let computerSelection = computerPlay()
  playRound(playerSelection, computerSelection)
  console.log(playerSelection, computerSelection)
  const cPick = `fa-hand-${computerSelection}`
  cSelect.classList = `fas ${cPick} fa-5x`
  updateScore()
}
function updateScore() {
  if (result === "draw") {
    gameInfo.textContent = "Draw!"
    cBtn.style.border = "5px orange solid"
  } else if (result === "win") {
    gameInfo.textContent = "You win this round!"
    cBtn.style.border = "5px red solid"
  } else if (result === "lose") {
    gameInfo.textContent = "You lose this round!"
    cBtn.style.border = "5px green solid"
  }

  round.textContent = `Round: ${roundNum}`
  pScore.textContent = `${playerScore}`
  cScore.textContent = `${computerScore}`
  if (winnerOrLoser()) {
    finalScore()
  }
}

function finalScore() {
  if (playerScore > computerScore) {
    gameInfo.style.fontSize = "40px"
    gameInfo.textContent = "Congratulations! You won!"
    round.textContent = ""
  } else {
    gameInfo.style.fontSize = "40px"
    gameInfo.textContent = "Uh-oh, you lost!"
  }
}

function resetGame() {
  playerScore = 0
  computerScore = 0
  roundNum = 0
  pScore.textContent = "0"
  cScore.textContent = "0"
  round.textContent = "Round: 0"
  gameInfo.textContent = "FIGHT!"
  gameInfo.style.fontSize = "55px"
}
