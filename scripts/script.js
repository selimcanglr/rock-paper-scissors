const MOVES = ["rock", "paper", "scissors"]
const playerScoreInfo = document.getElementById("playerScore");
const computerScoreInfo = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const MIN = 0;
    const MAX = MOVES.length - 1;
    return MOVES[Math.floor(Math.random() * (MAX - MIN + 1)) + MIN];
}

function isGameOver() {
    return playerScore == 5 || computerScore == 5;
}

function playRound(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "scissors"
        || playerMove === "paper" && computerMove === "rock"
        || playerMove === "scissors" && computerMove === "paper") {
            playerScore++;
        }
    if (computerMove === "rock" && playerMove === "scissors"
        || computerMove === "paper" && playerMove === "rock"
        || computerMove === "scissors" && playerMove === "paper") {
            computerScore++;
        }
}

function handleClick(playerMove) {
    if (isGameOver()) {
        // TODO: Figure out what to do when the game is over
    }

    let computerMove = computerPlay();
    playRound(playerMove, computerMove);
    updateScores();
}

function updateScores() {
    playerScoreInfo.innerHTML = `Player: ${playerScore}`;
    computerScoreInfo.innerHTML = `Computer: ${computerScore}`;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () =>  handleClick("paper"));
scissorButton.addEventListener("click", () =>  handleClick("scissors"));
