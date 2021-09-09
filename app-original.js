let playerScore = 0
let computerScore = 0
let roundNum = 0
let result = ""

//DOM Selectors
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const pScore = document.querySelector("#pScoreNum")
const cScore = document.querySelector("#cScoreNum")
const cSelect = document.querySelector("#computerSelect")
const gameInfo = document.querySelector("#game-info")
const round = document.querySelector("#round")
const reset = document.querySelector("#game-reset")
const cBtn = document.querySelector("#pcSelection")

//DOM Listeners
rock.addEventListener("click", () => pClick("rock"))
paper.addEventListener("click", () => pClick("paper"))
scissors.addEventListener("click", () => pClick("scissors"))
reset.addEventListener("click", () => resetGame())

//Computer Random Selection
function computerPlay() {
  const randomChoice = ["rock", "paper", "scissors"]
  return randomChoice[Math.floor(Math.random() * randomChoice.length)]
}

function pClick(playerSelection) {
  gameInfo.style.fontSize = "30px"
  resetPlayerColors()

  if (endGame()) {
    return finalScore()
  }

  let computerSelection = computerPlay()
  playRound(playerSelection, computerSelection)
  const cPick = `fa-hand-${computerSelection}`
  if (cPick == "fa-hand-paper") {
    cSelect.classList = `fas ${cPick} fa-5x rotate-45`
  } else cSelect.classList = `fas ${cPick} fa-5x`
  updateScore()
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++
    roundNum++
    result = "win"
    cBtn.style.border = "5px #ff0021 solid"
  }
  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore++
    roundNum++
    result = "lose"
    cBtn.style.border = "5px #5cdb5c solid"
  }
  if (playerSelection === computerSelection) {
    roundNum++
    result = "draw"
    cBtn.style.border = "5px #ffa500 solid"
  }
  playerBtnColor(playerSelection)
}

//Change player button border whether won or lost round
function playerBtnColor(playerSelection) {
  if (playerSelection === "rock" && result === "win") {
    rock.style.border = "5px #5cdb5c solid"
  }
  if (playerSelection === "paper" && result === "win") {
    paper.style.border = "5px #5cdb5c solid"
  }
  if (playerSelection === "scissors" && result === "win") {
    scissors.style.border = "5px #5cdb5c solid"
  }
  if (playerSelection === "rock" && result === "lose") {
    rock.style.border = "5px #ff0021 solid"
  }
  if (playerSelection === "paper" && result === "lose") {
    paper.style.border = "5px #ff0021 solid"
  }
  if (playerSelection === "scissors" && result === "lose") {
    scissors.style.border = "5px #ff0021 solid"
  }
  if (playerSelection === "rock" && result === "draw") {
    rock.style.border = "5px #ffa500 solid"
  }
  if (playerSelection === "paper" && result === "draw") {
    paper.style.border = "5px #ffa500 solid"
  }
  if (playerSelection === "scissors" && result === "draw") {
    scissors.style.border = "5px #ffa500 solid"
  }
}

function endGame() {
  return playerScore === 5 || computerScore === 5
}

function updateScore() {
  if (result === "draw") {
    gameInfo.textContent = "Draw!"
  } else if (result === "win") {
    gameInfo.textContent = "You win this round!"
  } else if (result === "lose") {
    gameInfo.textContent = "You lose this round!"
  }
  round.textContent = `Round: ${roundNum}`
  pScore.textContent = `${playerScore}`
  cScore.textContent = `${computerScore}`

  if (endGame()) {
    resetPlayerColors()  
    cSelect.classList = ""
    cBtn.style.border = ""
    return finalScore()
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
    round.textContent = ""
  }
}

function resetPlayerColors() {
  rock.style.border = ""
  paper.style.border = ""
  scissors.style.border = ""
}

function resetGame() {
  resetPlayerColors()
  playerScore = 0
  computerScore = 0
  roundNum = 0
  pScore.textContent = "0"
  cScore.textContent = "0"
  round.textContent = ""
  gameInfo.textContent = "FIGHT!"
  gameInfo.style.fontSize = "40px"
  cSelect.classList = ""
  cBtn.style.border = ""
}
